import drawSpike from "../drawBlock/drawSpike"

export default function blockSelector(ctx, tool) {
    if(tool.type === 'paint') {
        ctx.clearRect(0, 60, 35 ,35)
        ctx.strokeStyle = '#393535'
        if(tool.block.form === 'square') {
            ctx.fillStyle = tool.block.color
            ctx.fillRect(0, 60, 35 ,35)
        }
        if(tool.block.form === 'spike') {
            ctx.save()
            ctx.translate(0, 60)
            drawSpike(ctx, tool.block.name,35)
            ctx.restore()
        }
        if(tool.block.form === 'hero') {
            ctx.fillStyle = tool.block.color
            ctx.fillRect(0.15*35, 60 + 0.15*35, 0.7 * 35, 0.7 * 35)
        }
        ctx.strokeRect(0, 60, 35 ,35)
    }
}