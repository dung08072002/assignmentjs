import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newsList";

const HomePage = {
    async render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                ${Header.render()}
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div>
                    ${await NewsList.render()}
                </div>
                ${Footer.render()}
            </div>
        `;
    },
};
export default HomePage;