export class Create {
    constructor(tag, text, nameClass) {
        this.tag = tag,
            this.text = text,
            this.nameClass = nameClass
    }
    paste() {
        let element = document.createElement(this.tag);
        element.innerHTML = this.text;
        element.classList.add(this.nameClass);
        //let item = document.querySelector(`.${this.nameClass}`);
        element.style.cssText = `width:100px;height:100px; background:green`
        return element
    }
}