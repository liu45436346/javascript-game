var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
}

var collide = function(a, b) {
    if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
        if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
            return true
        }
    }
    return false
}
