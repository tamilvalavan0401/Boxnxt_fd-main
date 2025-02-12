import { Link, Navigate, useNavigate } from "react-router-dom";
import back from './../assets/image/back.svg';
import share from './../assets/image/share.svg';
import amount from './../assets/image/500.svg';
import qr from './../assets/image/qr.svg';
import copy from './../assets/image/copy.svg';
import upload from './../assets/image/upload.svg';
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "./Footer";
import { QRCodeCanvas } from "qrcode.react";

const BuyDetails = () => {
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState(); // Example user_id
  const [inputValues, setInputValue] = useState(); // Example user_id
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    const inputValue = localStorage.getItem('inputValue');

    setUserId(user_id)
    setInputValue(inputValue)
  }, [inputValues]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError("File size exceeds 2MB limit.");
      return;
    }

    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("amount", inputValues);
    formData.append("file", file);

    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post(
        "https://voxnxt.vilvabusiness.com/api/stake",
        formData,
        {
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );
      navigate('/');
      window.location.href = '/';
      setMessage("File uploaded successfully: " + response.data.message); // Assuming response contains message
    } catch (error) {
      setError("Error uploading file: " + error.amount);
    } finally {
      setLoading(false);
    }
  };
  console.log("file", file)

  return (
    <div>
      <div className="flex flex-col justify-between h-screen">
        <div>
        
          <section>
            <div className="flex items-center justify-between p-4 h-3.5rem">
              <div className="flex">
                <Link className="flex" to={'/buyfund'}>
                  <img src={back} className="text-primary my-auto" size={24} />
                </Link>
                <p className="text-primary text-base font-semibold ml-4">Fund Details</p>
              </div>
              <div>
                <img src={share} className="text-primary my-auto" size={26} />
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col justify-center items-center my-3 mx-4">
              <div className="text-center mx-auto">
                <p className="text-primary text-[24px] font-semibold">${inputValues}</p>
              </div>

              <div className="mx-2 my-2 bg-gray-500">
                {/* <img src={qr} className="mr-1" /> */}
                <QRCodeCanvas value={inputValues} size={100} className="bg-gray-300" />
                {/* <p>ghjkg</p> */}
              </div>

              <div className="w-full rounded-xl bg-purple-200 flex justify-between items-center py-2 px-2">
                <div>
                  <p className="text-black p-[4px] text-[14px]">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                </div>
                <div>
                  <img src={copy} className="mr-1" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="mx-4 mb-2">
              <div className="flex items-center justify-center my-1">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[200px] border-2 border-fundinputborder border-dashed rounded-lg cursor-pointer bg-fundinput">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <img src={upload} className="" alt="Upload Icon" />
                    <p className="text-sm text-slate-600">{file && (file.name)}</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".pdf, .jpg, .jpeg, .png" // Restrict file types
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <p className="text-[12px] text-neutral-500">Supported Formats: PDF, Image (Max 2MB)</p>
              <div className="text-red-500 font-semibold">
                {error}
              </div>
            </div>
          </section>
        </div>
          
        <div>
          <section>
            <div className="mx-3 mb-[16px]">
              <button onClick={handleSubmit} disabled={loading} className="bg-primary text-white rounded-md h-[48px] text-sm w-full">
                {loading ? <svg
                  className="w-5 h-5 animate-spin mx-auto"
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
                </svg> : "Buy Now"}
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
};

export default BuyDetails;
