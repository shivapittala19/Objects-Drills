const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', role:undefined };

function defaults(obj, defaultProps){
    for(let key in obj){
        if(obj[key] === undefined){
            obj[key] = defaultProps
        }
    }
    return obj
}
const finalnewObj = defaults(testObject,'Developer')
console.log(finalnewObj)