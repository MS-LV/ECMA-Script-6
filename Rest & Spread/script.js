/*let array = [13, 122, 34, 33, 88, 90];
/*let arry2 = array.filter((item) => {
    return item >= 18;
})
console.log(arry2);

let newArr = [];

function getArray(...args) {
    console.log(args);
    newArr = args[0].filter((item) => {
        return item >= 18;
    })
}

getArray(array, array)
console.log(getArray(array));
console.log(newArr);*/
let texts = document.querySelector('.texts');
let arr = [
    { name: "Jamoliddin", age: 18, country: "Tajikistan" },
    { age: 20, name: "Mister", country: "Poland" },
    { country: "Moskov", age: 23, name: "Baron" },
    { name: "Heroes", country: "Mercy", age: 24 },
    { name: "Heroes", country: "Mercy", age: 24 }
];


function all(...args) {
    args.forEach((item, index, array) => {
        for (let i = 0; i < item.length; i++) {

            texts.innerHTML += `My name is ${item[i].name} and i state in ${i} from ${JSON.stringify(item[i])} <br/>`
        }
    })
}
all(arr);

let arr2 = [...arr];
let [obj1, obj2, ...obj3] = arr2

obj3.push(323, 323)

let objected = {
    name: "Heroes", country: "Mercy", age: 24, concat: function () {
        return ` ${this.name}, ${this.age}, ${this.country}`
    }
};
let boughted = {
    name: "misters",
    age: 55,
    country: "HElvetica"
}

let { newOBJ, metter } = arr;
let tell = [12, 33, 55, 6, 544, 667, 33]
let [...fib] = tell;
fib.push(3434, 3434, 32423, 3);
fib = [12, 2323, 213123, 21, ...tell]
console.log(fib);
console.log(tell);
let { name, age, concat } = objected;

function called() {
    return `${this.name}, ${this.age}, ${this.country}`
}
console.log(called.call(boughted));

