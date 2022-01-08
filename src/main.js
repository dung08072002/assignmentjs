import Navigo from "navigo";

const router = new Navigo("/");

// router.on("/", function(){
//     console.log('Home page');
// });
// router.on("about", function(){
//     console.log('About page');
// });

router.on({
    "/": () => {
        console.log('Home page');
    },
    "/about": () => {
        console.log('About page');
    }
})

router.resolve();

// //ES5
// function Animal(color){
//     this.color = color;
//     this.showInfor = function (){
//         console.log(this.color);
//     }
// }
// //Khởi tạo đối tượng
// const cat = new Animal ("mau vang");
// cat.showInfor();

// //ES6
// class ConVat{
//     constructor(color){
//         this.color = color;
//     }
//     showInfor() {
//         console.log(this.color);
//     }
// }
// const cat2 = new ConVat ("mau do");

// //OBJECT LITERAL
// const person = {
//     name: 'Dung',
//     showInfo(){
//         console.log(this.name);
//     }
// };

