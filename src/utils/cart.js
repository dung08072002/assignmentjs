/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
// Khởi tạo giỏ hàng
let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
// Click thêm vào giỏ hàng
export const addToCart = (newProduct, next) => {
    const existProduct = cart.find((product) => product.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity++;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
// Click tăng số lượng sản phẩm
export const increaseItemInCart = (id) => {
    cart.find((product) => product.id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
};
// Click giảm số lượng sản phẩm
export const decreaseItemInCart = (id) => {
    const currenProduct = cart.find((product) => product.id === id);
    currenProduct.quantity--;
    // Nếu sản phẩm nhỏ hơn 1 thì xóa
    if (currenProduct.quantity < 1) {
        // eslint-disable-next-line no-alert
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
        if (confirm) { // Bấm xác nhận xóa
            cart = cart.filter((item) => item.id !== currenProduct.id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};
// Xóa sản phẩm trong giỏ hàng
export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
    if (confirm) {
        cart = cart.filter((item) => item.id !== id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};