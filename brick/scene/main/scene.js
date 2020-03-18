class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        var game = this.game
        this.score = 0
        this.paddle = Paddle.new(game)
        this.ball = Ball.new(game)
        this.blocks = this.loadLevel(1)
        this.scoreText = Score.new(game)
        this.background = Background.new(game)
        this.addElement(this.background)
        this.addElement(this.paddle)
        this.addElement(this.ball)
        this.addElement(this.blocks)
        this.addElement(this.scoreText)
        this.changeLevel()
        this.registerAction()
    }
    registerAction() {
        var game = this.game
        var paddle = this.paddle
        var ball = this.ball
        var blocks = this.blocks
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
                self.addElement(self.blocks)
            }
        })
    }
    clearBlocks() {
        var blocks = this.blocks
        if (blocks) {
            for (let b of blocks) {
                b.status = 'clear'
            }
        }
    }
    loadLevel(n) {
        // 先清除
        this.clearBlocks()
        var game = this.game
        n = n - 1
        var level = levels[n]
        var blocks = []
        for (var i = 0; i < level.length; i++) {
            var arr = level[i];
            if (arr) {
                var block = Block.new(arr, game)
                blocks.push(block)
            }
        }
        return blocks
    }
    changeLevel() {
        var game = this.game
        var self = this
        window.addEventListener('keydown', function (event) {
            var key = event.key
            var levels = '123'
            if (levels.includes(key)) {
                self.blocks = self.loadLevel(Number(key), game)
                self.addElement(self.blocks)
            }
        })
    }
    draw() {
        // var game = this.game
        // // draw 背景
        // game.context.fillStyle = "#554"
        // game.context.fillRect(0, 0, 455, 300)
        super.draw()
    }
}
