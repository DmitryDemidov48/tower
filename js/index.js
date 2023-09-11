    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')

    canvas.width = 1268
    canvas.height = 769


    c.fillStyle = 'red'
    c.fillRect(0, 0, canvas.width,canvas.height)

    const image =new Image()
    image.onload = () => {
        animate()

    }
    image.src = 'img/gameMap.png'

    class Enemy  {
    constructor({position = {x: 0, y: 0} }) {
        this.position = position
        this.width = 100
        this.height = 100
        this.waypointIndex = 0
    }
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x,this.position.y, this.width, this.height)
    }
    update() {
        this.draw()

        const waypoint = waypoints[this.waypointIndex]
        const yDistance = waypoint.y - this.position.y
        const xDistance = waypoint.x - this.position.x
        const angle = Math.atan2(yDistance,xDistance )
        this.position.x += Math.cos(angle)
        this.position.y += Math.sin(angle)
        console.log(Math.round(this.position.x))


        if (Math.round(this.position.x) === waypoint.x && this.position.y === waypoint.y) {
            this.waypointIndex++
        }
    }
    }
const enemy = new Enemy({position : {x: 200, y: 400} })
    const enemy2 = new Enemy({position : {x: 0, y: 400} })


    function animate() {
        requestAnimationFrame(animate)
        c.drawImage(image, 0, 0)

        enemy.update()
        enemy2.update()

    }

