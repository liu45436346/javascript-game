class Particle extends BaseImage {
    constructor(game, x, y) {
        super(game, 'particle')
        this.x = x
        this.y = y
        this.xSpeed = random(-10, 10)
        this.ySpeed = random(-10, 10)
        this.particleFps = config.particles_fps
        this.status = 'show'
    }
    static new(game, x, y) {
        return new this(game, x, y)
    }
    update() {
        if (this.particleFps) {
            this.x += this.xSpeed
            this.y -= this.ySpeed
            this.particleFps--
        } else {
            this.status = 'clear'
        }
    }
}
