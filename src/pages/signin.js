import { signin } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Signin = {
    render(){
        return `
            <form id="formSignin">
                <input type="email" id="email" placeholder="Your Email" class="border border-black" />
                <input type="password" id="password" placeholder="Your password" class="border border-black" />
                <button>Sign in</button>
            </form>
        `
    },
    afterRender(){
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value
                });    
                if(data){
                    localStorage.setItem('user', JSON.stringify(data.user));
                    toastr.success("Đăng nhập thành công");
                    setTimeout(()=>{
                        if(data.user.id === 1){
                            document.location.href="/admin/news"
                        } else {
                            document.location.href="/"
                        }
                    }, 2000);
                }
                
            } catch (error) {
                toastr.error(error.response.data);
            }
            

            
        })
    }
}
export default Signin;