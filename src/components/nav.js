const Nav = {
    print() {
        return `
            <ul class="flex flex-nowrap">
                <li class="mr-10 text-white hover:underline"><a href="/">Trang chủ</a></li>
                <li class="mr-10 text-white hover:underline"><a href="/about">Giới thiệu</a></li>
                <li class="mr-10 text-white hover:underline"><a href="">Chương trình đào tạo</a></li>
                <li class="mr-10 text-white hover:underline"><a href="">Góc sinh viên</a></li>
                <li class="mr-10 text-white hover:underline"><a href="">Tuyển dụng</a></li>
            </ul>
        `;
    }
}
export default Nav;