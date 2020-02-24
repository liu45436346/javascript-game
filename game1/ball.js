var Ball = function(game) {
    var image = game.imageFromName('ball')
    var o = {
        image: image,
        w: image.width,
        g: image.height,
        x: 100,
        y: 200,
        speedX: 5,
        speedY: 5,
        fired: false,
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
    return o
}