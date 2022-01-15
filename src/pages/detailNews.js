import data from "../data";
import Footer from "../components/footer";
import Header from "../components/header";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id == id);
        return /* html */`
                <div class="max-w-5xl mx-auto">
                ${Header.render()}
                <div>
                <h1>${result.title}</h1>
                <img src="${result.img}" />
                <p>${result.desc}</p>
                </div>
                ${Footer.render()}
            </div>
        `;
    },
};
export default DetailNewsPage;