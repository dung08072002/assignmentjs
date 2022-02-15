import { signup } from "../api/user";

const Signup = {
    render(){
        return `
            <form id="formSignup">
                <input type="email" id="email" placeholder="Your Email" class="border border-black" />
                <input type="password" id="password" placeholder="Your password" class="border border-black" />
                <button>Signup</button>
            </form>
        `
    },
    afterRender(){
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', function(e){
            e.preventDefault();
            signup({
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value
            })
        })
    }
}
export default Signup;