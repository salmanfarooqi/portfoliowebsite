"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../Input";
import Button from "../Button";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const schema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    const { firstName, lastName, email, subject, message } = data;
    try {
      console.log("Sending email with data: ", data);
      const templateParams = {
        firstName,
        lastName,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ""
      );

      toast.success("Message sent successfully");
      reset();
    } catch (e) {
      console.log("Error sending email: ", e);
      toast.error("Error sending message");
    }
  };

  return (
    <div className="flex flex-col mb-10 sm:my-20 bg-gradient-to-br from-blue-100 to-green-100 p-2 sm:p-6 rounded-lg shadow-lg">
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 my-2">Let Design Together</h1>
        <ToastContainer />
        <div className="flex items-center justify-center">
          <FaMapMarkerAlt className="text-white w-10 h-10 p-2 bg-cyan-200 hover:text-gray-200" />

<p className="text-xs">G-15 Main Markaz, Islamabad, Pakistan</p>
</div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 mt-6">
        <div className="w-full bg-white rounded-lg shadow-md px-2 sm:p-6">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col">
                <label className="text-gray-700">First Name</label>
                <Input
                  inputClassName="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
                  className={`pb-2 border-b-2 ${
                    errors?.firstName ? " border-red-400" : "border-gray-300"
                  }`}
                  type="text"
                  name="firstName"
                  errors={errors}
                  placeholder="John"
                  register={register}
                />
              </div>
              <div className="w-full flex flex-col">
                <label className="text-gray-700">Last Name</label>
                <Input
                  inputClassName="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
                  className={`pb-2 border-b-2 ${
                    errors?.lastName ? " border-red-400" : "border-gray-300"
                  }`}
                  type="text"
                  name="lastName"
                  errors={errors}
                  placeholder="Doe"
                  register={register}
                />
              </div>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="w-full flex flex-col">
                <label className="text-gray-700">Email</label>
                <Input
                  inputClassName="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
                  className={`pb-2 border-b-2 ${
                    errors?.email ? " border-red-400" : "border-gray-300"
                  }`}
                  type="email"
                  name="email"
                  errors={errors}
                  placeholder="example@gmail.com"
                  register={register}
                />
              </div>
              <div className="w-full flex flex-col">
                <label className="text-gray-700">Subject</label>
                <Input
                  inputClassName="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
                  className={`pb-2 border-b-2 ${
                    errors?.subject ? " border-red-400" : "border-gray-300"
                  }`}
                  type="text"
                  name="subject"
                  errors={errors}
                  placeholder="Enter Subject"
                  register={register}
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <label className="text-gray-700">Message</label>
              <textarea

               id="scroll-1"
                className={  `bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 border-b-2 resize-none ${
                  errors?.message ? " border-red-400" : "border-gray-300"
                }`}
                placeholder="Write your message.."
                {...register("message")}
              ></textarea>
              {errors.message && (
                <span className="text-red-400 text-sm ">{errors.message.message}</span>
              )}
            </div>
            <div className="w-full flex justify-end mt-4">
              <Button
                type="submit"
                className="bg-primary text-white text-lg rounded-md h-12 w-48 transition-transform transform hover:scale-105"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
