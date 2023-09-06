/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let arr_slice = arr.slice(1,4)
let result = [];

for (elem in arr_slice) {
    let dic = arr_slice[elem]
    result.push((Object.values(dic)[0]));
}
console.log(result);

//export result
module.exports = result;