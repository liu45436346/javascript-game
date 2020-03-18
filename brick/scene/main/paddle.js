class Paddle extends BaseImage {
    constructor(game) {
        super(game, 'paddle')
        this.x = 100
        this.y = 240
        this.speed = 10
    }
    move(x) {
        var w = this.w
        if (x < 0) {
            x = 0
        } else if (x + w > 455) {
            x = 455 - w
        }
        this.x = x
    }
    moveLeft() {
        var o = this
        o.move(o.x - o.speed)
    }
    moveRight() {
        var o = this
        o.move(o.x + o.speed)
    }
    collide(ball) {
        var o = this
        return collide(o, ball)
    }
}
