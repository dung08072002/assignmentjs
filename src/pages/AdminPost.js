/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import swal from "sweetalert";
import Banner from "../components/banner";
import { reRender } from "../utils/rerender";
import TablePost from "./tablePost";

const AdminPost = {
    async render() {
        return /* html */`
            <div>
                <table class="w-full">
                    <thead>
                    <tr class="text-left">
                        <th>STT</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                    <tbody id="table-news">
                        ${await TablePost.render()}
                    </tbody>
                    </thead>
                </table>
            </div>
        `;
    },
    afterRender() {
        TablePost.afterRender();
    },
};
export default AdminPost;