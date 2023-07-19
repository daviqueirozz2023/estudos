const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
//esplicando a cor do quadrado e as coordenadas
//ctx.fillStyle = "blue"
//ctx.fillRect(300, 300, 50, 50)

const size = 30

const snake = [
    {x: 200, y: 200},
    {x: 230, y: 200},
    {x: 260, y: 200}
]

const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    //ctx. fillRect(snake[0].x, snake[0].y, size, size)

    snake
}

drawSnake()