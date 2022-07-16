import { UNIT } from '../initState'

export default function drawGrid(ctx) {
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = '#585858'
    //horizontal
    for(let i = 1; i < 20; i++) {
        ctx.save()
        ctx.moveTo(UNIT * i, 0)
        ctx.lineTo(UNIT * i, canvas.height)
    }     
    //vertical
    for(let i = 1; i < 12; i++) {
        ctx.save()
        ctx.moveTo(0, UNIT * i)
        ctx.lineTo(canvas.width, UNIT * i)
    } 
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
}