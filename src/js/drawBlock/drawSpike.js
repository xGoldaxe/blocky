export default function drawSpike(ctx, name, unit) {
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle='black'
    ctx.strokeStyle='black'
    if(name.split('_')[1] === 'bottom') {
        ctx.moveTo(0,0)
        ctx.lineTo(unit * 0.5, unit)
        ctx.lineTo(unit, 0)
        ctx.fill()
    }
    else if(name.split('_')[1] === 'top') {
        ctx.moveTo(0, unit)
        ctx.lineTo(unit * 0.5, 0)
        ctx.lineTo(unit, unit)
        ctx.fill()
    }
    else if(name.split('_')[1] === 'left') {
        ctx.moveTo(0, 0)
        ctx.lineTo(unit, unit*0.5)
        ctx.lineTo(0, unit)
        ctx.fill()
    }
    else if(name.split('_')[1] === 'right') {
        ctx.moveTo(unit, 0)
        ctx.lineTo(0, unit * 0.5)
        ctx.lineTo(unit, unit)
        ctx.fill()
    }
    ctx.closePath()
    ctx.restore();
}
