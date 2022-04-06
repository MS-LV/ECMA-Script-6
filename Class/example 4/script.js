
/* function* calc(start = 0, end = 10) {
    for (let i = start; i <= end; i++) {
        yield i;
        if (i == end - 1) clearInterval(clear)
    }

}
let str = calc();
var clear = setInterval(() => console.log(str.next()), 1000) */
/* class WriteDate {

    constructor(template, state) {
        this.temp = template;
        this.output;
    }
    getDate() {
        let timer;

        var hour = new Date().getHours();
        if (hour < 10) hour = "0" + hour;
        var minutes = new Date().getMinutes()
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = new Date().getSeconds();
        if (seconds < 10) seconds = "0" + seconds
        this.output = this.temp.replace('h', hour)
            .replace('m', minutes)
            .replace('s', seconds);

        document.body.innerHTML = this.output;
    }
    get start() {
        //this.getDate();
        setInterval(this.getDate(), 1000)
    }
}
states = document.body;
console.log(states);

let str = new WriteDate("h:m:s", states);
console.log(str);
str.getDate()
setInterval(() => str.getDate(), 1000)

 */

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    yield* generateSequence(97, 122);

}

let str = '';

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
    console.log(code);
}
console.log(str);




