const testObject = require('./data/info')

function keys(obj) {
    const array = []
    for(let key in obj){
        array.push(key)
    }
    return array
    
    // return Object.keys(obj)
}

const finalArray = keys(testObject)
console.log(finalArray)