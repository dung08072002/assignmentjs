import instance from "./config";

export const add = (product) => {
    const url = "/products";
    return instance.post(url, product);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
};

// export const search = (product) => {
//     const url = `/products?name_like=${}`;
//     return instance.get(url);
// };