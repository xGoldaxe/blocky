import { hero , initHero} from '../initState'

export default function gameOver(map) {
    console.log('gameOver')
    hero.modify()
    return {
        x: map.startPosition.x,
        y: map.startPosition.y,
        move: null
    }
}