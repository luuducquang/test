// function getdata(object){
//     var arr = [];
//     for(var key in object){
//         return arr.push(`Thuoc tinh ${key} gia tri${object[key]}`)
//     }
//     return arr;
// }

// console.log(getdata({ name: 'Nguyen Van A', age: 16 }));
// getdata();

// var a = [
//     {
//         ten : "quang",
//         tuoi: 18,
//         diachi: 'hung yen',
//     }
// ]

// var total = a.reduce(function(x,y){
//     return x+y.tuoi
// },0)

// const number = [1, 2, 3, 4, 5]

// var total = number.reduce(function(sum,list){
//     return sum+list
// },0)

// console.log(total)


function callback(a,b,cb){
    return cb(a,b)
}

function sum(a,b){
    return a+b
}

console.log(callback(5,6,sum));