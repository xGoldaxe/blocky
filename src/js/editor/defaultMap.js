import create from "../create";
import {ALLBLOCKS} from '../typeOfBlocks'

export const defaultMap = {
    startPosition: {
        x: 2.1,
        y: 2.1
    },
    blocks : createAllBlocks(20, 12,2,2)
}

function createAllBlocks(sizeX,sizeY,heroX,heroY) {
    let result = []
    for(let x = 0; x< sizeX; x++) {
        for(let y = 0; y < sizeY; y++) {
            if(x !== heroX || y !== heroY) {
                result.push({
                    "type": ALLBLOCKS.find(block=> block.name === "grass"),
                    "x": x,
                    "y": y,
                    "size": 1.01
                })
            }
        }
    } 
    return result
}