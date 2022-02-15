import Banner from "../components/banner";
import Header from "../components/header";
import NewsList from "../components/newsList";

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
        `;
    },
    afterRender(){
        Header.afteRender();
    }
};
export default HomePage;