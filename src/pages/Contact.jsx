import React from 'react'
import { LuMessageCircle, LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import ContactForm from '../components/ContactForm';
import QuestionCard from '../components/QuestionCard';

function Contact() {

  const handleEmailClick = () => {
    const email = "devendrabaghel0220@gmail.com";
    const subject = "Support Request";
    const body = "Hi, I need help with...";

    // Gmail web link
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, "_blank");
  };




  return (
    <div>
      <section className='max-w-[1380px] w-full mx-auto flex flex-col justify-center items-center px-4 pt-6 pb-14 md:py-14 space-y-2'>

        <div className='text-center space-y-3 max-w-xl'>
          <h2 className='text-2xl font-medium'>Contact Us</h2>

          <p className='text-gray-500 text-base md:text-lg'>Have a question, suggestion, or just want to say hello? We'd love to hear from you.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>

          <div className='space-y-8'>

            <h3 className='mb-6 text-2xl'>Get in Touch</h3>

            {/* Email  */}
            <div className='flex gap-5'>

              <div className='bg-gray-100 h-11 w-11 flex items-center justify-center rounded-lg'>
                <LuMail size={20} />
              </div>

              <div className='space-y-1'>
                <p className='text-sm'>Email Us</p>
                <p className='text-sm'>devendrabaghel0220@gmail.com</p>
                <p className='text-xs text-gray-500'>Send us an email and we'll respond within 24 hours.</p>
              </div>
            </div>

            {/* Phone  */}
            <div className='flex gap-5'>

              <div className='bg-gray-100 h-11 w-11 flex items-center justify-center rounded-lg'>
                <FiPhone size={20} />
              </div>

              <div className='space-y-1'>
                <p className='text-sm'>Call Us</p>
                <p className='text-sm'>+919630840725</p>
                <p className='text-xs text-gray-500'>Available Monday-Friday, 9AM-6PM IST.</p>
              </div>
            </div>

            {/* Location  */}
            <div className='flex gap-5'>

              <div className='bg-gray-100 h-11 w-11 flex items-center justify-center rounded-lg'>
                <GrLocation size={20} />
              </div>

              <div className='space-y-1'>
                <p className='text-sm'>Visit Us</p>
                <p className='text-sm'>123 Recipe Street, Madhya Pradesh, India</p>
                <p className='text-xs text-gray-500'>Our headquarters in the heart of the city.</p>
              </div>
            </div>

            {/* Quick Response  */}
            <div className='space-y-3 rounded-lg bg-gray-100 p-6'>

              <div className='flex items-center gap-2'>
                <LuMessageCircle size={20} />
                <p className='text-sm'>Quick Response</p>
              </div>

              <p className='text-xs text-gray-500'>We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.</p>

            </div>

          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className='max-w-[1380px] w-full mx-auto flex flex-col justify-center items-center px-4 mb-14 space-y-2'>

        <div className='text-center space-y-3 max-w-xl mb-12'>
          <h2 className='text-2xl font-medium'>Frequently Asked Questions</h2>

          <p className='text-gray-500 text-sm'>Find answers to common questions about Recipe Finder.</p>
        </div>

        <div className='grid grid-cols-1 gap-4'>
          <QuestionCard
            question={"How do I save my favorite recipes?"}
            answer={"Simply click the heart icon on any recipe card to add it to your favorites. Your favorites are saved locally in your browser."}
          />

          <QuestionCard
            question={"Can I submit my own recipes?"}
            answer={"We're working on a feature that will allow users to submit their own recipes. Stay tuned for updates!"}
          />

          <QuestionCard
            question={"Are the recipes free to use?"}
            answer={"Yes! All recipes on Recipe Finder are completely free to view, save, and cook."}
          />

          <QuestionCard
            question={"How accurate are the cooking times?"}
            answer={"Our cooking times are estimates based on average cooking conditions. Times may vary depending on your equipment and experience."}
          />
        </div>

      </section>

      <section className='bg-black text-white'>

        <div className='max-w-2xl w-full mx-auto flex flex-col justify-center items-center text-center py-14 space-y-4'>

          <h3 className='text-2xl font-medium'>Still Have Questions?</h3>

          <p className='text-lg text-gray-300'>Don't hesitate to reach out. We're here to help make your cooking journey amazing.</p>

          <button
            type="button"
            onClick={handleEmailClick}
            className='flex items-center gap-3 px-4 py-2.5 bg-gray-100 text-black text-xs font-medium rounded-lg mt-6 hover:bg-gray-300 duration-300 cursor-pointer'
          >
            <LuMail size={15} />
            Email Us Directly
          </button>

        </div>
      </section>

    </div>
  )
}

export default Contact
