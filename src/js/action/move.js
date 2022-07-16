import {isCollision} from '../reaction/collision'

export default function move(x,y,direction,hero, map) {
    let newX,newY
    let newDirection = direction
    switch(direction) {
        case 'left':
            newX =  x-hero.speed;
            newY = y;
            break;
        case 'right':
            newX =  x+hero.speed;
            newY = y;
            break;
        case 'up':
            newX =  x;
            newY = y-hero.speed;
            break;
        case 'down':
            newX =  x;
            newY = y+hero.speed;
            break;
        default:
            newX = x
            newY = y
    }
    
    map.forEach(block => {
        if(block.type.name === "portal" && isCollision(block, {x:newX,y:newY,size:hero.size})) {
            newDirection = 'nextLevel'
        }
        else if(block.type.form === "square" && isCollision(block, {x:newX,y:newY,size:hero.size})) {
            newDirection = null;
            newX = x
            newY = y
        }
        else if(block.type.form === "spike" && isCollision(block, {x:newX,y:newY,size:hero.size})) {
            newDirection = 'gameOver'
        }
    })
    
    return {
        x: newX,
        y: newY,
        direction: newDirection
    }
}
