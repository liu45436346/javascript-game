var changeBallSpeed = function () {
    var el = document.querySelector('#id-input-speed')
    el.addEventListener('input', function (event) {
        var target = event.target
        var value = Number(target.value)
        if (!value) value = 30
        window.fps = value
    })

}

var loadLevel = function(n, game) {
    n = n - 1
    var level = levels[n]
    var blacks = []
    for (var i = 0; i < level.length; i++) {
        var arr = level[i];
        var black = Black(arr, game)
        blacks.push(black)
    }
    return blacks
}

var changeLevel = function(game) {
    window.addEventListener('keydown', function (event) {
        var key = event.key
        var levels = '123'
        if (levels.includes(key)) {
            blacks = loadLevel(Number(key), game)
        }
    })
}

var enableDebugMode = function(enable) {
    if (!enable) {
        return
    }
    window.addEventListener('keydown', function (event) {
        var key = event.key
        if (key === 'p') {
            window.paused = !window.paused
        }
    })

}

var blacks = []
var __main = function () {

    var images = {
        paddle: 'paddle.png',
        ball: 'ball.png',
        black: 'black.png',
    }
    var gameCallback = function() {
        changeBallSpeed()
        changeLevel(game)
        enableDebugMode(true)
        var score = 0
        // paddle
        var images = game.image
        var paddle = Paddle(game)
        var ball = Ball(game)
        // var black = Black()
        blacks = loadLevel(1, game)

        game.registerAction('a', function () {
            paddle.moveLeft()
        })

        game.registerAction('d', function () {
            paddle.moveRight()
        })

        game.registerAction('f', function () {
            ball.fire()
        })
        // update
        game.update = function () {
            ball.move()
            if (paddle.collide(ball)) {
                ball.rebound()
            }
            for (var i = 0; i < blacks.length; i++) {
                var black = blacks[i];
                var cod = black.alive && (rectIntersects(black, ball) || rectIntersects(ball, black))
                if (cod) {
                    black.kill()
                    ball.rebound()
                    score += 100
                }
            }
        }

        // draw
        game.draw = function () {
            game.drawImage(paddle)
            game.drawImage(ball)
            for (var i = 0; i < blacks.length; i++) {
                var black = blacks[i];
                if (black.alive) {
                    game.drawImage(black)
                }
            }
            game.context.fillText('分数: ' + score, 10, 290);
        }
    }
    var game = Game(30, images, gameCallback)

}
__main()