
class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        this.bird = Bird.new(this.game)
        this.birdBg = BaseImage.new(this.game, 'bg_day')
        this.landList = Land.new(this.game)
        this.addElement(this.birdBg)
        this.addElement(this.landList)
        this.addElement(this.bird)
        this.registerAction()
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
