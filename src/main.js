import Navigo from "navigo";
import AboutPage from "./pages/about";
import DashboardPage from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminNewsAddPage from "./pages/admin/news/add";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news/:id": (value) => {
        print(DetailNewsPage.render(value.data.id));
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/admin/dashboard": () => {
        print(DashboardPage.render())
    },
    "/admin/news": () => {
        print(AdminNewsPage.render())
    },
    "/admin/news/add": () => {
        print(AdminNewsAddPage.render())
    },
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

