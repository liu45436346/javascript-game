class SceneLevelEditor extends BaseScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        this.strokeRect = []
        this.active = []
        this.XYArray = []
        this.creatXYObj()
        // this.addElement(this.strokeRect)
        this.registerAction()
    }
    creatXYObj() {
        this.block = Block.new([0, 0], this.game)
        let w = this.block.w
        let h = this.block.h
        let row = 8
        let column = 10
        for (let i = 0; i < row; i++) {
            let y = h * i + (i + 1) * 5
            for (let j = 0; j < column; j++) {
                let x = w * j + (j + 1) * 5
                this.XYArray.push([x, y])
                let rect = StrokeRect.new(this.game, x, y, 'black')
                this.strokeRect.push(rect)
            }
        }
    }
    update() {
    }
    draw() {
        for (let e of this.strokeRect) {
            e.draw()
        }
    }
    handleClick(x, y){
        for (let i = 0; i < this.XYArray.length; i++) {
            const arr = this.XYArray[i];
            let blockX = arr[0]
            let blockY = arr[1]
            let xCod = x >= blockX && x <= blockX + this.block.w
            let yCod = y >= blockY && y <= blockY + this.block.h
            if (xCod && yCod) {
                let color = 'red'
                if (this.active[i]) {
                    this.active[i] = false
                    color = 'black'
                } else {
                    this.active[i] = arr
                }
                let rect = StrokeRect.new(this.game, blockX, blockY, color)
                this.strokeRect[i] = rect
                break
            }

        }
    }
    registerAction() {
        let game = this.game
        game.registerAction('k', () => {
            levels[0] = this.active
            console.log('levels', levels)
            game.replaceScene(Scene.new(game))
        })
        game.canvas.addEventListener('click',  (event) => {
            var x = event.offsetX
            var y = event.offsetY
            this.handleClick(x, y)
        })
    }
}
