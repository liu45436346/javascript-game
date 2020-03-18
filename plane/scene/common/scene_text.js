
class SceneText extends BaseScene {
    constructor(game, text) {
        super(game)
        this.text = text
    }
    draw() {
        this.game.context.fillStyle = "black"
        this.game.context.fillText(this.text, 150, 150);
    }
}
