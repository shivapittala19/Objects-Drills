const testObject = require('./data/info')

function pairs(obj){
    const array = []
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            array.push([key,obj[key]])
        }
    }
    return array;

    // return Object.entries(obj)
}

const finalArray = pairs(testObject)
console.log(finalArray)