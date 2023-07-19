const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
//esplicando a cor do quadrado e as coordenadas
//ctx.fillStyle = "blue"
//ctx.fillRect(300, 300, 50, 50)

const size = 30

const snake = [
    {x: 200, y: 200},
    {x: 230, y: 200}
]

let direction, loopid = ""

const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    //ctx. fillRect(snake[0].x, snake[0].y, size, size)

    snake.forEach((position, index) => {

        if (index == snake.length -1){
            ctx.fillStyle = "#fff"
        }

        ctx.fillRect(position.x, position.y, size, size)


    })
}

const moveSnake = () => {
    if(!direction) return
    
    const head = snake[snake.length -1]

    

    if(direction == "right") {
        snake.push({ x: head.x + size, y: head.y })

    }

    if(direction == "left"){
        snake.push({x: head.x - size, y: head.y})
    }

    if(direction == "down") {
        snake.push({x: head.x, y: head.y + size})
    }

    if(direction == "up"){
        snake.push({x: head.x, y: head.y - size})
    }

    snake.shift()
}

const gameLoop = () => {
    clearInterval(loopid)
    ctx.clearRect(0, 0, 600, 600)
    moveSnake()
    drawSnake()

    loopid = setTimeout(() => {
        gameLoop()
    },300)
}

gameLoop()
