/* eslint-disable no-console */
import { reRender } from "../utils/rerender";

const Header = {
    render() {
        return `
      <header>
      <div class="header_main">
          <div class="logo_content">
              <div class="logo al_i_center">
                  <i class="fab fa-dyalog"></i>
                  <div class="font_menu text_uppercase text_weight_white un_select">Dungnv</div>
              </div>
          </div>
          <div class="header_menu">
              <ul>
                  <li><a class="hover_border_effect_center un_select text_uppercase text_weight_white font_menu" href="/">home</a></li>
                  <li><a class="hover_border_effect_center un_select text_uppercase text_weight_white font_menu" href="/#/news">news</a></li>
                  <li><a class="hover_border_effect_center un_select text_uppercase text_weight_white font_menu" href="/#/products">products</a></li>
                  <li><a class="hover_border_effect_center un_select text_uppercase text_weight_white font_menu" href="/#/about">about</a></li>
                  <li><a class="hover_border_effect_center un_select text_uppercase text_weight_white font_menu" href="/">accessories</a></li>
                  <li><a class="hover_border_effect_center un_select text_uppercase text_weight_white font_menu" href="/">sale</a></li>
              </ul>
          </div>
          <div class="header_sign-in-up cart">
              <a href="/cart" class="hover_border_effect_center un_select bor_none ol_none font_menu text_weight_white bg_none btn_show-cart"><i class="fas fa-shopping-cart"></i></a href="">
              ${localStorage.getItem("user") ? `
              <p id="account-email" class="hover_border_effect_center un_select mg_rl_xx bor_none text_uppercase font_menu ol_none bg_none text_weight_white"></p>
              <a href="/admin/news" class="hover_border_effect_center un_select mg_rl_xx bor_none text_uppercase font_menu ol_none bg_none text_weight_white">manage</a>
              <p id="logout" class="cursor-pointer hover_border_effect_center un_select mg_rl_xx bor_none text_uppercase font_menu ol_none bg_none text_weight_white">Log out</p>
              ` : `<a href="/signin" class="hover_border_effect_center un_select mg_rl_xx bor_none text_uppercase font_menu ol_none bg_none text_weight_white">sign in</a>
                   <a href="/signup" class="hover_border_effect_center un_select bor_none text_uppercase font_menu ol_none bg_none text_weight_white">sign up</a>`
}
          </div>
      </div>
  </header>
        `;
    },
    afterRender() {
        const accountEmail = document.querySelector("#account-email");
        if (accountEmail) {
            accountEmail.innerHTML = JSON.parse(localStorage.getItem("user")).name;
        }
        // Log out
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Header, "#header");
            });
        }
    },
};
export default Header;