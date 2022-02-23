import { $ } from "../utils";
import { decreaseItemInCart, increaseItemInCart, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/rerender";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const CartPage = {
    render() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const tongtien = cart.reduce((sum, sp) => sum + sp.quantity * sp.price, 0);
        return `
            <div id="header">
            ${Header.render()}
            </div>
            <div class="banner">
            ${Banner.render()}
            </div>
            <div class="container-cart">
            <div class="users_table">
                <table class="styled-table">
                    <thead>
                        <th class="text_cap">product name</th>
                        <th class="text_cap">product image</th>
                        <th class="text_cap">product price per one</th>
                        <th class="text_cap">product quantity</th>
                        <th class="text_cap">action</th>
                    </thead>
                    <tbody>
                    ${cart.map((item) => `
                        <tr>
                                <td class="text_cap">${item.name}</td>
                                <td><img src="${item.img}" alt="" height="100" width="100" class="img-fluid img-user"></td>
                                <td>$${item.price}</td>
                                <td>
                                    <button  data-id="${item.id}" class="btn btn-decrease border border-black bg-white h-8 w-8">-</button>
                                    <input type="number" value="${item.quantity}" class="border border-black bg-white h-8 w-8"/>
                                    <button  data-id="${item.id}" class="btn btn-increase border border-black bg-white h-8 w-8">+</button>
                                </td>
                                <td class=""><button data-id="${item.id}" class="btn delete_user">Remove</button></td>
                            </tr>
                    `).join("")}
                </tbody>
                <tfoot>
                        <tr>
                            <td colspan="5">Total price: $${tongtien}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

            ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
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