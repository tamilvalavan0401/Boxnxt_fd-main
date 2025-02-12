import { useState } from "react";
import { RiEye2Line, RiEyeCloseFill, RiMoneyRupeeCircleFill } from "react-icons/ri";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import endpoints from "../../ApiKeys";
import logoprimary from "./../assets/image/logoprimary.png";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [serverErrors, setServerErrors] = useState({
        username: '',
        password: '',
    });
    // Validation Handlers
    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUserName(value);
        setIsValidUsername(value.trim() !== "");
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setIsValidPassword(value.length >= 8);
    };

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
    
        // Set loading state
        setLoading(true);
    
        // Revalidate before submission
        setIsValidUsername(username.trim() !== "");
        setIsValidPassword(password.length >= 8);
    
        if (!username.trim() || password.length < 8) {
            toast.error("Please fix the errors before submitting.");
            setLoading(false); // Stop loading if validation fails
            return;
        }
    
        try {
            const response = await axios.post(
                endpoints.login,
                { username, password },
                { headers: { "Content-Type": "application/json" } }
            );
            toast.success("Login successful!");
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('user_email', response.data.data.user.email);
            localStorage.setItem('user_id', response.data.data.user.id);
            localStorage.setItem('referral_id', response.data.data.user.referral_id);
            localStorage.setItem('a_wallet', response.data.data.user.a_wallet);
            localStorage.setItem('b_wallet', response.data.data.user.b_wallet);
            navigate('/');
            // console.log(response.data.data);
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                // Capture server-side validation errors
                setServerErrors(err.response.data.errors || {});
            } else {
                toast.error('Registration failed. Please check your details and try again.');
            }
        } finally {
            setLoading(false); // Stop loading after the function completes
        }
    };
    

    return (
        <form action="#" method="POST" className="flex justify-center h-screen">
            <div className="space-y-3 flex flex-col justify-around">

                <div>

                    <div>
                        <div className="flex justify-start mb-6">
                            {/* <RiMoneyRupeeCircleFill className="text-primary" size={23} /> */}
                            <img src={logoprimary} alt="" className="w-10" />
                            {/* <h6 className="text-primary font-bold font-Crimson heading">BOOKNXT</h6> */}
                        </div>

                        {/* Email Field */}
                        <div>
                            <p className="reg_text">Login</p>
                            <div className="flex justify-start">
                                <label className="text-xs font-medium text-primary mb-1 text-primary lab">USER NAME</label>
                            </div>
                            <div className="mb-2.5 relative">
                                <input
                                    type="email"
                                    required
                                    value={username}
                                    onChange={handleUsernameChange}
                                    placeholder="Please enter Username"
                                    className={`block w-full py-2 px-4 text-black placeholder-gray-500 border rounded-md bg-gray-50 focus:outline-none focus:border-primary focus:bg-white caret-primary ${!isValidUsername ? "border-red-500" : "border-gray-200"
                                        }`}
                                />
                                {serverErrors.username && serverErrors.username.map((error, index) => (
                                    <div key={index} className="text-red-500 text-sm">{error}</div>
                                ))}
                                {!isValidUsername && <p className="text-red-500 text-xs mt-1">Username is required.</p>}
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-medium text-primary mb-1 text-primary lab">PASSWORD</label>
                            </div>
                            <div className="mb-2.5 relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Minimum 8 characters"
                                    className={`block w-full py-2 pl-4 pr-12 text-black placeholder-gray-500 border rounded-md bg-gray-50 focus:outline-none focus:border-primary focus:bg-white caret-primary ${!isValidPassword ? "border-red-500" : "border-gray-200"
                                        }`}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center text-gray-400 pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RiEye2Line /> : <RiEyeCloseFill />}
                                </div>
                            </div>
                            {!isValidPassword && <p className="text-red-500 text-xsmt-1">Password must be at least 8 characters long.</p>}
                        </div>

                        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} theme="light" />

                        {/* Register Link */}
                        <div className="flex justify-center pt-10 items-center w-full">
                            <p className="text-xs font-medium text-center">
                                Don't have an account? <a className="text-primary" href="/register">Create an account</a>
                            </p>
                        </div>
                    </div>

                </div>

                {/* Terms & Conditions and Submit Button */}
                <div>

                    <div>
                        <button disabled={loading}
                            type="button"
                            onClick={handleLogin}
                            className="inline-flex mt-2 items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white transition-all duration-200 cursor-pointer rounded-md bg-gradient-to-r from-primary to-primary hover:opacity-80"
                        >
            {loading ? (
            <svg
                className="w-5 h-5 animate-spin mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="none"
                    d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
                ></path>
            </svg>
        ) : (
            'Login'
        )}
                        </button>
                    </div>

                </div>
                
            </div>
        </form>
    );
}

export default LoginForm;
