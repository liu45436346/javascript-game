var Black = function(arr) {
    var image = imageFromPath('black.png')
    var x = arr[0]
    var y = arr[1]
    var fired = arr[2] || 1
    var o = {
        image: image,
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