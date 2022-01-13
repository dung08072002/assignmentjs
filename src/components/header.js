import Nav from "./nav";

const Header = {
    print(){
        return `
                <header class="max-w-6xl mx-auto">
                <div class="header-top bg-[#272f54]">
                <a class="" href=""><img class="mx-auto p-5" src="https://picsum.photos/200/100" alt=""></a>
                </div>
                <div class="header-bottom bg-[#ca7802] flex justify-between px-10 py-5">
                <div class="header-menu_list">
                    ${Nav.print()   }
                </div>
                <div class="header-search">
                    <form class="flex flex-nowrap" action="">
                    <input type="text" class="mr-3">
                    <input class="text-white bg-[#272f54] px-5" type="submit" value="Tìm kiếm">
                    </form>
                </div>
                </div>
            </header>
            <!-- end header -->
        `;
    }
}

export default Header;