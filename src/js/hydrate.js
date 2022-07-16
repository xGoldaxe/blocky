import drawSpike from './drawBlock/drawSpike';
import { mapEdit } from './editor/toolbar';
import hydrateHero from './hydrateHero';
import { UNIT } from './initState' 

export default function hydrateMap(map, ctx) {
    ctx.save()
    map.blocks.forEach(block => {
        if(block.type.form === 'square') {
            ctx.save();
            ctx.fillStyle=block.type.color;
            ctx.translate(block.x * UNIT,block.y * UNIT)
            ctx.fillRect(0,0, UNIT*block.size, UNIT*block.size);
            ctx.restore();
        }
        if(block.type === 'portal') {
            ctx.save();            
            ctx.fillStyle='blue';
            ctx.translate(block.x * UNIT,block.y * UNIT)
            ctx.fillRect(0,0, UNIT*block.size, UNIT*block.size);
            ctx.restore();
        }
        if(block.type.form === 'spike') {
            ctx.save();            
            ctx.translate(block.x * UNIT,block.y * UNIT)
            drawSpike(ctx, block.type.name, UNIT)
            ctx.restore();
        }
    })
    ctx.restore()
}

