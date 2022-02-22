import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";

const Signin = {
    render() {
        return `
            <div class="container form_signin-create">
        <h1 class="title-form un_select">Sign In</h1>
        <form class="signin-create" id="formSignin" >
            <div class="relative-input">
                <span class="absolute-text">EMAIL</span>
                <input type="text" name="email" id="email" class="username placeholder_change" autocomplete="off">
            </div>
            <div class="relative-input">
                <span class="absolute-text">PASSWORD</span>
                <input type="password" name="password" id="password" class="password placeholder_change">
            </div>
            <div class="different_signin">
                <button class="signin-with facebook"><i class="fab fa-facebook"></i></button>
                <button class="signin-with google"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" class="img-fluid icon-gg" alt=""></button>
                <button class="signin-with apple"><i class="fab fa-apple"></i></button>
            </div>
            <div class="margin-b20 stay_signed-in">
                <div class="pretty p-svg p-curve">
                    <input type="checkbox" />
                    <div class="state p-success">
                        <!-- svg path -->
                        <svg class="svg svg-icon" viewBox="0 0 20 20">
                            <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                        </svg>
                        <label>
                            <span class="stay_text">Stay signed in</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="margin-b20 submit">
                <button id="btn-submit">SIGN IN</button>
            </div>
        </form>
        <div class="other_choose">
            <a class="choose_sign-in forgot" href="#">Can't sign in?</a>
            <a class="choose_sign-in create" href="/signup">Create account</a>
        </div>
    </div>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    toastr.success("Đăng nhập thành công");
                    setTimeout(() => {
                        if (data.user.id === 1) {
                            document.location.href = "/admin/news";
                        } else {
                            document.location.href = "/";
                        }
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signin;