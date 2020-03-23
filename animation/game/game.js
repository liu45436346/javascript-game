
class Game {
    constructor(fps, images, gameCallback) {
        window.fps = fps
        var canvas = document.querySelector('#id-canvas')
        var context = canvas.getContext('2d')
        this.canvas = canvas
        this.canvasWidth = canvas.width
        this.canvasHight = canvas.height
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
            self.keyDown[key] = 'keydown'
        })

        window.addEventListener('keyup', function (event) {
            var key = event.key
            self.keyDown[key] = 'keyup'
        })
        this.loadImages()
    }
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(gameImage) {
        let width = this.canvasWidth
        let status = gameImage.status
        if (status === 'turn') {
            this.context.save()
            this.context.translate(width, 0)
            this.context.scale(-1, 1)
            this.context.drawImage(gameImage.texture, width - gameImage.w - gameImage.x, gameImage.y)
            this.context.restore()
        } else {
            this.context.drawImage(gameImage.texture, gameImage.x, gameImage.y)
        }
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
            let keyType = o.keyDown[key]
            if (keyType === 'keydown') {
                o.actives[key](keyType)
            } else if (keyType === 'keyup') {
                o.actives[key](keyType)
                o.keyDown[key] = null
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
    gameOver() {
        var scene = SceneEnd.new(this)
        console.log("scene", scene)
        this.replaceScene(scene)
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
