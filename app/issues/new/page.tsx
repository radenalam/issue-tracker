"use client";

import { TextFieldInput, TextFieldRoot, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl pl-5 space-y-2">
      <TextFieldRoot>
        <TextFieldInput placeholder="Title" />
      </TextFieldRoot>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
