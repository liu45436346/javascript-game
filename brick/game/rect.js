class BaseRect {
    constructor(game) {
        this.game = game
        this.fillStyle = '#fff'
        this.w = 0
        this.h = 0
        this.x = 0
        this.y = 0
    }
    draw() {
        this.game.drawStrokeRect(this)
    }
}

class StrokeRect extends BaseRect {
    constructor(game, x, y, color) {
        super(game)
        this.strokeStyle = color
        this.w = 40
        this.h = 19
        this.x = x
        this.y = y
    }
    static new(game, x, y, color) {
        var i = new this(game, x, y, color)
        return i
    }
    draw() {
        this.game.drawStrokeRect(this)
    }
}

class Background extends BaseRect{
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        this.fillStyle = '#554'
        this.w = 455
        this.h = 300
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {
        this.game.drawRect(this)
    }
}
