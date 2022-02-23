/* eslint-disable import/no-named-as-default */
import { getAll } from "../../api/products";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return `
            <div id="header">
                ${Header.render()}
            </div>
            <div class="banner">
                ${Banner.render()}
            </div>
            <main class="content">
                <aside class="category">
                    <form action="" id="search" class="w-full">
                        <div class="formSearch">
                        <input type="text" id="name" class = "w-full border border-black rounded-xl px-3 py-1" placeholder = "Search..." autocomplete="off">
                        <button class="h-5 w-5"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                    <h5 class="un_select color_cate title_cate text_uppercase">category</h5>
                    <ul>
                        <li class="mg_tb-10"><a class="un_select font_weight500 color_cate text_cate text_cap" href="#">figures</a></li>
                        <li class="mg_tb-10"><a class="un_select font_weight500 color_cate text_cate text_cap" href="#">apparel</a></li>
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
                    ${data.map((product) => `
                    <div class="column_product">
                        <div class="img-product">
                            <a href="/#/products/${product.id}">
                                <figure style="background-image: url('${product.img}');" class="img-bg"></figure>
                            </a>
                        </div>
                        <div class="details-product dt_pr_1">
                            <span class="dis_block product-name">${product.name}</span>
                            <span class="dis_block product-price">$${product.price}</span>
                            <a href="/#/products/${product.id}" class="add-to-cart">view detail</a>
                        </div>
                </div>
            `).join("")}
            </div>
            </div>
            </main>
            ${Footer.render()}
        `;
    },
    async afterRender() {
        Header.afterRender();
    },
};
export default ProductsPage;