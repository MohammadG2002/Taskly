import { type FormEvent } from "react";

const handleSubmit = (
  e: FormEvent<HTMLFormElement>,
  formData: Record<string, any>
): void => {
  e.preventDefault();
  console.log("Form submitted:", formData);
};

export default handleSubmit;
