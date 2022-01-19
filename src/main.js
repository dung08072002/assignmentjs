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

const print = async (content) => {
    document.getElementById("app").innerHTML = await content.render();
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/news/:id": (value) => {
        print(DetailNewsPage.render(value.data.id));
    },
    "/signin": () => {
        print(SignIn);
    },
    "/signup": () => {
        print(SignUp);
    },
    "/admin/dashboard": () => {
        print(DashboardPage)
    },
    "/admin/news": () => {
        print(AdminNewsPage)
    },
    "/admin/news/add": () => {
        print(AdminNewsAddPage)
    },
});
router.resolve(); //Kích hoạt router

//callback: ham được truyền vào một hàm khác như 1 tham số
//
// const a = 10;

// function myFunction(){
//     function sum(numberA){
//         console.log(typeof numberA);
//     };
// }
// sum(a);

const render = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            // connect den server thanh cong
            resolve("Mang chua du lieu tu server");
        } catch (error) {
            reject("Loi ket noi");}
        }, 3000);
});

const printB = async () => {
    try {
        const result = await render();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
printB();

/* API */

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

