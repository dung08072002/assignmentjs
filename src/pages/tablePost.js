/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import axios from "axios";
import { getAll, remove } from "../api/posts";
import { reRender } from "../utils/rerender";

const TablePost = {
    async render() {
        const { data } = await getAll();
        return `
        ${data.map((post, index) => `
            <tr>
                <td>${index + 1}</td>
                <td class="text_cap">${post.title}</td>
                <td><img src="${post.img}" alt="" height="100" width="100" class="img-fluid img-user m-auto"></td>
                <td class="text_cap check_active">Public</td>
                <td class="text_cap check_active"></td>
                <td class="update_user"> <a href="/admin/news/${post.id}/edit">Edit <i class="fas fa-wrench"></i></a></td>
                <td class="decoration-1"><button data-id="${post.id}" class="btn decoration-1 delete_user">Delete <i class="fas fa-trash-alt"></i></button></td>
            </tr>
        `).join("")}
        `;
    },
    afterRender() {
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa bài viết này không ?");
                if (confirm) {
                    remove(id).then(() => {
                        reRender(TablePost, "#table-news");
                    });
                }
            });
        });
    },
};
export default TablePost;