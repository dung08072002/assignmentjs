import data from "../data";

const NewsList = {
    render() {
        return /* html */`
                <div class="grid grid-cols-3 gap-5 mt-5">
                    ${data.map((post) => `
                            <div class="detail-content p-5 border-2 hover:">
                                    <div class="img-content">
                                        <a href="/news/${post.id}">
                                            <img class="w-max" src="${post.img}" alt="" />
                                        </a>
                                    </div>
                                    <div>
                                    <a href="/news/${post.id}">
                                        <h3 class="title-content text-2xl text-[#9d430f] font-semibold">
                                            ${post.title}
                                        </h3>
                                    </a>
                                    <p class="mt-3">
                                        ${post.desc}
                                    </p>
                                </div>
                        </div>
                        <!-- end detail content -->
                    `).join("")}
                    
                </div>
        
        `;
    },
};
export default NewsList;