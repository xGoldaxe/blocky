import move from './action/move'
import { UNIT, hero } from './initState'
import gameOver from './reaction/gameOver';
import nextLevel from './reaction/nextLevel';
import drawGrid from './editor/drawGrid';
import hydrateMap from './hydrate'
import {drawToolbar} from './editor/toolbar'
import hydrateHero from './hydrateHero';


export default function create(map, ctx) {
    ctx.save();
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = map.background
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle='grey';
    ctx.restore()
    hydrateHero(ctx,map.startPosition.x,map.startPosition.y)
    hydrateMap(map, ctx)
    drawGrid(ctx)
    drawToolbar(ctx)
    ctx.restore()
    window.requestAnimationFrame(() => create(map, ctx))
}