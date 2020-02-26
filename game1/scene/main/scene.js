var Scene = function (game) {

    var scence = {
    }
    var score = 0
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

    scence.update = function () {
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
        // game over
        if (ball.y > paddle.y) {
            var scene = new SceneEnd(game)
            game.replaceScene(scene)
        }
    }

    scence.draw = function () {
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
        ball.enableDrag = false
    })

    var changeLevel = function(game) {
        window.addEventListener('keydown', function (event) {
            var key = event.key
            var levels = '123'
            if (levels.includes(key)) {
                blocks = loadLevel(Number(key), game)
            }
        })
    }
    changeLevel(game)
    return scence
}