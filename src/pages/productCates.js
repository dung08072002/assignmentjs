/* eslint-disable import/no-named-as-default */
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import { getAllCates, getByCate } from "../api/productcates";
import formSearch from "../components/formSearchProduct";

const ProductCate = {
    async render(id) {
        const { data } = await getByCate(id);
        const cate = await getAllCates();
        return `
            <div id="header">
                ${Header.render()}
            </div>
            <div class="banner">
                ${Banner.render()}
            </div>
            <main class="content">
                <aside class="category">
                    ${formSearch.render()}
                    <h5 class="un_select color_cate title_cate text_uppercase">category</h5>
                    <ul>
                    ${cate.data.map((item) => `
                        <li class="mg_tb-10"><a class="un_select font_weight500 color_cate text_cate text_cap" href="/${item.name}/${item.id}">${item.name}</a></li>
                    `).join("")}
                    </ul>
                    <div class="sort bor_top">
                        <span class="un_select color_cate title_cate dis_block text_uppercase">brand</span>
                        <span class="un_select color_cate title_cate dis_block show_plus">+</span>
                    </div>
                    <div class="sort">
                        <span class="un_select color_cate title_cate dis_block text_uppercase">character</span>
                        <span class="un_select color_cate title_cate dis_block show_plus">+</span>
                    </div>
                    <div class="sort">
                        <span class="un_select color_cate title_cate dis_block text_uppercase">price</span>
                        <span class="un_select color_cate title_cate dis_block show_plus">+</span>
                    </div>
                    <div class="sort">
                        <span class="un_select color_cate title_cate dis_block text_uppercase">series</span>
                        <span class="un_select color_cate title_cate dis_block show_plus">+</span>
                    </div>
                </aside>
                <div class="content_product bg-white">
                    <div class="grid grid-cols-3 gap-8">
                    ${data.products.map((item) => `
                    <div class="column_product">
                        <div class="img-product">
                            <a href="/#/products/${item.id}">
                                <figure style="background-image: url('${item.img}');" class="img-bg"></figure>
                            </a>
                        </div>
                        <div class="details-product dt_pr_1">
                            <span class="dis_block product-name">${item.name}</span>
                            <span class="dis_block product-price">$${item.price}</span>
                            <a href="/#/products/${item.id}" class="add-to-cart">view detail</a>
                        </div>
                </div>
            `).join("")}
            </div>
            </div>
            </main>
            ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default ProductCate;