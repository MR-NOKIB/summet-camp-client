import Lottie from "lottie-react";
import { useForm } from "react-hook-form"
import registerLottie from '../../assets/lottie/register.json';
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Button from "../../Components/Buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Login = () => {
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name, email, password, photo } = data;
        console.log(photo);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                reset();
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                                navigate('/')
                            })
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err))
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="lg:flex lg:items-center lg:justify-center gap-4 p-4 w-full h-full flex-col lg:flex-row-reverse">
                <div className="md:w-1/2">
                    <Lottie className=" md:w-[800px]" animationData={registerLottie}></Lottie>
                </div>
                <div className="card md:w-1/2 max-w-sm shrink-0 items-center shadow-lg shadow-slate-600 py-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Register Now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0 w-full">
                        <fieldset className="fieldset w-full">

                            <label className="fieldset-label">Name</label>
                            <input {...register("name", {
                                required: 'Name is required'
                            })}
                                type="text"
                                name="name"
                                className="input w-full"
                                placeholder="name" />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                            <label className="fieldset-label">Email</label>
                            <input {...register("email", {
                                required: 'Email is required'
                            })}
                                type="email"
                                name="email"
                                className="input w-full"
                                placeholder="Email" />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                            <label className="fieldset-label">Photo URl</label>
                            <input type="url" {...register("photo", {
                                required: 'Photo URL is required'
                            })}
                                name='photo'
                                className="input w-full"
                                placeholder="Photo URL" />
                            {errors.email && <span className='text-red-600'>Photo url is required</span>}

                            <label className="fieldset-label">Password</label>
                            <input {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                                type="password"
                                name="password"
                                className="input w-full"
                                placeholder="Password" />
                            {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 characters or more</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-500">Password can't be more than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-500">Password must contain one uppercase , one lowercase, one digit and one special character</span>}

                            <div> </div>
                            <Button className="btn btn-neutral mt-4">Register</Button>
                        </fieldset>
                        <div className="divider">OR</div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className="mt-3"><small className=''>Already have an account? <Link className='underline text-blue-700 font-bold' to="/login">Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;