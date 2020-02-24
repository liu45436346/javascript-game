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
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var arr = level[i];
        var block = Block(arr, game)
        blocks.push(block)
    }
    return blocks
}

var changeLevel = function(game) {
    window.addEventListener('keydown', function (event) {
        var key = event.key
        var levels = '123'
        if (levels.includes(key)) {
            blocks = loadLevel(Number(key), game)
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

var blocks = []
var __main = function () {

    var images = {
        paddle: 'paddle.png',
        ball: 'ball.png',
        block: 'block.png',
    }
    var gameCallback = function() {
        changeBallSpeed()
        changeLevel(game)
        enableDebugMode(true)
        var score = 0
        // paddle
        var paddle = Paddle(game)
        var ball = Ball(game)
        blocks = loadLevel(1, game)

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
            if (window.paused) {
                return
            }
            ball.move()
            if (paddle.collide(ball)) {
                ball.rebound()
            }
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                var cod = block.alive && collide(block, ball)
                if (cod) {
                    block.kill()
                    ball.rebound()
                    score += 100
                }
            }
        }

        // draw
        game.draw = function () {
            // draw 背景
            game.context.fillStyle = "#554"
            game.context.fillRect(0, 0, 400, 300)

            game.drawImage(paddle)
            game.drawImage(ball)
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                if (block.alive) {
                    game.drawImage(block)
                }
            }
            // draw 分数
            game.context.fillStyle = "#fff"
            game.context.fillText('分数: ' + score, 10, 290);
        }

        game.canvas.addEventListener('mousedown', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            if (ball.hasPoint(x, y)) {
                ball.enableDrag = true
            }
        })

        game.canvas.addEventListener('mousemove', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            if (ball.enableDrag) {
                ball.changByPoint(x, y)
            }
        })

        game.canvas.addEventListener('mouseup', function (event) {
            var x = event.offsetX
            var y = event.offsetY
            ball.enableDrag = false
        })
    }
    var game = Game(30, images, gameCallback)

}
__main()