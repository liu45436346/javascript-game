
class SceneTitle extends SceneText {
    constructor(game) {
        super(game, '按 k 开始')
        this.setup()
    }
    setup() {
        this.animation = Animation.new(this.game)
        this.addElement(this.animation)
        this.registerAction()
    }
    registerAction() {
        let game = this.game
        let animation = this.animation
        game.registerAction('k', function () {
            game.replaceScene(Scene.new(game))
        })
        game.registerAction('a', function (keyType) {
            animation.moveLeft(keyType)
        })
        game.registerAction('d', function (keyType) {
            // console.log('keyType', keyType)
            animation.moveRight(keyType)
        })
    }
}
