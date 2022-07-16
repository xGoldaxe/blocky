import level1 from './levels/level1.json'
import level2 from './levels/level2.json'
import level3 from './levels/level3.json'
import level4 from './levels/level4.json'

export const MAPS = [level1, level2, level3, level4]
let actualMap = 0
export let map = MAPS[actualMap]

export function nextMap() {
    actualMap++
    map = MAPS[actualMap]
    return map
}

export let hero = {
    x: level1.startPosition.x,
    y: level1.startPosition.y,
    speed: 0.1,
    size: 0.8,
    move: null,
    modify() {
        hero.x = initHero.x
        hero.y = initHero.y
    }
}

export const initHero = {
    x: 2,
    y: 2,
    speed: 0.03,
    size: 0.8,
    move: null,
    modify() {
        hero = initHero
    }
}

export const UNIT = canvas.width / 20