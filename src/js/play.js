import move from './action/move'
import { UNIT, hero } from './initState'
import gameOver from './reaction/gameOver';
import nextLevel from './reaction/nextLevel';
import drawGrid from './editor/drawGrid';
import hydrateMap from './hydrate'
import hydrateHero from './hydrateHero';



export default function play(map, ctx) {
    ctx.save();
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = map.background
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle='grey';
    
    let action = move(hero.x ,hero.y ,hero.move,hero, map.blocks)
    if(action.direction==='gameOver') {
        action = gameOver(map)
    }
    if(action.direction==='nextLevel') {
        action = nextLevel()
        map = action.map
        console.log(map)
    }

    hero.move = action.direction
    hero.x = action.x
    hero.y = action.y

    hydrateHero(ctx,action.x,action.y)
    hydrateMap(map, ctx);
    //to delete later
    ctx.restore()
    window.requestAnimationFrame(() => play(map, ctx))
}



