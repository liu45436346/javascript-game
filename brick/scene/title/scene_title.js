class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        let game = this.game
        this.title = CommonTitle.new(game, {
            fillStyle: 'black',
            text: '按 k 游戏开始 按 e 编辑关卡',
            x: 150,
            y: 150,
        })
        this.addElement(this.title)
        this.registerAction()
    }
    registerAction() {
        let game = this.game
        game.registerAction('k', function () {
            game.replaceScene(Scene.new(game))
        })

        game.registerAction('e', function () {
            game.replaceScene(SceneLevelEditor.new(game))
        })
    }
}
