let text = `L orem 32 ipsum safarnazirov7@gmailss.com dolor sit amet consectetur adipisicing elit. Amet quis magni aliquid quisquam, neque, ex iure
        tempore aaprovident velifdDFt jamoliddinqodirov18@gmail.com inventore LSmol565estiae. LS Quaerat ex567plicabo dignissi67mos laborum
        55consequuntur deleniti 33 rerum optio?`
let nameArea = document.querySelector('#form__name'),
    ageArea = document.querySelector('#form__age'),
    emailArea = document.querySelector('#form__email'),
    submitBtn = document.querySelector('#submit'),
    allText = document.querySelector('.all__text')

class Package {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
let search,
    arr = [],
    profile,
    data = new Date();


submitBtn.addEventListener('click', function () {
    profile = new Package(nameArea.value, ageArea.value, emailArea.value)

    search = profile.email.match(/\w+@\w{4,5}.\w{2,3}\b/gi);
    if (!search) alert('check your email')
    if (!!profile.name && !!profile.age && search) {
        allText.innerHTML = `My name is ${nameArea.value}. I was born ${data.getFullYear() - profile.age}. My email is ${profile.email} `
    }
})

console.log(emailArea.value.match(/\w+@\w{4,5}.\w{1,2}[\D & \W]/gi));
