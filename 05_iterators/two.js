// for of,in and each loop

// [" "," "," "]
// [{},{}]

 const array = [1,2,3,4,5]

// for (const iterator of array) {
//     console.log(iterator)
// }

// for (const key in array) {
//     console.log(array[key])
// }

// here function is callback func.
    array.forEach((val,index,array) => { // array.forEach(function (item){          //array.forEach(element => {
    console.log(val,index,array)         //     console.log(item)                   //console.log(element)
    })                                   //         })                                           //});

// const string = "hello"
// for (const char of string) {
//     console.log(char)
// }

//loop on map
const map = new Map()
map.set('in','india')
map.set('us','united states')
map.set('Q','qatar')
map.set('in','india')

//console.log(map)

//1.
for (const key of map) {
    //console.log(key)
}

      /*for in loop is not work on map*/
// for (const key in map) {
//    console.log(key) 
// }

//2.
for (const [key,value] of map) {
    //console.log(key)
}
//3.
for (const [key,value] of map) {
    //console.log(value)
}

// loop on Object

const myobject = {
    game1 : "pubg",
    game2 : "takken 3"
}

//   for of loop is not work on object
// for (const key of myobject) {
//       console.log(key)   
// }

for (const key in myobject) {
   // console.log(`${key} :- ${myobject[key]}`)
}