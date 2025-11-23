import { type ChangeEvent } from "react";

const handleChange = (
  e: ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<any>>
): void => {
  const { name, value } = e.currentTarget;
  setFormData((prev: any) => ({
    ...prev,
    [name]: value,
  }));
};

export default handleChange;
