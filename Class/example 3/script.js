import { Create } from './exe.js'
let a = 'name of tag name',
    x = Math.floor(Math.random() * window.innerWidth),
    y = Math.floor(Math.random() * window.innerHeight);
let newElement = new Create('div', a, 'active', x, y);
console.log(newElement.paste());
document.body.appendChild(newElement.paste());
console.log(newElement.texts);







class CreatedTwo extends Create {
    constructor(tag, text, nameClass, x, y) {
        super(tag, text, nameClass, x, y)
        this.tag = tag;
        this.text = text;
        this.nameClass = nameClass;
        this.x = x;
        this.y = y;
    }
    paste() {
        let element = document.createElement(this.tag);
        element.innerHTML = this.texts;
        element.classList.add(this.nameClass);
        //let item = document.querySelector(`.${this.nameClass}`);
        element.style.cssText = `width:100px;height:100px; background:green; display:flex; position:absolute; left:${this.x}px;top:${this.y}px; justify-content: center; align-items:center; text-align:center`
        return element
    }
}
let xx = Math.floor(Math.random() * window.innerWidth + 20),
    yy = Math.floor(Math.random() * window.innerHeight + 20),
    newElements = new CreatedTwo('div', a, 'active', xx, yy);
console.log(newElements.paste());
document.body.appendChild(newElements.paste());


class CreatedThree {
    constructor(tag, text, nameClass, x, y) {
        this.tag = tag;
        this.text = text;
        this.nameClass = nameClass;
        this.x = x;
        this.y = y;
    }
    paste() {
        let element = document.createElement(this.tag);
        element.innerHTML = this.text;
        element.classList.add(this.nameClass);
        //let item = document.querySelector(`.${this.nameClass}`);
        element.style.cssText = `width:100px;height:100px; background:green; display:flex; position:absolute; left:${this.x - (50)}px;top:${this.y - 50}px; justify-content: center; align-items:center; text-align:center`
        return element
    }
    get func() {
        return this.text.toUpperCase()
    }
    set func(text) {
        this.text = text
    }
}
let xx2 = Math.floor(Math.random() * window.innerWidth + 20),
    yy2 = Math.floor(Math.random() * window.innerHeight + 20)

let newElemented;
document.addEventListener('mouseover', function (e) {
    xx2 = e.clientX;
    yy2 = e.clientY;
    newElemented = new CreatedThree('div', a, 'active', xx2, yy2);
    let rem = document.querySelector(`.${newElemented.nameClass}`)
    document.body.removeChild(rem)
    document.body.insertAdjacentElement('afterbegin', newElemented.paste());
})
console.log(newElements.paste());

