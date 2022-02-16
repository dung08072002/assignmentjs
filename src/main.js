import Navigo from "navigo";
import AboutPage from "./pages/about";
import AddPost from "./pages/AdminAddPost";
import AdminPost from "./pages/AdminPost";
import CartPage from "./pages/cart";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import ProductsPage from "./pages/products";
import DetailProductsPage from "./pages/products/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    // DetailNewsPage.render(id).render();
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () => {}, {
    // Phương thức before được gọi trước khi render nội dung ra trình duyệt
    before: (done) => {
        if (localStorage.getItem("user")) {
            // lấy id trong localStorage
            const userId = JSON.parse(localStorage.getItem("user")).id;
            // Nếu userid == 1 thì render
            if (userId === 1) {
                done();
            } else {
                // ngược lại nếu ko phải admin quay về trang chủ
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),
    // News
    "/news": () => print(NewsPage),
    "/news/:id": ({ data }) => print(DetailNewsPage, data.id),
    // Products
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => print(DetailProductsPage, data.id),
    // Admin
    "/admin/news/add": () => print(AddPost),
    "/admin/news": () => print(AdminPost),
});
router.resolve();