/* eslint-disable no-unused-vars */
import axios from "axios";
import { getAll } from "../api/posts";

const NewsList = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <a href="/#/news/${post.id}">
                            <img src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a href="/#/news/${post.id}" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>                    
                        <p>${post.desc}</p>
                    </div>
                `).join("")}
                
            </div>
        `;
    },
};
export default NewsList;