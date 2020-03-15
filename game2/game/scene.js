class BaseScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    update() {
        var elements = this.elements
        for (let i = 0; i < elements.length; i++) {
            const e = elements[i];
            e.update()
        }
    }
    draw() {
        var elements = this.elements
        var game = this.game
        for (let i = 0; i < elements.length; i++) {
            const e = elements[i];
            game.drawImage(e)
        }
    }
    addElement(e) {
        e.scene = this
        this.elements.push(e)
    }
}

