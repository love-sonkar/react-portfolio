import React from "react";
import Input from "./Input";
import { Button, Error } from "./utility";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const schema = z.object({
    name: z.string().min(3, { message: "Minimun 3 charecter required" }),
    lastname: z.string().min(3, { message: "Minimum 3 charecter required" }),
    email: z.string().email({ message: "Please enter valid email" }),
    query: z.string().min(10, { message: "minimun 10 word's required" }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="shadow-lg rounded-md p-4 flex-1 w-64 ">
      <h2 className="py-2 text-xl text-baseColor text-center">
        Feel Free To Message
      </h2>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-3 ">
        <div>
          <Input register={register("name")} type="text" title="Name" />
          {errors?.name && <Error>{errors?.name?.message}</Error>}
        </div>
        <div>
          <Input
            register={register("lastname")}
            type="text"
            title="Last Name"
          />
          {errors?.lastname && <Error>{errors?.lastname?.message}</Error>}
        </div>
        <div>
          <Input register={register("email")} type="email" title="Email" />
          {errors?.email && <Error>{errors?.email?.message}</Error>}
        </div>
        <div>
          <textarea
            {...register("query")}
            className="outline-none bg-transparent border-2 border-baseColor rounded-3xl px-3 py-2 text-base w-full resize-none"
            rows="5"
            placeholder="Your Query"
          ></textarea>
          {errors?.query && <Error>{errors?.query?.message}</Error>}
        </div>
        <div>
          <button className="bg-baseColor hover:text-baseColor border-baseColor text-2xl rounded-md  px-8 border-2 py-1  hover:bg-transparent transition-colors text-white  text-center w-full">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
