import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";
import ProductsList from "../components/productsList";

const HomePage = {
    async render() {
        return /* html */`
            <div id="header">
                ${Header.render()}
            </div>
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
                ${await NewsList.render()}
            </div>
            <div>
                ${await ProductsList.render()}
            </div>
            ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;