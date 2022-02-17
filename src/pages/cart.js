import { $ } from "../utils";
import { decreaseItemInCart, increaseItemInCart, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/rerender";

const CartPage = {
    render() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const tongtien = cart.reduce((sum, sp) => sum + sp.quantity * sp.price, 0);
        return `
            <table>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Price</th>
                        <th>Số lượng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map((item) => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.price}</td>
                            <td>
                            <button  data-id="${item.id}" class="btn btn-decrease border border-black p-2">-</button>
                            <input type="number" value="${item.quantity}" class="border border-gray-500"/>
                            <button  data-id="${item.id}" class="btn btn-increase border border-black p-2">+</button>
                            </td>
                            <td>
                                <button data-id="${item.id}" class="btn remove border bg-red-500 px-4 py-3 text-white">Remove</button>
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
                <tfoot>
                    <tr><td colspan="2" class="text-right">Tổng là: <span id="total">${tongtien}</span></td></tr>
                </tfoot>
            </table>
        `;
    },
    afterRender() {
        const btns = $(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseItemInCart(id, () => reRender(CartPage, "#app"));
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseItemInCart(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
    },
};
export default CartPage;