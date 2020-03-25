class Animation {
    constructor(game) {
        this.game = game
        this.speed = 5
        this.status = ''
        this.fps = 5
        this.animations = {}
        this.animationName = ''
        this.currentTextureIndex = 0
        // this.setup()
    }
    setup(num) {
        let game = this.game
        let baseName = this.animationName
        for (let i = 0; i < num; i++) {
            const name = baseName + '_' + i
            let texture = game.textureByName(name)
            if(!this.animations[baseName]) this.animations[baseName] = []
            this.animations[baseName].push(texture)
        }
        this.texture = this.animations[baseName][0]
        this.w = this.texture.width
        this.h = this.texture.height
    }
    static new(game) {
        return new this(game)
    }
    update() {
        this.fps--
        if (this.fps === 0) {
            let s = this.animationName
            this.fps = 5
            this.currentTextureIndex = (this.currentTextureIndex + 1) % this.animations[s].length
            this.texture = this.animations[s][this.currentTextureIndex]
        }
    }
}
