class ParticleSystem {
    constructor(game, x, y) {
        this.game = game
        this.x = x
        this.y = y
        this.setup()
    }
    static new(game, x, y) {
        let sys = new this(game, x, y)
        return sys.particles
    }
    setup() {
        this.particles = []
        this.particlesNumber = config.particles_number
        for (let i = 0; i < this.particlesNumber; i++) {
            let particle = Particle.new(this.game, this.x, this.y)
            this.particles.push(particle)
        }
    }
}
