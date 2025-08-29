import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";
import Spinner from "./Spinner";
import emailjs from '@emailjs/browser';

function ContactForm() {

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const sendEmail  = async (data) => {
        try {
            setLoading(true);

            // EmailJS API call
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );


            if (response.status === 200) {
                alert("✅ Message sent successfully!");
                reset(); // form clear
            } else {
                alert("⚠️ Something went wrong, please try again later.");
            }
        } catch (err) {
            console.error("EmailJS Error:", err);
            alert("❌ Failed to send message. Try again later.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-300 rounded-xl">

            <h2 className="mb-4">Send us a Message</h2>

            <form onSubmit={handleSubmit(sendEmail )} className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col">

                        <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            {...register("name", { required: "Name is required" })}
                            className={`bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"
                                }`}
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}

                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                            })}
                            className={`bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"
                                }`}
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        {...register("subject", { required: "Subject is required" })}
                        className={`bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"
                            }`}
                        placeholder="Enter subject"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        {...register("message", {
                            required: "Message is required",
                            minLength: { value: 10, message: "Message must be at least 10 characters" }
                        })}
                        className={`bg-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"
                            }`}
                        placeholder="Write your message..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {/* Button */}
                <div>

                    <button
                        type="submit"
                        // onClick={handleEmailClick}
                        disabled={loading}
                        className={`w-full flex items-center justify-center gap-3 py-2.5 rounded-lg mb-3 text-sm font-medium cursor-pointer group ${loading
                            ? "bg-gray-500 text-white cursor-not-allowed"
                            : "bg-black text-white"
                            }`}
                    >
                        {loading ? (
                            <>
                                <Spinner size={16} color="white" />
                                Sendding Message...
                            </>
                        ) : (
                            <>
                                <LuSend className="size-4 group-hover:translate-x-32 group-hover:rotate-360 transition-all duration-1000" />
                                Send Message
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
