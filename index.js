const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1268
canvas.height = 769


c.fillStyle = 'red'
c.fillRect(0, 0, canvas.width,canvas.height)

const image =new Image()
image.onload = () => {
    c.drawImage(image, 0, 0)
}
image.src = 'img/gameMap.png'
