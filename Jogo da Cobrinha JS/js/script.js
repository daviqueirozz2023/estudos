const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const h1 = document.querySelector("h1")
//esplicando a cor do quadrado e as coordenadas
//ctx.fillStyle = "blue"
//ctx.fillRect(300, 300, 50, 50)

const size = 30

const snake = [
    {x: 270, y: 240}
]

const randomNumber = (min, max) => {
    // Calculo para retonar numero inteiro acima de 5
    //return Math.round(Math.random() * (10 - 5) + 5)
    return Math.round(Math.random() * (max - min) + min)
}

h1.innerText = randomNumber(5, 10)

const food = {
    x: randomNumber(0, 570),
    y: randomNumber(0, 570),
    color: "yellow"
}

let direction, loopid

const drawFood = () => {
    const {x, y, color} = food

    ctx.shadowColor = color
    ctx.shadowBlur = 10
    ctx.fillStyle = color
    ctx.fillRect(food.x, food.y, size, size)
    ctx.shadowBlur = 0
}

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

const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#333"

    for (let i = 30; i < canvas.width; i += 30){

        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()

    }
}
drawGrid()

const gameLoop = () => {
    clearInterval(loopid)
    ctx.clearRect(0, 0, 600, 600)
    drawGrid()
    drawFood()
    moveSnake()
    drawSnake()

    loopid = setTimeout(() => {
        gameLoop()
    },300)
}

gameLoop()

document.addEventListener("keydown", ({key}) => {

    if (key == "ArrowRight" && direction != "left"){
        direction = "right"
    }

    if(key == "ArrowLeft" && direction != "right"){
        direction = "left"
    }

    if(key == "ArrowDown" && direction != "up"){
        direction = "down"
    }

    if(key == "ArrowUp" && direction != "down"){
        direction = "up"
    }
   
})
