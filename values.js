const testObject = require('./data/info')

function values(obj){
    const array = []
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            array.push(obj[key])
        }
    }
    return array;

    // return Object.values(obj)
}

const finalArray = values(testObject)
console.log(finalArray)