// import data from "../data";
import Footer from "../components/footer";
import Header from "../components/header";

const DetailNewsPage = {
    render(id) {
        return fetch(`https://61e7a8b7e32cd90017acbbf2.mockapi.io/posts/${id}`)
        .then((response) => response.json())
        .then((data) => /* html */ `
            <div class="max-w-5xl mx-auto">
            ${Header.render()}
            <h1>${data.title}</h1>
            <img src="${data.img}" />    
            <p>${data.desc}</p>
            ${Footer.render()}
            </div>
        `);
    },
};
export default DetailNewsPage;