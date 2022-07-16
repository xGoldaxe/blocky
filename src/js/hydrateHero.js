import {UNIT} from './initState'

export default function hydrateHero(ctx,x,y) {
    ctx.save()
    ctx.translate(x * UNIT,y * UNIT)
    ctx.fillRect(0,0, UNIT* 0.8, UNIT * 0.8);
    ctx.restore();
}