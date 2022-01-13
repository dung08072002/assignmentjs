import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";

const router = new Navigo("/", { linksSelector: "a"});

const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("content").innerHTML = content.print();
    document.getElementById("footer").innerHTML = Footer.print();
}

router.on({
    "/": () => {
        render(HomePage.render());
    },
    "/about": () => {
        render(AboutPage.render());
    }
})

router.resolve(); //Kích hoạt router

// router.on("/", function(){
//     console.log('Home page');
// });
// router.on("about", function(){
//     console.log('About page');
// });
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

