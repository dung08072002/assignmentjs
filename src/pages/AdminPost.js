
import Banner from "../components/banner";
import swal from 'sweetalert';
import { reRender } from "../utils/rerender";
import TablePost from "./tablePost";

const AdminPost = {
    async render() {
        return /* html */`
            <div class="banner">
                ${Banner.render()}
            </div>
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
    afterRender(){
        TablePost.afterRender();
    }
};
export default AdminPost;