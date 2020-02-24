var Ball = function(game) {
    var image = game.imageFromName('ball')
    var o = {
        image: image,
        w: image.width,
        h: image.height,
        x: 100,
        y: 200,
        speedX: 5,
        speedY: 5,
        fired: false,
        enableDrag: false,
    }
    o.fire = function () {
        o.fired = true
    }
    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.rebound = function () {
        // o.speedX = -o.speedX
        o.speedY = -o.speedY
    }
    o.hasPoint = function(x, y) {
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
    o.changByPoint = function(x, y) {
        o.x = x
        o.y = y
    }
    return o
}