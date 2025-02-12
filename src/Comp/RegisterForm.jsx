import { useEffect, useState } from 'react';
import { RiEye2Line, RiEyeCloseFill } from 'react-icons/ri';
import endpoints from '../../ApiKeys';
import logo from '/booknxt.svg';
import axios from 'axios';
import logoprimary from "./../assets/image/logoprimary.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function RegisterForm() {
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);


    const [formData, setFormData] = useState({
       email: "",
        password: "",
        verification_code:"",
        referral_id:""
    });
    let valid = true;
    const [error, setError] = useState({
        email: "",
        password: "",
        verification_code:"",
        referral_id:""
    });

    const [serverErrors, setServerErrors] = useState({
        email: "",
        password: "",
        verification_code:"",
        referral_id:""
    });

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate();
    const validateFields = () => {
        let valid = true;
        let errors = {
            email: "",
            password: "",
            verification_code:"",
            referral_id:""
        };

       

        // Email validation (basic format check)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address.';
            valid = false;
        }


        // Password validation
        if (!formData.password) {
            errors.password = 'Password is required.';
            valid = false;
        } else if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters.';
            valid = false;
        }
        if (!isChecked) {
            errors.checkbox = 'You must agree to the Terms & Conditions.';
            valid = false;
        }

        setError(errors);
        return valid;
    };




  // Handle the OTP request
  const handleRequestOtp = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Start loading when the request is triggered
    setLoading(true);

    // Validate fields before proceeding
    if (!validateFields()) {
      setLoading(false); // Stop loading if validation fails
      return; // Don't proceed if validation fails
    }

    try {
      const response = await axios.post(
        endpoints.requestotp,
        {
          email: formData.email, // Send email from formData
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Response:', response.data);
      toast.success('OTP request successful!');
      // Optionally, navigate to another page or show further instructions
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false); // Stop loading when done
    }
  };



    const handleRegister = async (e) => {
        e.preventDefault();
    
        // Start loading when form is submitted
        setLoading(true);
    
        // Validate fields before proceeding
        if (!validateFields()) {
            setLoading(false); // Stop loading if validation fails
            return; // Don't submit if validation fails
        }
    
        try {
            const res = await axios.post(
                endpoints.register,
                formData,
                { headers: { 'Content-Type': 'application/json' } }
            );
            toast.success('Registration successful!');
            navigate('/login');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                // Capture server-side validation errors
                setServerErrors(err.response.data.errors || {});
            } else {
                toast.error('Registration failed. Please check your details and try again.');
            }
        } finally {
            // Ensure loader is stopped regardless of success or failure
            setLoading(false);
        }
    };
    


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleRegister} action="#" method="POST" className="mx-10 min-h-screen flex flex-col justify-between h-full py-[16px] ">
            
                <div>
                    <div className='flex justify-start mb-6'>
                        {/* <RiMoneyRupeeCircleFill className='text-primary' size={23} /> */}
                        {/* <img src={logo} alt="" /> */}
                        <img src={logoprimary} alt="" className="w-10" />
                        {/* <h6 className='text-primary text-[18px] ml-1 font-bold font-Crimson heading'>BOOKNXT</h6> */}
                    </div>


                    {/* Email Field */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-medium mb-1 text-primary lab">EMAIL</label>
                        </div>
                        <div className="mb-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <input
                                type="text"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Please enter email"
                                className="block w-full h-[51px] px-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-primary focus:bg-white caret-primary"
                            />
                            {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
                            {serverErrors.email && serverErrors.email.map((error, index) => (
                                <div key={index} className="text-red-500 text-sm">{error}</div>
                            ))}
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-medium  mb-1 text-primary lab">PASSWORD</label>
                        </div>
                        <div className="mb-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Minimum 8 digits"
                                className="block w-full h-[51px] px-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-primary focus:bg-white caret-primary"
                            />
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <RiEye2Line /> : <RiEyeCloseFill />}
                            </div>
                            {error.password && <p className="text-red-500 text-xs">{error.password}</p>}
                            {serverErrors.password && serverErrors.password.map((error, index) => (
                                <div key={index} className="text-red-500 text-sm">{error}</div>
                            ))}
                        </div>
                    </div>

                    {/* VERIFICATION CODE */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-medium text-primary mb-1 text-primary lab">VERIFICATION CODE</label>
                        </div>
                        <div className="mb-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <input
                                name="verification_code"
                                required
                                value={formData.verification_code}
                                onChange={handleInputChange}
                                placeholder="000 000"
                                className="block w-full h-[51px] px-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-primary focus:bg-white caret-primary"
                                
                            />
                            <button className='absolute top-3.5 right-3 text-primary font-semibold text-[14px] cursor-pointer' onClick={handleRequestOtp}>Resend Code</button>
                            {error.verification_code && <p className="text-red-500 text-xs">{error.verification_code}</p>}
                            {serverErrors.verification_code && serverErrors.verification_code.map((error, index) => (
                                <div key={index} className="text-red-500 text-sm">{error}</div>
                            ))}
                        </div>
                    </div>

                    

                    <div>   
   
                        <div>
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-medium mb-1 text-primary lab">INVITAION CODE [OPTIONAL]</label>
                        </div>
                        <div className="mb-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <input
                                name="referral_id"
                                value={formData.referral_id}
                                onChange={handleInputChange}
                                placeholder="m27eqp4g"
                                className="block w-full h-[51px] px-4 pl-4 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-primary focus:bg-white caret-primary"
                            />
                            
                        </div>
                        {serverErrors.referral_id && serverErrors.referral_id.map((error, index) => (
                                <div key={index} className="text-red-500 text-sm">{error}</div>
                            ))}
                    </div>
                    </div>


                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                    
                </div>
                <div>

                    {/* Submit Button */}
                    <div>
                        <div className='flex justify-start'>
                            <input type="checkbox"
                                className="mx-1"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label className="text-sm font-medium text-gray-900">I agree with the <a className='text-primary' href="">Terms & Conditions</a></label>
                        </div>
                        {error.checkbox && <p className="text-red-500 text-xs">{error.checkbox}</p>}
                        <button  disabled={loading}
                            type="submit"
                            className="inline-flex mt-2 items-center justify-center w-full h-[48px] text-sm font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r bg-primary focus:outline-none hover:opacity-90 cursor-pointer focus:opacity-80"
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
        'Next'
    )}
                        </button>
                        <div className='flex justify-center items-center w-full'>
                            <p className="text-xs font-medium  mb-1 lab text-center">Already have an account ? <a className='text-primary' href="/login">Login</a> </p>
                        </div>
                    </div>

                </div>
            
        </form>
    );
}

export default RegisterForm;
