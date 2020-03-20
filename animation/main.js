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
        sky: baePath + 'sky.png',
        player: baePath + 'player.png',
        enemy1: baePath + 'enemy1.png',
        enemy2: baePath + 'enemy2.png',
        enemy3: baePath + 'enemy3.png',
        player_bullet: baePath + 'player_bullet.png',
        enemy_bullet: baePath + 'enemy_bullet.png',
        particle: baePath + 'particle.png',
        run0: baePath + 'run/player-run-00.png',
        run1: baePath + 'run/player-run-01.png',
        run2: baePath + 'run/player-run-02.png',
        run3: baePath + 'run/player-run-03.png',
        run4: baePath + 'run/player-run-04.png',
        run5: baePath + 'run/player-run-05.png',
    }
    var gameCallback = function() {
        var scene = SceneTitle.new(game)
        // var scene = Scene.new(game)
        game.replaceScene(scene)
    }
    var game = Game.instance(30, images, gameCallback)
    changeBallSpeed()
    enableDebugMode(true)

}
__main()
