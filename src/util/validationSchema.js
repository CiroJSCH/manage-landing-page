import * as yup from "yup";

export const EmailSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("This field is required"),
});

export const SearchSchema = yup.object({
  search: yup
    .string()
    .required("This field is required")
    .transform((value) => value.trim()),
});
