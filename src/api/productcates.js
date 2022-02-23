import instance from "./config";

export const add = (cate) => {
    const url = "/productCates";
    return instance.post(url, cate);
};
export const get = (id) => {
    const url = `/productCates/${id}`;
    return instance.get(url);
};
export const getAllCates = () => {
    const url = "/productCates";
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/productCates/${id}`;
    return instance.delete(url);
};
export const update = (cate) => {
    const url = `/productCates/${cate.id}`;
    return instance.put(url, cate);
};
export const getByCate = (id) => {
    const url = `/productCates/${id}?_embed=products`;
    return instance.get(url);
};