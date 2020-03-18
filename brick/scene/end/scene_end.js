
class SceneEnd extends BaseScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        let game = this.game
        this.title = CommonTitle.new(game, {
            fillStyle: 'black',
            text: '按 r 重新开始游戏',
            x: 150,
            y: 150,
        })
        this.addElement(this.title)
        this.registerAction()
    }
    registerAction() {
        let game = this.game
        game.registerAction('r', function () {
            var scene = SceneTitle.new(game)
            game.replaceScene(scene)
        })
    }
}
