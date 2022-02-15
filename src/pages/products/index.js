import { getAll } from '../../api/products';
const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return `
            <h1>Products Page</h1>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <h3 class="my-3"><a href="/#/products/${post.id}" class="font-semibold text-lg text-orange-500">${post.name}</a></h3>                    
                        <p>${post.price}</p>
                    </div>
                `).join("")}
                
            </div>
        `;
    },
};
export default ProductsPage;