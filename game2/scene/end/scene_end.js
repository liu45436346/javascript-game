
class SceneEnd extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function () {
            var scene = SceneTitle.new(game)
            game.replaceScene(scene)
        })
    }
    draw() {
        this.game.context.fillStyle = "black"
        this.game.context.fillText('游戏结束, 按 r 重玩 ', 150, 150);
    }
}