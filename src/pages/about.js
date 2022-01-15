import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                ${Header.render()}
                <h1>About us</h1>
                ${Footer.render()}
            </div>
        `;
    },
};
export default AboutPage;