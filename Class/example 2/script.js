let a = +window.prompt('write the number')
class BitNumber {
    constructor(number) {
        this.number = number
    }
    great() {
        let num = this.number,
            defaulted,
            arr = [];
        for (let i = num; num >= 1;) {
            defaulted = num - parseInt(num / 2) * 2;
            arr.push(defaulted)
            num -= num - (parseInt(num / 2));
            //console.log(arr);
        }
        return arr
    }
}
let text = new BitNumber(a);
//console.log(text.great());
text.great();
console.log();
document.body.innerHTML = text.great().reverse().join('').padStart(8, '0') 