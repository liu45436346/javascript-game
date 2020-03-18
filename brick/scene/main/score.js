class Score extends BaseText {
    constructor(game) {
        super(game)
        this.fillStyle = '#fff'
        this.text = '分数: 0'
        this.x = 10
        this.y = 290
    }
    static new(game, ob) {
        var i = new this(game)
        return i
    }
    update() {
        this.text = '分数: ' + this.scene.score
    }
}

// start end scene
class CommonTitle extends BaseText {
    constructor(game, obj) {
        super(game)
        this.fillStyle = obj.fillStyle
        this.text = obj.text
        this.x = obj.x
        this.y = obj.y
    }
    static new(game, obj) {
        var i = new this(game, obj)
        return i
    }
}
