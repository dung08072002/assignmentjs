/* eslint-disable no-unused-vars */
import axios from "axios";
import { getAll } from "../api/products";

const ProductsList = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="bg-white p-10">
            <h1 class="text-4xl font-extrabold">Hot products</h1>
            <div class="grid grid-cols-4 gap-8 my-5">
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
                        <a href="#" class="add-to-cart">Add to cart</a>
                    </div>
                </div>
                `).join("")}
                </div>
            </div>
        `;
    },
};
export default ProductsList;