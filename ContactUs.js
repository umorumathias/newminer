import React from "react";
import Header from "../common/Header";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto px-3">
      <div className="h-screen">
        <div className="py-3">
          <Header />
        </div>
        <div className="w-full md:w-1/2 border mx-auto p-8 bg-white rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="mb-2 inline-block text-lg" htmlFor="first-name">
                Enter your first name <span className="text-red-500">*</span>
              </label>
              <input
                className="input-main w-full mb-3 rounded"
                id="first-name"
                placeholder="First Name"
                {...register("firstName", { required: true, maxLength: 20 })}
              />
            </div>
            <div>
              <label className="mb-2 inline-block text-lg" htmlFor="last-name">
                Enter your last name <span className="text-red-500">*</span>
              </label>
              <input
                className="input-main w-full mb-3 rounded"
                id="last-name"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
            </div>
            <div>
              <label className="mb-2 inline-block text-lg" htmlFor="email">
                Enter your email address <span className="text-red-500">*</span>
              </label>
              <input
                className="input-main w-full mb-3 rounded"
                id="email"
                type="mail"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label className="mb-2 inline-block text-lg" htmlFor="message">
                Enter your message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="message-box w-full mb-3 rounded"
                placeholder="Message"
                name=""
                id="message"
                cols="30"
                rows="8"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <input className="btn-border-orange" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
