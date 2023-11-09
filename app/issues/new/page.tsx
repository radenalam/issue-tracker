"use client";

import {
  TextFieldInput,
  TextFieldRoot,
  Button,
  TextArea,
  CalloutRoot,
  CalloutText,
} from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("Terjadi Error.");
    }
  };

  return (
    <div className="pl-5 max-w-xl">
      {error && (
        <CalloutRoot className="mb-4" color="red">
          <CalloutText>{error}</CalloutText>
        </CalloutRoot>
      )}

      <form className="  space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <TextFieldRoot>
          <TextFieldInput placeholder="Title" {...register("title")} />
        </TextFieldRoot>
        <TextArea placeholder="Description" {...register("description")} />
        <Button type="submit">Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
