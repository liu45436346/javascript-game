var changeBallSpeed = function () {
    var el = document.querySelector('#id-input-speed')
    el.addEventListener('input', function (event) {
        var target = event.target
        var value = Number(target.value)
        if (!value) value = 30
        window.fps = value
    })

}

var loadLevel = function(n, game) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var arr = level[i];
        var block = Block(arr, game)
        blocks.push(block)
    }
    return blocks
}



var enableDebugMode = function(enable) {
    if (!enable) {
        return
    }
    window.addEventListener('keydown', function (event) {
        var key = event.key
        if (key === 'p') {
            window.paused = !window.paused
        }
    })

}

var blocks = []
var __main = function () {

    var images = {
        paddle: 'paddle.png',
        ball: 'ball.png',
        block: 'block.png',
    }
    var gameCallback = function() {
        var scene = Scene(game)
        game.replaceScene(scene)
    }
    var game = Game(30, images, gameCallback)
    changeBallSpeed()
    enableDebugMode(true)

}
__main()