import { UNIT } from '../initState'
var canvas = document.getElementById('canvas');
import { tool , mapEdit } from './toolbar'

export default function createEditorListener() {
    canvas.addEventListener('click', (e)=> {
        if(!createToolbarListener(e) && !blockSelectorListener(e)){
            let x = Math.floor(e.offsetX / UNIT)
            let y = Math.floor(e.offsetY / UNIT)
            if(tool.type === "paint") {
                let isNotEmpty = mapEdit.blocks.findIndex(block => block.x === x && block.y === y)
                if(isNotEmpty === -1) {
                    mapEdit.addBlock(x,y,tool.block,1.01)
                } else {
                    mapEdit.modifyBlock(isNotEmpty,x,y,tool.block,1.01)
                }
            }
            if(tool.type === "errase") {
                mapEdit.deleteBlock(x ,y)
            }
        }
    })
}

function createToolbarListener(e) {
    let x = e.offsetX
    let y = e.offsetY
    let toolbarWidth = canvas.width*0.3
    if(x >= canvas.width*0.02 && x <= canvas.width*0.02 + toolbarWidth &&
    y >= canvas.height*0.03 && y <= canvas.height*0.03 + 50) 
    {
        if((x >= canvas.width*0.02 && x <= canvas.width*0.02 + (toolbarWidth /3))) {
            tool.modifyTool('paint')
        }
        else if((x >= canvas.width*0.02 && x <= canvas.width*0.02 + 2*(toolbarWidth / 3))) {
            tool.modifyTool('errase')
        }
        else if((x >= canvas.width*0.02 && x <= canvas.width*0.02 + 3*(toolbarWidth / 3))) {
            console.log(JSON.stringify(mapEdit))
            alert(JSON.stringify(mapEdit))
        }
        return true
    } 
    return false
}

function blockSelectorListener(e) {
    if(tool.type === 'paint') {
        let x = e.offsetX
        let y = e.offsetY
        let toolbarWidth = canvas.width*0.3
        let spaceBetween = ((toolbarWidth - 3*40) / 6 )
        if(x >= canvas.width*0.02 + spaceBetween && x <= canvas.width*0.02 + spaceBetween + 35 &&
        y >= 60 +canvas.height*0.03 && y <= 95 +canvas.height*0.03) 
        {
            tool.nextBlock()
            return true
        }
    }
    return false
}