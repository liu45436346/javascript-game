class Block extends BaseImage {
    constructor(arr, game) {
        super(game, 'block')
        var x = arr[0]
        var y = arr[1]
        var fired = arr[2] || 1
        this.x = x
        this.y = y
        this.status = 'show'
        this.fired = fired
    }
    kill() {
        var o = this
        o.fired -= 1
        if (o.fired === 0) {
            o.status = 'clear'
        }
    }
}
