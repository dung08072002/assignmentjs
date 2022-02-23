/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import swal from "sweetalert";
import Banner from "../components/banner";
import { reRender } from "../utils/rerender";
import TablePost from "./tablePost";

const AdminPost = {
    async render() {
        return /* html */`
            <div class="sidebar">
            <div class="logo_content">
                <div class="logo">
                    <i class="fab fa-dyalog"></i>
                    <div class="logo_name text_uppercase">Dungnv</div>
                </div>
                <i class="fas fa-bars" id="btn"></i>
            </div>
            <ul class="nav_list">
                <li>
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search...">
                    <!-- <span class="tooltip">Search</span> -->
                </li>
                <li>
                    <a href="/">
                        <i class="fas fa-home"></i>
                        <span class="links_name">Home</span>
                    </a>
                    <!-- <span class="tooltip">Dasboard</span> -->
                </li>
                <li>
                    <a href="/admin/users">
                        <i class="fas fa-users"></i>
                        <span class="links_name">User Management</span>
                    </a>
                    <!-- <span class="tooltip">User Management</span> -->
                </li>
                <li>
                    <a href="/admin/news">
                        <i class="fas fa-newspaper"></i>
                        <span class="links_name">Post Management</span>
                    </a>
                    <!-- <span class="tooltip">Post Management</span> -->
                </li>
                <li>
                    <a href="/admin/products">
                        <i class="fas fa-box"></i>
                        <span class="links_name">Product Management</span>
                    </a>
                    <!-- <span class="tooltip">Product Management</span> -->
                </li>
            </ul>
            <div class="profile_content">
                <div class="profile">
                    <div class="profile_details">
                        <img src="https://res.cloudinary.com/assigmentjsweb501/image/upload/v1645498484/like_sgg0mc.png" alt="">
                        <div class="name_job">
                            <div class="name">Admin</div>
                            <div class="job">Web Designer</div>
                        </div>
                    </div>
                    <a href="/"><i class='bx bx-log-out' id="log_out"></i></a>
                </div>
            </div>
        </div>
        <div class="home_content_2">
            <div class="container_home_content">
                <div class="home_intro">
                    <div class="left_intro">
                        <h5 class="hi_username">Hi Admin,</h5>
                        <h2 class="welcome_back">Welcome back<span class="desktop-hide">👋</span></h2>
                    </div>
                    <div class="right_intro">
                        <i class="far fa-bell"></i>
                    </div>
                </div>
                <div class="add">
                    <a href="/admin/news/add" class="text_uppercase add-user un_select">add new post <i class="fas fa-plus"></i></a>
                </div>
                <div class="users_table">
                    <table class="styled-table">
                        <thead>
                            <th>Number</th>
                            <th class="text_cap">post title</th>
                            <th class="text_cap">post image</th>
                            <th class="text_cap">post status</th>
                            <th colspan="3">Action</th>
                        </thead>
                        <tbody id="table-news">
                            ${await TablePost.render()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="8">Total post:</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        `;
    },
    afterRender() {
        TablePost.afterRender();
        const btn = document.querySelector("#btn");
        const sidebar = document.querySelector(".sidebar");
        const searchBtn = document.querySelector(".fa-search");
        btn.onclick = () => {
            sidebar.classList.toggle("active");
        };
    },
};
export default AdminPost;