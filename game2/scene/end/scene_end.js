
class SceneEnd extends SceneText {
    constructor(game) {
        super(game, '游戏结束, 按 r 重玩')
        this.setup()
    }
    setup() {
        let game = this.game
        game.registerAction('r', function () {
            var scene = SceneTitle.new(game)
            game.replaceScene(scene)
        })
    }
}
