import Lottie from "lottie-react";
import { useForm } from "react-hook-form"
import loginLottie from '../../assets/lottie/login.json';
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Button from "../../Components/Buttons/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";



const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    iconColor: "#3472dc",
                    title: "User Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="hero bg-base-200 min-h-screen flex md:max-w-[1450px] mx-auto pb-10">
            <div className="lg:flex lg:items-center lg:justify-center gap-4 p-4 w-full h-full flex-col lg:flex-row-reverse">
                <div className="md:w-1/2">
                    <Lottie className=" md:w-[800px]" animationData={loginLottie}></Lottie>
                </div>
                <div className="card md:w-1/2 max-w-sm shrink-0 items-center shadow-lg shadow-slate-600 py-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Welcome Back,</h1>
                    <h1 className="text-3xl md:text-5xl font-bold">Login Now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0 w-full">
                        <fieldset className="fieldset w-full">

                            <label className="fieldset-label">Email</label>
                            <input {...register("email", { required: true })} type="email" name="email" className="input w-full" placeholder="Email" />
                            {errors.email && <span className="text-red-500">Email is required</span>}

                            <label className="fieldset-label">Password</label>
                            <input {...register("password", {
                                required: 'Password is required',
                            })} type="password" name="password" className="input w-full" placeholder="Password" />
                            {errors.password?.type === 'required' && <span className="text-red-500">{errors.password.message}</span>}

                            <div><Link className="link link-hover">Forgot password?</Link></div>
                            <Button className="btn btn-neutral mt-4">Login</Button>
                        </fieldset>
                        <div className="divider">OR</div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className="mt-3"><small className=''>New to Focus Frame Camp? <Link className='underline text-blue-700' to="/register">Register</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;