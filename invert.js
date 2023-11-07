const testObject = require('./data/info')

function invert(obj){
    let newObj = {};
    for (let key in obj) {
        if (!obj.hasOwnProperty){
            continue
        }
        else{
            const value = (obj[key])
            newObj[value] = key
        }
    }
    return newObj
}

const finalnewObj = invert(testObject)
console.log(finalnewObj)    