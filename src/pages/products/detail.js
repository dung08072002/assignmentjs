import toastr from "toastr";
import { get } from "../../api/products";
import { $ } from "../../utils";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner from "../../components/banner";

const DetailProductsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <div id="header">
                ${Header.render()}
            </div>
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="bg-[#e7e6e3] detail-product-id">
                <div class="w-3/5">
                    <img class="img-fluid mx-auto" src="${data.img}" alt="">
                </div>
                <div class="w-2/5 mx-auto bg-[#252423] px-20">
                    <div class="infor-dt-product">
                        <h1 class="dt-pro-name">${data.name}</h1>
                        <p class="dt-pro-price">$${data.price}</p>
                    </div>
                    <div class="mt-5 flex add-cart-quantity">
                        <div class="mr-5">
                            <button  data-id="" class="btn btn-decrease border border-black bg-white h-8 w-8">-</button>
                            <input type="number" id="inputValue" class="pl-1 border border-black bg-white h-8 w-8" value="1" />
                            <button  data-id="" class="btn btn-increase border border-black bg-white h-8 w-8">+</button>
                        </div>
                        <button id="btnAddToCart" class="">Add to cart</button>
                    </div>
                    <div class="mt-5">
                        <h3 class="dt-pro-desc">Description:</h3>
                        <p class="dt-pro-desc-main">${data.desc}</p>
                    </div>
                </div>
            </div>
            ${Footer.render()}
        `;
    },
    afterRender(id) {
        Header.afterRender();
        const inputValue = document.querySelector("#inputValue");
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: inputValue.value ? +inputValue.value : 1 }, () => {
                toastr.success(`Thêm  ${data.name} vào giỏ hàng thành công!`);
            });
        });
    },
};
export default DetailProductsPage;