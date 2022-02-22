import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { signup } from "../api/user";

const Signup = {
    render() {
        return `
                <div class="container form_signin-create">
        <h1 class="title-form un_select">Registration</h1>
        <form class="signin-create" id="formSignup">
            <div class="relative-input">
                <span class="absolute-text">YOUR NAME</span>
                <input type="text" name="name" id="name" class="fullname placeholder_change" autocomplete="off">
            </div>
            <div class="relative-input">
                <span class="absolute-text">YOUR EMAIL</span>
                <input type="email" name="email" id="email" class="username placeholder_change" autocomplete="off">
            </div>
            <div class="relative-input">
                <span class="absolute-text">YOUR PASSWORD</span>
                <input type="password" name="password" id="password" class="password placeholder_change">
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
                            <span class="stay_text">Agree with Daxua's policy</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="margin-b20 submit">
            <button id="btn-submit">REGISTRATION</button>
            </div>
        </form>
        <div class="other_choose">
            <a class="choose_sign-in already" href="/signin">Already registered?</a>
        </div>
    </div>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            toastr.success("Đăng ký thành công !");
        });
    },
};
export default Signup;