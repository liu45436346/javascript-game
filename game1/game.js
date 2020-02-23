var Game = function () {
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    var o = {
        canvas: canvas,
        context: context,
        actives: {},
        keyDown: {},
    }
    o.drawImage = function (gameImage) {
        context.drawImage(gameImage.image, gameImage.x, gameImage.y)
    }
    o.clearRect = function () {
        context.clearRect(0, 0, canvas.width, canvas.height)
    }

    o.registerAction = function (key, handleAction) {
        o.actives[key] = handleAction
    }


    window.addEventListener('keydown', function (event) {
        var key = event.key
        o.keyDown[key] = true
    })

    window.addEventListener('keyup', function (event) {
        var key = event.key
        o.keyDown[key] = false
    })

    var runloop = function() {
        var keys = Object.keys(o.actives)
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (o.keyDown[key]) {
                o.actives[key]()
            }
        }
        o.clearRect()
        o.update()
        o.draw()
        setTimeout(function () {
            runloop()
        }, 1000 / window.fps)
    }

    setTimeout(function () {
        runloop()
    }, 1000 / window.fps)


    return o
}