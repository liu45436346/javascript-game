class Animation {
    constructor(game) {
        this.game = game
        this.x = 150
        this.y = 150
        this.speed = 5
        this.animations = []
        this.fps = 5
        this.setup()
        this.keyType = 'keyup'
    }
    setup() {
        let game = this.game
        let baseName = 'run'
        for (let i = 0; i < 6; i++) {
            const name = baseName + i
            let texture = game.textureByName(name)
            this.animations.push(texture)
        }
        this.texture = this.animations[0]
        this.currentTextureIndex = 0
    }
    static new(game) {
        return new this(game)
    }
    update() {
        this.fps--
        if (this.fps === 0) {
            this.fps = 5
            this.currentTextureIndex = (this.currentTextureIndex + 1) % this.animations.length
            this.texture = this.animations[this.currentTextureIndex]
        }
        console.log('this.keyType', this.keyType)
    }
    moveLeft(keyType) {
        this.keyType = keyType
        this.x -= this.speed
    }
    moveRight(keyType) {
        this.keyType = keyType
        this.x += this.speed
    }
}
