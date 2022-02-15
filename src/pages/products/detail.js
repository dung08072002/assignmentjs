import { get } from '../../api/products';
import { $ } from '../../utils';
import { addToCart } from '../../utils/cart';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const DetailProductsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <h1>${data.name}</h1>
            <p>${data.price}</p>
            <button id="btnAddToCart" class="border border-black bg-indigo-500 text-white px-4 py-3">Giỏ hàng</button>
        `;
    },
     afterRender(id){
        $("#btnAddToCart").addEventListener('click', async () => {
            const { data } = await get(id);
            addToCart({...data, quantity: 1}, function(){
                toastr.success(`Thêm  ${data.name} vào giỏ hàng thành công!`)
            })
        });
    }
};
export default DetailProductsPage;
