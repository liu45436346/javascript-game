
class SceneTitle extends SceneText {
    constructor(game) {
        super(game, '按 k 开始')
        this.setup()
    }
    setup() {
        this.registerAction()
    }
    registerAction() {
        let game = this.game
        game.registerAction('k', function () {
            game.replaceScene(Scene.new(game))
        })
    }
}
