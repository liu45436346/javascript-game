
class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        this.birdBg = BaseImage.new(this.game, 'bg_day')
        this.addElement(this.birdBg)
        this.bird = Bird.new(this.game)
        this.landList = Land.new(this.game)
        this.pipeList = Pipe.new(this.game)
        this.addElement(this.landList)
        this.addElement(this.pipeList)
        this.addElement(this.bird)
        this.registerAction()
        this.interval = 250
        this.fps = 3
        this.counter = 0
    }
    flipDraw(gameImage) {
        let ctx = this.game.context
        let flipX = gameImage.flipX
        let flipY = gameImage.flipY
        let rotate = gameImage.rotate
        let w = gameImage.w / 2
        let h = gameImage.h / 2
        ctx.save()
        ctx.translate(gameImage.x + w, gameImage.y + h)
        if (flipX) {
            ctx.scale(-1, 1)
        } else if (flipY) {
            ctx.scale(1, -1)
        }
        if (rotate) ctx.rotate(rotate * Math.PI / 180)
        ctx.translate(-w, -h)
        ctx.drawImage(gameImage.texture, 0, 0)
        ctx.restore()
    }
    draw() {
        var elements = this.elements
        for (let i = 0; i < elements.length; i++) {
            const e = elements[i];
            this.flipDraw(e)
        }
    }
    debug() {
        this.interval = 100
    }
    update() {
        this.fps--
        if (this.fps === 0) {
            this.fps = 3
            this.x -= 5
            if (this.x < 0) {
                this.x = 461 + this.distance
            }
        }
        this.pipeList.forEach((pipe, index) => {
            if (!pipe.flipY && pipe.x > this.game.canvas.width) {
                pipe.y = -random(0, 310)
                this.pipeList[index + 1].y = pipe.h + pipe.y + config.pipe_interval.value
            }
        })
        super.update()
    }
    registerAction() {
        let game = this.game
        let b = this.bird
        game.registerAction('k', function () {
            game.replaceScene(Scene.new(game))
        })
        game.registerAction('w', function (keyType) {
            b.moveUp(keyType)
        })
        game.registerAction('a', function (keyType) {
            b.moveLeft(keyType)
        })
        game.registerAction('d', function (keyType) {
            // console.log('keyType', keyType)
            b.moveRight(keyType)
        })
    }
}
