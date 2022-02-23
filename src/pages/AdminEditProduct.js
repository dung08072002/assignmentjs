/* eslint-disable no-console */
import axios from "axios";
import { update, get } from "../api/products";
// eslint-disable-next-line import/no-named-as-default
import reRender from "../utils/rerender";
import AdminProduct from "./AdminProduct";

const AdminEditProduct = {
    async render(id) {
        const { data } = await get(id);
        return `
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
                <h1 class="title-form un_select text_cap">Update Product</h1>
                <form class="signin-create" action="" id="form-edit-product">
                    <div class="relative-input">
                        <span class="absolute-text">PRODUCT NAME</span>
                        <input type="text" name="name-product" id="name-product" class="product-name placeholder_change" value="${data.name}" autocomplete="off">
                        <span class="un_select wrong_signin-create"></span>
                    </div>
                    <div class="relative-input">
                        <span class="absolute-text">PRODUCT NAME</span>
                        <input type="text" name="price-product" id="price-product" class="product-name placeholder_change" value="${data.price}" autocomplete="off">
                        <span class="un_select wrong_signin-create"></span>
                    </div>
                    <div class="relative-input">
                        <span class="absolute-text">PRODUCT IMAGE</span>
                        <input type="file" name="img-product" id="img-product" class="product-image placeholder_change">
                        <span class="un_select wrong_signin-create"></span>
                        <div class="hidden"><img width="200" src="${data.img}" id="previewImage" /></div>
                    </div>
                    <div class="relative-input">
                        <span class="absolute-text">PRODUCT DESCRIPTION</span>
                        <input type="text" name="desc-product" id="desc-product" class="product-quantity placeholder_change" autocomplete="off" value="${data.desc}">
                        <span class="un_select wrong_signin-create"></span>
                    </div>
                    <div class="margin-b20 submit">
                        <button id="btn-submit" class="">UPDATE PRODUCT</button>
                    </div>
                </form>
                <div class="other_choose">
                    <a class="choose_sign-in create" href="/admin/products">Back to product list</a>
                </div>
            </div>
        </div>
        `;
    },
    afterRender(id) {
        // click side bar
        const btn = document.querySelector("#btn");
        const sidebar = document.querySelector(".sidebar");
        btn.onclick = () => {
            sidebar.classList.toggle("active");
        };

        const formEdit = document.querySelector("#form-edit-product");
        const imgPost = document.querySelector("#img-product");
        const imgPreview = document.querySelector("#previewImage");
        let imgUploadedLink = "";

        // eslint-disable-next-line no-unused-vars
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(imgPost.files[0]);
        });
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = imgPost.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "jkbdphzy");

                const { data } = await axios({
                    url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-formendcoded",
                    },
                    data: formData,
                });
                imgUploadedLink = data.url;
            }

            update({
                id,
                name: document.querySelector("#name-product").value,
                price: document.querySelector("#price-product").value,
                img: imgUploadedLink || imgPreview.src,
                desc: document.querySelector("#desc-product").value,
            })
                .then((result) => console.log(result.data))
                .catch((error) => console.log(error));
            document.location.href = "/#/admin/products";
            await reRender(AdminProduct, "#app");
        });
    },
};
export default AdminEditProduct;