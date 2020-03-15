
class Game {
    constructor(fps, images, gameCallback) {
        window.fps = fps
        var canvas = document.querySelector('#id-canvas')
        var context = canvas.getContext('2d')
        this.canvas = canvas
        this.context = context
        this.actives = {}
        this.keyDown = {}
        this.images = images
        this.gameCallback = gameCallback
        this.scene = null
        this.loadsLength = 0
        var self = this
        window.addEventListener('keydown', function (event) {
            var key = event.key
            self.keyDown[key] = true
        })

        window.addEventListener('keyup', function (event) {
            var key = event.key
            self.keyDown[key] = false
        })
        this.loadImages()
    }
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(gameImage) {
        this.context.drawImage(gameImage.texture, gameImage.x, gameImage.y)
    }
    clearRect() {
        var canvas = this.canvas
        this.context.clearRect(0, 0, canvas.width, canvas.height)
    }
    registerAction(key, handleAction) {
        this.actives[key] = handleAction
    }
    update() {
        this.scene.update()
    }
    draw() {
        this.scene.draw()
    }
    runloop() {
        var o = this
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
            o. runloop()
        }, 1000 / window.fps)
    }
    run() {
        var o = this
        o.gameCallback()
        setTimeout(function () {
            o.runloop()
        }, 1000 / window.fps)
    }
    textureByName(name) {
        return this.images[name]
    }
    replaceScene(scene) {
        this.scene = scene
    }
    loadImages() {
        var o = this
        var names = Object.keys(o.images)
        for (let i = 0; i < names.length; i++) {
            const name = names[i]
            const imagePath = o.images[name]
            let image = new Image()
            image.onload = function () {
                o.loadsLength += 1
                o.images[name] = image
                if (o.loadsLength === names.length) {
                    o.run()
                }
            }
            image.src = imagePath
        }
    }
}