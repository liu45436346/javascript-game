class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.score = 0
        this.paddle = Paddle.new(game)
        this.ball = Ball.new(game)
        this.blocks = this.loadLevel(1)
        this.setup()
        this.changeLevel()
    }
    setup() {
        var game = this.game
        var paddle = this.paddle
        var ball = this.ball
        game.registerAction('a', function () {
            paddle.moveLeft()
        })

        game.registerAction('d', function () {
            paddle.moveRight()
        })

        game.registerAction('f', function () {
            ball.fire()
        })

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
        var self = this
        window.addEventListener('keydown', function (event) {
            var key = event.key
            var levels = '123'
            if (levels.includes(key)) {
                self.blocks = self.loadLevel(Number(key))
            }
        })
    }
    loadLevel(n) {
        var game = this.game
        n = n - 1
        var level = levels[n]
        var blocks = []
        for (var i = 0; i < level.length; i++) {
            var arr = level[i];
            var block = Block.new(arr, game)
            blocks.push(block)
        }
        return blocks
    }
    changeLevel() {
        var game = this.game
        var blocks = this.blocks
        var self = this
        window.addEventListener('keydown', function (event) {
            var key = event.key
            var levels = '123'
            if (levels.includes(key)) {
                self.blocks = self.loadLevel(Number(key), game)
            }
        })
    }
    update() {
        var game = this.game
        var ball = this.ball
        var paddle = this.paddle
        var score = this.score
        var blocks = this.blocks
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
                this.score += 100
            }
        }
        // game over
        if (ball.y > paddle.y) {
            var scene = SceneEnd.new(game)
            game.replaceScene(scene)
        }
    }
    draw() {
        var game = this.game
        var ball = this.ball
        var paddle = this.paddle
        var score = this.score
        var blocks = this.blocks
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
}
