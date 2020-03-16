class Bullet extends BaseImage {
    constructor(game, type) {
        super(game, type + '_bullet')
        this.x = 0
        this.y = 0
        this.status = 'show'
        this.type = type
        // let obj = {
        //     'player': 5,
        //     'enemy': -5,
        // }
        // this.speed = obj[type]

        let str = type + '_bullet_speed'
        console.log("str", str)
        this.speed = config[str]
        console.log("this.speed", this.speed)
    }
    update() {
        this.y -= this.speed
        if (this.y < 0 || this.y > 700) {
            this.kill()
        }
        this.collide()
    }
    collide() {
        let type = this.type
        if (type === 'enemy') {
            this.playerCollide()
        } else if (type === 'player') {
            this.enemyCollide()
        }
    }
    enemyCollide() {
        let es = this.scene.enemies
        for (let e of es) {
            let cod = e.life > 0 && collide(e, this)
            if (cod) {
                this.kill()
                e.kill()
            }
        }
    }
    playerCollide() {
        let pl = this.scene.player
        let cod = pl.life > 0 && collide(pl, this)
        if (cod) {
            pl.kill()
        }
    }
    kill() {
        this.status = 'clear'
    }
}
