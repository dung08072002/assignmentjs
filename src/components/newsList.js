import data from "../data";

const NewsList = {
    render() {
        return /* html */`
                <h2 class="text-3xl text-[#272f54] uppercase kind_of_content mb-2 font-bold">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-5">
                    ${data.map((post) => `
                            <div class="detail-content p-5 border-2 hover:">
                                    <div class="img-content">
                                        <img src="${post.img}" class="w-max" alt="">
                                    </div>
                                    <div>
                                    <h3 class="title-content text-2xl text-[#9d430f] font-semibold">
                                        ${post.title}
                                    </h3>
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