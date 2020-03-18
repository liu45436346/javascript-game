class BaseText {
    constructor(game) {
        this.game = game
        this.fillStyle = '#fff'
        this.text = ''
        this.x = 0
        this.y = 0
    }
    draw() {
        this.game.drawText(this)
    }
}
