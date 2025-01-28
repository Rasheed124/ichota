import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    resume: null,
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const navigate = useNavigate(); 

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitData = new FormData();
    submitData.append("firstName", formData.firstName);
    submitData.append("lastName", formData.lastName);
    submitData.append("email", formData.email);
    submitData.append("phone", `${formData.countryCode}${formData.phone}`);
    if (formData.resume) {
      submitData.append("resume", formData.resume);
    }
    submitData.append("coverLetter", formData.coverLetter);

    try {
      const response = await fetch(
        "https://ichota.onrender.com/api/v1/create",
        {
          method: "POST",
          body: submitData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the application.");
      }

      const result = await response.json();

      console.log(result);

      toast.success("Application submitted successfully!", {
        position: "top-right",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        countryCode: "+1",
        resume: null,
        coverLetter: "",
      });

      setTimeout(() => {
        navigate("/"); 
      }, 2000);

    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
      });
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <>
      <div className="flex flex-col gap-y-10 px-4">
        <h2 className="text-lg font-bold">Personal Information</h2>
        <div className="rounded-lg p-3 lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex gap-y-4 flex-col">
                <label className="font-semibold" htmlFor="firstName">
                  First Name*
                </label>
                <input
                  className="w-full outline-0 border-2 rounded-full border-gray-200 p-3 text-sm"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex gap-y-4 flex-col">
                <label className="font-semibold" htmlFor="lastName">
                  Last Name*
                </label>
                <input
                  className="w-full outline-0 border-2 rounded-full border-gray-200 p-3 text-sm"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex gap-y-4 flex-col">
                <label className="font-semibold" htmlFor="email">
                  Email*
                </label>
                <input
                  className="w-full outline-0 border-2 rounded-full border-gray-200 p-3 text-sm"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex gap-y-4 flex-col">
                <label className="font-semibold" htmlFor="phone">
                  Phone number*
                </label>
                <div className="flex gap-x-2 items-center">
                  <select
                    id="countryCode"
                    name="countryCode"
                    className="outline-0 border-2 rounded-full border-gray-200 p-3 text-sm w-1/3"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+61">+61 (Australia)</option>
                  </select>
                  <input
                    className="w-2/3 outline-0 border-2 rounded-full border-gray-200 p-3 text-sm"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-y-4 flex-col">
              <label className="font-semibold text-lg" htmlFor="resume">
                Supporting Documents
              </label>
              <span className="font-medium block">Resume/CV</span>
              <div className="relative flex-col w-full border-3 border-dashed border-gray-200 rounded-lg p-3 min-h-56 text-sm text-gray-500 flex items-center justify-center cursor-pointer">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".jpg, .jpeg, .png, .pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                {!formData.resume && (
                  <span className="pointer-events-none">
                    <span className="font-bold">Upload a file</span> or drag and
                    drop here
                  </span>
                )}

                {/* Display the uploaded image if it exists */}
                {formData.resume &&
                  formData.resume.type.startsWith("image/") && (
                    <div className="mt-4">
                      <img
                        src={URL.createObjectURL(formData.resume)}
                        alt="Uploaded file preview"
                        className="mt-2 max-w-xs rounded-lg shadow-md"
                      />
                    </div>
                  )}
              </div>
            </div>

            <div className="flex gap-y-4 flex-col">
              <label className="font-semibold" htmlFor="coverLetter">
                Cover letter
              </label>
              <textarea
                className="w-full border-2 resize-none outline-0 rounded-lg border-gray-200 p-3 text-sm"
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Message"
                rows="8"
              ></textarea>
            </div>

            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className={`inline-block rounded-full border border-current px-8 py-3 text-sm font-medium ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#1167B1] text-white transition hover:scale-110 hover:shadow-xl"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Apply"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Application;
