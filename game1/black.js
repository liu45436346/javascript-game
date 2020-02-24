var Black = function(arr, game) {
    var image = game.imageFromName('black')
    var x = arr[0]
    var y = arr[1]
    var fired = arr[2] || 1
    var o = {
        image: image,
        w: image.width,
        h: image.height,
        x: x,
        y: y,
        alive: true,
        fired: fired,
    }
    o.kill = function () {
        o.fired -= 1
        if (o.fired === 0) {
            o.alive = false
        }
    }
    return o
}