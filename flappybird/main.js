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
        bg_day: baePath + 'bird/bg_day.png',
        bird1_0: baePath + 'bird/bird1_0.png',
        bird1_1: baePath + 'bird/bird1_1.png',
        bird1_2: baePath + 'bird/bird1_2.png',
        land_0: baePath + 'bird/land_0.png',
    }
    var gameCallback = function() {
        // var scene = SceneTitle.new(game)
        var scene = Scene.new(game)
        game.replaceScene(scene)
    }
    var game = Game.instance(30, images, gameCallback)
    changeBallSpeed()
    enableDebugMode(true)

}
__main()
