class Bird extends Animation {
    constructor(game) {
        super(game)
        this.x = 150
        this.y = 150
        this.keyType = 'keyup'
        this.animationName = 'bird1'
        this.gravity = 10
        this.counter = 2
        this.rotate = 0
        this.flipX = false
        this.setup()
    }
    setup() {
        super.setup(3)
    }
    update() {
        super.update();
        this.counter--
        if(this.counter === 0) {
            this.counter = 2
            this.gravity += this.gravity* 0.1
            this.y += this.gravity
        }
        let h = 535
        if (this.y > h) {
            this.y = h
        }
        if (this.rotate < 45) {
            this.rotate += 5
        }
    }
    moveUp(keyType) {
        this.gravity = 10
        this.rotate = -45
        this.y -= 15
    }
    moveLeft(keyType) {
        this.keyType = keyType
        if (this.keyType === 'keyup') {
        } else {
            this.x -= this.speed
        }
        this.flipX = true
    }
    moveRight(keyType) {
        this.keyType = keyType
        if (this.keyType === 'keyup') {
        } else {
            this.x += this.speed
        }
        this.flipX = false
    }
    changAnimationStatus(status) {
        this.animationStatus = status
    }

}
