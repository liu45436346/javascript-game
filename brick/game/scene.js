class BaseScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    handleStatus(element, index) {
        let str = element.status
        if (str && this[str]) {
            this[str](index)
        }
    }
    clear(index) {
        this.elements.splice(index,1)
    }
    update() {
        if (window.paused) {
            return
        }
        var elements = this.elements
        for (let i = 0; i < elements.length; i++) {
            const e = elements[i];
            if (e.update) {
                e.update()
                this.handleStatus(e, i)
            }
        }
    }
    draw() {
        var elements = this.elements
        // var game = this.game
        for (let i = 0; i < elements.length; i++) {
            const e = elements[i];
            if (e.status === 'clear') {
                continue
            }
            e.draw()
            // game.drawImage(e)
        }
    }
    addElementByArray(arr) {
        for(let e of arr) {
            this.addElement(e)
        }
    }
    addElement(e) {
        if (Array.isArray(e)) {
            this.addElementByArray(e)
        } else {
            e.scene = this
            this.elements.push(e)
        }
    }
}

