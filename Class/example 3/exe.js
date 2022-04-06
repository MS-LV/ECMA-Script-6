export class Create {
    constructor(tag, text, nameClass, x, y) {
        this.tag = tag;
        this.text = text;
        this.nameClass = nameClass;
        this.x = x;
        this.y = y;
    }
    get texts() {
        if (this.text.length > 7) return this.text.toUpperCase();
        return 'Sorry'
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