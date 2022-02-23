/* eslint-disable no-unused-vars */
import axios from "axios";
import { add } from "../api/products";
import { reRender } from "../utils/rerender";
import AdminProduct from "./AdminProduct";

const AddProduct = {
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
        <div class="home_content">
        <div class="container form_signin-create">
            <h1 class="title-form un_select text_cap">Add Product</h1>
            <form class="signin-create" id="form-add-product">
                <div class="relative-input">
                    <span class="absolute-text">PRODUCT NAME</span>
                    <input type="text" name="name-product" id="name-product" class="product-name placeholder_change" autocomplete="off">
                    <span class="un_select wrong_signin-create"></span>
                </div>
                    <div class="relative-input">
                    <span class="absolute-text">PRODUCT PRICE</span>
                    <input type="text" name="price-product" id="price-product" class="product-quantity placeholder_change" autocomplete="off">
                    <span class="un_select wrong_signin-create"></span>
                </div>
                <div class="relative-input">
                    <span class="absolute-text">PRODUCT IMAGE</span>
                    <input type="file" name="img-product" id="img-product" class="product-image placeholder_change">
                    <span class="un_select wrong_signin-create"></span>
                </div>
                <div class="relative-input">
                    <span class="absolute-text">PRODUCT DESCRIPTION</span>
                    <input type="text" name="desc-product" id="desc-product" class="product-quantity placeholder_change" autocomplete="off">
                    <span class="un_select wrong_signin-create"></span>
                </div>
                <div class="margin-b20 submit">
                    <button id="btn-submit" class="">ADD PRODUCT</button>
                </div>
            </form>
            <div class="other_choose">
                <a class="choose_sign-in create" href="/admin/products">Back to product list</a>
            </div>
        </div>
    </div>
        `;
    },
    afterRender() {
        const btn = document.querySelector("#btn");
        const sidebar = document.querySelector(".sidebar");
        const searchBtn = document.querySelector(".fa-search");
        btn.onclick = () => {
            sidebar.classList.toggle("active");
        };

        const formAdd = document.querySelector("#form-add-product");
        const imgPost = document.querySelector("#img-product");

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assigmentjsweb501/image/upload";
        const CLOUDINARY_PRESET = "lwllsryx";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị input file
            const file = imgPost.files[0];

            // append vào object formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary
            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call api thêm bài viết
            add({
                name: document.querySelector("#name-product").value,
                price: document.querySelector("#price-product").value,
                img: response.data.url,
                desc: document.querySelector("#desc-product").value,
            });
            document.location.href = "/#/admin/products";
            await reRender(AdminProduct, "#app");
        });
    },
};
export default AddProduct;