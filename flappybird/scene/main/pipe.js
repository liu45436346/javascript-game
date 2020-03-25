class Pipe {
    constructor(game) {
        this.game = game
        this.name = 'pipe0_down'
        this.fps = 3
        this.counter = 0
        this.distance = 200
        this.setup(game)
    }
    setup(game) {
        this.texture = game.textureByName(this.name)
        this.w = this.texture.width
        this.h = this.texture.height
        this.x = 0
        this.y = 0
    }
    static new(game) {
        let result = []
        for (let i = 0; i < 3; i++) {
            let pipe1 = new this(game)
            let pipe2 = new this(game)
            pipe1.x = 461 + i * pipe1.distance
            pipe1.y = -random(0, 320)
            pipe2.x = pipe1.x
            pipe2.y = pipe1.h + pipe1.y + 250
            pipe1.index = i
            pipe2.index = i
            pipe2.flipY = true
            result.push(pipe1)
            result.push(pipe2)
        }
        return result
    }
    debug() {
        this.distance = config.pipe_distance.value
    }
    update() {
        this.fps--
        if (this.fps === 0) {
            this.fps = 3
            this.x -= 5
            if (this.x < 0) {
                this.x = 461 + this.distance
            }
        }
    }
}
