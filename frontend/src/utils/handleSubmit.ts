import {type FormEvent } from "react";

export const handleSubmit = (
  e: FormEvent<HTMLFormElement>,
  formData: Record<string, any>
): void => {
  e.preventDefault();
  console.log("Form submitted:", formData);

};
