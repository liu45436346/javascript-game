class Animation {
    constructor(game) {
        this.game = game
        this.x = 150
        this.y = 150
        this.speed = 5
        this.status = ''
        this.animations = {
            idle: [],
            run: [],
        }
        this.fps = 5
        this.setup()
        this.keyType = 'keyup'
        this.animationStatus = 'idle'
    }
    setup() {
        let game = this.game
        let baseName = 'run'
        for (let i = 0; i < 6; i++) {
            const name = baseName + i
            let texture = game.textureByName(name)
            this.animations[baseName].push(texture)
        }
        for (let i = 0; i < 4; i++) {
            const name = 'idle' + i
            let texture = game.textureByName(name)
            this.animations['idle'].push(texture)
        }
        this.texture = this.animations['idle'][0]
        this.currentTextureIndex = 0
    }
    static new(game) {
        return new this(game)
    }
    update() {
        this.fps--
        if (this.fps === 0) {
            let s = this.animationStatus
            this.fps = 5
            this.currentTextureIndex = (this.currentTextureIndex + 1) % this.animations[s].length
            this.texture = this.animations[s][this.currentTextureIndex]
            this.w = this.texture.width
            this.h = this.texture.height
        }
        // console.log('this.keyType', this.keyType)
    }
    moveLeft(keyType) {
        this.keyType = keyType
        if (this.keyType === 'keyup') {
            this.animationStatus = 'idle'
        } else {
            this.x -= this.speed
            this.animationStatus = 'run'
        }
        this.status = 'turn'
    }
    moveRight(keyType) {
        this.keyType = keyType
        if (this.keyType === 'keyup') {
            this.animationStatus = 'idle'
        } else {
            this.x += this.speed
            this.animationStatus = 'run'
        }
        this.status = ''
    }
}
