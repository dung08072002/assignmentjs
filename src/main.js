import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
//Admin
import Dashboard from "./pages/admin/dashboard";
import HeaderAdmin from "./components/admin/headerAdmin";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news": () => {
        print(NewsPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/admin": () => {
        print(Dashboard.render());
    }
});
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

