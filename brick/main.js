var changeBallSpeed = function () {
    var el = document.querySelector('#id-input-speed')
    el.addEventListener('input', function (event) {
        var target = event.target
        var value = Number(target.value)
        if (!value) value = 30
        window.fps = value
    })

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

var __main = function () {

    var baePath = 'img/'
    var images = {
        paddle: baePath + 'paddle.png',
        ball: baePath + 'ball.png',
        block: baePath + 'block.png',
    }
    var gameCallback = function() {
        var scene = SceneTitle.new(game)
        game.replaceScene(scene)
    }
    var game = Game.instance(30, images, gameCallback)
    changeBallSpeed()
    enableDebugMode(true)

}
__main()