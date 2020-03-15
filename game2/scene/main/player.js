class Player extends BaseImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.x = 250
        this.y = 500
        this.speed = 10
        this.cooldown = 0
    }
    update() {
        this.speed = config.player_speed
        if (this.cooldown) {
            this.cooldown--
        }
    }
    fire() {
        if (this.cooldown === 0) {
            this.cooldown = config.bullet_cooldown
            var x = this.x + this.w / 2
            var y = this.y
            var bullet = Bullet.new(this.game)
            bullet.x = x
            bullet.y = y
            this.scene.addElement(bullet)
        }
    }
    moveX(x) {
        var w = this.w
        if (x < 0) {
            x = 0
        } else if (x + w > 480) {
            x = 480 - w
        }
        this.x = x
    }
    moveY(y) {
        var h = this.h
        if (y < 0) {
            y = 0
        } else if (y + h > 700) {
            y = 700 - h
        }
        this.y = y
    }
    moveLeft() {
        var o = this
        o.moveX(o.x - o.speed)
    }
    moveRight() {
        var o = this
        o.moveX(o.x + o.speed)
    }
    moveUp() {
        var o = this
        o.moveY(o.y - o.speed)
    }
    moveDown() {
        var o = this
        o.moveY(o.y + o.speed)
    }
}