const Header = {
    render() {
        return /* html */ `
        <header>
            <div class="bg-blue-800 py-4">
            <a href="">
                <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
            </a>
            </div>
            <div class="bg-orange-500">
            <ul class="flex">
                <li><a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Home </a></li>
                <li><a href="/about" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">About</a></li>
                <li><a href="/product" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Product</a></li>
                <li><a href="/contact" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Contact</a></li>
                <li><a href="/signin" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Sign in</a></li>
                <li><a href="/signup" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Sign up</a></li>
                <li><a href="/admin/dashboard" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Dashboard</a></li>
            </ul>
            </div>
        </header>
        `;
    },
};
export default Header;