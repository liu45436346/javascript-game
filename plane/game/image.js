class BaseImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.w = this.texture.width
        this.h = this.texture.height
        this.x = 0
        this.y = 0
    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    update() {

    }
}