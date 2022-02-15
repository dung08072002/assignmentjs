import { reRender } from '../utils/rerender';
const Header = {
    render() {
        return `
        <div class="bg-blue-800 py-4">
        <a href="">
          <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
        </a>
      </div>
      <div class="bg-orange-500 flex justify-between">
        <ul class="flex">
          <li><a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Home </a></li>
          <li><a href="/#/about" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">About</a></li>
          <li><a href="/#/news" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">News</a></li>
          <li><a href="/#/contact" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Contact</a></li>
        </ul>
        ${localStorage.getItem('user') ? `
            <ul class="flex space-x-4 items-center pr-4">
            <li class="flex items-center">Xin chào <span id="account-email" class="block px-4 py-3 text-white"></span></li>
            <li id="logout" class="cursor-pointer">Logout</li>
          </ul>`: "" }
      </div>
        `;
    },
    afteRender(){
      const accountEmail = document.querySelector('#account-email');
      if(accountEmail){
        accountEmail.innerHTML = JSON.parse(localStorage.getItem('user')).email;  
      }
      const logout = document.querySelector('#logout');
      if(logout){
        logout.addEventListener('click', function(){
          localStorage.removeItem('user');
          reRender(Header, '#header');
      })
      }
      
    }
};
export default Header;