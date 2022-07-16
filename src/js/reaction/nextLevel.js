import { hero , nextMap } from '../initState'

export default function nextLevel() {
    console.log('nextLevel')
    hero.modify()
    const map = nextMap()
    return {
        x: map.startPosition.x,
        y: map.startPosition.y,
        move: null,
        map: map
    }
}