/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import axios from "axios";
import { getAll, remove } from "../api/products";
import { reRender } from "../utils/rerender";

const TableProduct = {
    async render() {
        const { data } = await getAll();
        return `
        ${data.map((product, index) => `
            <tr>
                <td>${index + 1}</td>
                <td class="text_cap">${product.name}</td>
                <td><img src="${product.img}" alt="" height="100" width="100" class="img-fluid img-user m-auto"></td>
                <td>$${product.price}</td>
                <td class="text_cap check_active">Stocked</td>
                <td class="update_user"> <a href="/admin/products/${product.id}/edit">Edit <i class="fas fa-wrench"></i></a></td>
                <td class="decoration-1"><button data-id="${product.id}" class="btn decoration-1 delete_user">Delete  <i class="fas fa-trash-alt"></i></button></td>
            </tr>
        `).join("")}
        `;
    },
    afterRender() {
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không ?");
                if (confirm) {
                    remove(id).then(() => {
                        reRender(TableProduct, "#table-news");
                    });
                }
            });
        });
    },
};
export default TableProduct;