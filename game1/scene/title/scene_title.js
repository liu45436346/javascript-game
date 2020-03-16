class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function () {
            game.replaceScene(Scene.new(game))
        })
    }
    draw() {
        this.game.context.fillStyle = "black"
        this.game.context.fillText('按 k 游戏开始', 150, 150);
    }
}
