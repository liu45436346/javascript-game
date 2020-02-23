var Paddle = function() {
    var image = imageFromPath('paddle.png')
    var o = {
        image: image,
        x: 100,
        y: 200,
        speed: 10,
    }
    o.move = function(x) {
        var w = o.image.width
        if (x < 0) {
            x = 0
        } else if (x + w > 400) {
            x = 400 - w
        }
        o.x = x
    }
    o.moveLeft = function () {
        o.move(o.x - o.speed)

    }
    o.moveRight= function () {
        o.move(o.x + o.speed)
    }
    o.collide = function(ball) {
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                return true
            }
        }
        return false
    }
    return o
}