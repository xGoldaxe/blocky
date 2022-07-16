import play from './play'
import {map, UNIT, hero } from './initState'
import createListener from './action/listener'
import create from './create'
import createEditorListener from './editor/editor';
//edit
import { tool , mapEdit } from './editor/toolbar'

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

drawMenu()


let menuOn = true
canvas.addEventListener('click', (e) => {
    if(menuOn) {
        if(e.offsetX > canvas.width / 2) {
            window.requestAnimationFrame(() => play(map, ctx))
            createListener()
            menuOn = false
        } else {
            window.requestAnimationFrame(() => create(mapEdit, ctx))
            createEditorListener()
            menuOn = false
        }
    }
})



function drawMenu () {
    ctx.save();
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = 'gold'
    ctx.fillRect(0,0, canvas.width/2, canvas.height)
    ctx.fillStyle = 'silver'
    ctx.fillRect(canvas.width/2,0, canvas.width/2, canvas.height)
    //text
    ctx.translate(canvas.width/4,canvas.height/3)
    ctx.font = '48px impact';
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black'
    ctx.fillText('Create', 10, 50);
    //text
    ctx.restore()
    ctx.save()
    ctx.translate(3 * (canvas.width/4),canvas.height/3)
    ctx.font = '48px impact';
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black'
    ctx.fillText('Play', 10, 50);
    ctx.restore()
}

