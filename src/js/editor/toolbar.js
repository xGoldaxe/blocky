import blockSelector from "./blockSelector"
import {ALLBLOCKS}from '../typeOfBlocks'
import {defaultMap} from './defaultMap'

export let tool = {
    type: "paint",
    block: ALLBLOCKS[0],
    modifyTool(arg) {
        tool.type = arg
    },
    nextBlock() {
        let newBlock = ALLBLOCKS.findIndex(block => block.name === this.block.name)
        if(newBlock < ALLBLOCKS.length-1) {
            newBlock ++
        } else {
            newBlock = 0
        }
        tool.block = ALLBLOCKS[newBlock]
    }
}
export let mapEdit = {
    background: 'silver',
    blocks: defaultMap.blocks,
    startPosition: defaultMap.startPosition,
    addBlock(x, y, type, size, orientation = null){
        if(type.form === 'hero') {
            mapEdit.startPosition = {
                x: x+0.1,
                y: y+0.1
            }
            console.log(mapEdit.startPosition)
        } else if(x !== mapEdit.startPosition.x || y !== mapEdit.startPosition.y) {
            mapEdit.blocks = [...mapEdit.blocks, {
                "type": type,
                "x": x,
                "y": y,
                "size": size
            }]
        }
    },
    modifyBlock(index, x, y, type, size, orientation = null) {
        mapEdit.blocks[index] = {
            "type": type,
            "x": x,
            "y": y,
            "size": size,
            "orientation": orientation
        }
    },
    deleteBlock(x,y) {
        mapEdit.blocks = mapEdit.blocks.filter(block => x !== block.x || y !== block.y)
    }
}
const TOOLS = ["paint","errase"]

export function drawToolbar(ctx) {
    //img  
    //
    ctx.save()
    ctx.translate(canvas.width*0.02,canvas.height*0.03)
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 3
    ctx.fillStyle = 'gold'
    let toolbarWidth = canvas.width*0.3
    ctx.fillRect(0,0, toolbarWidth, 50)    
    let spaceBetween = ((toolbarWidth - 3*40) / 6 )
    
    //selected one

    let actualToolIndex = TOOLS.findIndex(x => x === tool.type)
    ctx.fillStyle = '#FFC300 '
    ctx.fillRect((toolbarWidth/3) * (actualToolIndex),0,(toolbarWidth/3),50)
    ctx.strokeRect(0,0, toolbarWidth, 50)


    ctx.translate(spaceBetween,0)
    ctx.drawImage(document.getElementById('paint'), 0, 5, 40, 40)
    blockSelector(ctx, tool)
    ctx.translate(spaceBetween*2+40,0)
    ctx.drawImage(document.getElementById('rubber'), 0, 5, 40, 40)
    ctx.translate(spaceBetween*2+40,0)
    ctx.drawImage(document.getElementById('save'), 0, 7.5, 35, 35)
    ctx.restore()
}