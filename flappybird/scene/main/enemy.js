class Enemy extends BaseImage {
    constructor(game) {
        var level = random(1, 3)
        super(game, 'enemy' + level)
        this.level = level
        this.setup()
    }
    setup() {
        this.status = 'show'
        this.life = this.level
        this.speed = random(1, 3)
        this.x = random(0, 350)
        this.y = -random(0, 300)
        this.cooldown = config.enemy_bullet_cooldown
    }
    move(y) {
        this.y = y
        if (y > 700) {
            this.setup()
        }

    }
    update() {
        let y = this.y
        this.y += this.speed
        // this.speed = config.enemy_speed
        let p  = y + this.h
        if (y > 700) {
            this.setup()
        } else if (p > 0 && p < 700 && this.life > 0) {
            this.fire()
        }
    }
    fire() {
        this.cooldown--
        if (this.cooldown === 0) {
            this.cooldown = config.enemy_bullet_cooldown
            var x = this.x + this.w / 2
            var y = this.y + this.h
            var bullet = Bullet.new(this.game, 'enemy')
            bullet.x = x
            bullet.y = y
            this.scene.addElement(bullet)
        }
    }
    kill() {
        this.life--
        if (this.life === 0) {
            let x = this.x + this.w /2
            let y = this.y + this.h /2
            let particleSys = ParticleSystem.new(this.game, x, y)
            this.scene.addElement(particleSys)
            this.status = 'hide'
        }
    }
    // moveDown() {
    //     this.y += this.speed
    // }
}
