export function isCollision(element, hero) {
    let collision = false

    const heroPoints = [{
        x: hero.x,
        y: hero.y
    },{
        x: hero.x+hero.size,
        y: hero.y
    },{
        x: hero.x,
        y: hero.y+hero.size
    },{
        x: hero.x+hero.size,
        y: hero.y+hero.size
    },]

    heroPoints.forEach((point)=> {
        if(point.x >= element.x && point.x <= element.x + element.size &&
        point.y >= element.y && point.y <= element.y + element.size) {
            collision = true
            console.log('col')
        }    
    })

    return collision
}