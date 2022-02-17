import toastr from "toastr";
import { get } from "../../api/products";
import { $ } from "../../utils";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";

const DetailProductsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <h1>${data.name}</h1>
            <p>${data.price}</p>
            <input type="number" id="inputValue" class="border border-black" value="1" />
            <button id="btnAddToCart" class="border border-black bg-indigo-500 text-white px-4 py-3">Giỏ hàng</button>
        `;
    },
    afterRender(id) {
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