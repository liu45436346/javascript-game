class Bullet extends BaseImage {
    constructor(game) {
        super(game, 'bullet1')
        this.x = 0
        this.y = 0
        this.speed = 5
    }
    update() {
        this.speed = config.bullet_speed
        this.y -= this.speed
    }
}