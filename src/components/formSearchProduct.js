const formSearch = {
    render() {
        return `
       <form action="" id="search" class="w-full">
            <div class="formSearch">
                <input type="text" id="name" class = "w-full border border-black rounded-xl px-3 py-1" placeholder = "Search..." autocomplete="off">
                <button class="h-5 w-5 btn-search-pro"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
       `;
    },
};

export default formSearch;