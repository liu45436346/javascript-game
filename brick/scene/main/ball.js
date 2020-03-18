class Ball extends BaseImage {
    constructor(game) {
        super(game, 'ball')
        this.x = 100
        this.y = 200
        this.speedX = 5
        this.speedY = 5
        this.fired = false
        this.enableDrag = false
    }
    update() {
        this.move()
        this.collide()
        this.gameOver()
    }
    gameOver() {
        // game over
        let paddle = this.scene.paddle
        let game = this.game
        if (this.y > paddle.y) {
            var scene = SceneEnd.new(game)
            game.replaceScene(scene)
        }
    }
    collide() {
        let paddle = this.scene.paddle
        let blocks = this.scene.blocks
        if (collide(paddle, this)) {
            this.rebound()
        }
        for (let block of blocks) {
            var cod = block.status === 'show' && collide(block, this)
            if (cod) {
                block.kill()
                this.rebound()
                this.scene.score += 100
            }
        }
    }
    fire() {
        this.fired = true
    }
    move() {
        var o = this
        if (o.fired) {
            if (o.x < 0 || o.x > 455) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    rebound() {
        var o = this
        o.speedY = -o.speedY
    }
    hasPoint(x, y) {
        var o = this
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
    changByPoint(x, y) {
        var o = this
        o.x = x
        o.y = y
    }
}
