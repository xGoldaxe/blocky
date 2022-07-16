import { hero } from '../initState'

//listener
export default function createListener() { 
    document.addEventListener('keydown', (event)=>{
        switch(event.key.toLocaleLowerCase()) {
            case 'z':
                hero.move = 'up';
                break;
            case 's':
                hero.move = 'down';
                break;
            case 'q':
                hero.move = 'left';
                break;
            case 'd':
                hero.move = 'right';
                break;
        }
        console.log(hero.move)
    })
}