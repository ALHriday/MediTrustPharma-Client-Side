import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";


const Login = () => {
    const { signInWithGoogle, setUser, signInWithEmailAndPassWord, errorMessage, setErrorMessage, showPass, togglePassword } = useAuth();

    const navigate = useNavigate();
    const showPassRef = useRef();

    const handleGoogleSignIn = () => {

        signInWithGoogle()
            .then(result => {
                if (result.user) {
                    const user = result.user;

                    const userName = user.displayName;
                    const userEmail = user.email;
                    const photoURL = user.photoURL;

                    const userInfo = { userName, userEmail, photoURL, role: 'user', status: '', sellerEmail: '', sellerName: '' };

                    axios.post(`https://medi-trust-pharma-server.vercel.app/users`, userInfo).then(res => {
                        if (res.data.insertedId) {
                            return res.data;
                        }
                    })

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "LogIn Successful",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setUser(result.user)
                    navigate('/')
                }
            }
            ).catch(error => error)
    }

    const handleSignInUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassWord(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "LogIn Successful",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setUser(result.user);
                    form.email.value = '';
                    form.password.value = '';
                    navigate('/');
                    setErrorMessage('');
                }

            }
            ).catch(() => setErrorMessage('Invalid Email or Password'))
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        <p className="py-6">Log in now to access your account and explore more!</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignInUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"
                                    placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={showPassRef} type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <p onClick={() => togglePassword(showPassRef)} className="absolute top-[45%] right-[5%]">
                                    {showPass ? <FaEye /> : <FaEyeSlash />}

                                </p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className="mt-1 text-center text-red-500">{errorMessage}</p>
                                <p className="mt-2 text-slate-400 text-center">{`Don't have an account`} <Link className="btn-link" to='/register'>Register</Link></p>

                            </div>
                        </form>
                        <div className="mb-3 flex justify-center items-center mx-8">
                            <button className="flex justify-center items-center gap-1 btn btn-primary text-center text-sm w-full" onClick={handleGoogleSignIn}><div className="w-7">
                                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />
                            </div>SignInWithGoogle</button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;