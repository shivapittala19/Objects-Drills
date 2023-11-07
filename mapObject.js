const testObject = require('./data/info')

function mapObject(obj, cb) {
    const newMapObject = {}
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            newMapObject[key] = cb(obj[key])
        }
    }
    return newMapObject
}

const finalNewMapObject = mapObject(testObject ,(value) =>{
    return String(value).toUpperCase()
})
console.log(finalNewMapObject)