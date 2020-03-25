class Land {
    constructor(game) {
        this.game = game
        this.name = 'land_0'
        this.fps = 3
        this.counter = 0
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
        for (let i = 0; i < 2; i++) {
            let land = new this(game)
            land.x = i * 336
            land.index = i
            land.y = game.canvas.height - 50
            result.push(land)
        }
        return result
    }
    update() {
        this.fps--
        if (this.fps === 0) {
            this.counter++
            if (this.counter === 3) {
                this.counter = 0
                this.x = this.index * 336
            }
            this.fps = 3
            this.x -= 10
        }
    }
}
