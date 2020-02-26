var Game = function (fps, images, gameCallback) {
    // images 是图像名字和路径对象
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    var o = {
        canvas: canvas,
        context: context,
        actives: {},
        keyDown: {},
        images: {},
        scene: null
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


    // update
    o.update = function () {
        o.scene.update()
    }

    // draw
    o.draw = function () {
        o.scene.draw()
    }

    window.addEventListener('keydown', function (event) {
        var key = event.key
        o.keyDown[key] = true
    })

    window.addEventListener('keyup', function (event) {
        var key = event.key
        o.keyDown[key] = false
    })

    window.fps = fps
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

    o.run = function () {
        gameCallback()
        setTimeout(function () {
            runloop()
        }, 1000 / window.fps)
    }
    o.imageFromName = function (name) {
        return o.images[name]
    }

    o.replaceScene = function (scene) {
        o.scene = scene
    }

    var loadsLength = 0
    var loadImages = function() {
        var names = Object.keys(images)
        for (let i = 0; i < names.length; i++) {
            const name = names[i]
            const imagePath = images[name]
            let image = new Image()
            image.onload = function () {
                loadsLength += 1
                o.images[name] = image
                if (loadsLength === names.length) {
                    o.run()
                }
            }
            image.src = imagePath
        }
    }
    loadImages()
    return o
}