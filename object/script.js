let wrapper = document.querySelector('.wrapper');
console.log(wrapper);
let job = "Frontend",
    cityField = "City"

const person = {
    age: 26,
    name: "Irina",
    job: 'job',
    'country-live': "Russia",
    toString: function () {
        return Object
            .keys(this)
            .filter(item => item != 'toString')
            .map(key => this[key])
            .join(' ')
    },
    example() {
        return Object
            .keys(this)
    }
}
let obj = {
    name: "Jamoliddin",
    age: 22,
    country: "Tajikistan"
}
console.log(person.toString.call(obj));
console.log(person.example.call(obj));
let a = 255;
console.log(a.toString(16));
console.log(parseInt(0xff));
console.log(Object.keys(person));
console.log(Object.assign({}, obj, person));
console.log(person);
wrapper.append(person.example.call(obj));
wrapper.append(person.toString.call(obj))
