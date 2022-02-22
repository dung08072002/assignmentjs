/* eslint-disable no-unused-vars */
import axios from "axios";
import { add } from "../api/products";
import { reRender } from "../utils/rerender";
import AdminProduct from "./AdminProduct";

const AddProduct = {
    async render() {
        return /* html */`
            <div>
            <form action="" id="form-add-product">
                <input type="text"
                    id="name-product"
                    class="border border-black"
                    placeholder="Name product"
                > 
                <br />
                <input type="text"
                id="price-product"
                class="border border-black"
                placeholder="Price product"
                > 
                <br />
                <input type="file"
                    id="img-product"
                    class="border border-black"
                    placeholder="Imager product"
                > <br />
                <textarea name="" 
                    id="desc-product" 
                    class="border border-black"
                    cols="30" 
                    rows="10"></textarea>
                <button class="bg-blue-500 p-4 inline-block text-white">Thêm sản phẩm</button>
            </form>
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