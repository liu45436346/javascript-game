class Enemy extends BaseImage {
    constructor(game) {
        var level = random(1, 3)
        super(game, 'enemy' + level)
        this.setup()
    }
    setup() {
        this.speed = random(2, 6)
        this.x = random(0, 350)
        this.y = -random(0, 300)
    }
    move(y) {
        this.y = y
        if (y > 700) {
            this.setup()
        }

    }
    update() {
        this.y += this.speed
        this.speed = config.enemy_speed
        if(this.y > 700) {
            this.setup()
        }
    }
    // moveDown() {
    //     this.y += this.speed
    // }
}