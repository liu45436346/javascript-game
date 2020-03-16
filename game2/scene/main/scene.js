
class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.score = 0
        this.sky = Sky.new(game)
        this.player = Player.new(game)
        this.enemies = []
        this.enemyNumber = config.enemy_number
        this.setup()
    }
    setup() {
        this.addElement(this.sky)
        this.addElement(this.player)
        this.addEnemies()
        this.registerAction()
    }
    addEnemies() {
        var enemies = []
        for (let i = 0; i < this.enemyNumber; i++) {
            var e = Enemy.new(this.game)
            this.addElement(e)
            enemies.push(e)
        }
        this.enemies= enemies
    }
    registerAction() {
        var g = this.game
        var p = this.player
        g.registerAction('a', function () {
            p.moveLeft()
        })

        g.registerAction('d', function () {
            p.moveRight()
        })

        g.registerAction('w', function () {
            p.moveUp()
        })

        g.registerAction('s', function () {
            p.moveDown()
        })

        g.registerAction('f', function () {
            p.fire()
        })
    }
    update() {
        super.update()
    }
}
