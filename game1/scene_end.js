var SceneEnd = function (game) {

    var scence = {
    }

    scence.update = function () {
    }

    scence.draw = function () {
        // draw 背景
        // game.context.fillStyle = "#554"
        // game.context.fillRect(0, 0, 400, 300)
        // game over
        game.context.fillStyle = "black"
        game.context.fillText('游戏结束', 150, 150);
    }

    return scence
}