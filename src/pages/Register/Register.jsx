import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  FormLabel,
  FormInput,
  Error
} from "../../components/FormContact/FormContact.styled";
import { useDispatch } from "react-redux";

import { registerAuth } from "redux/Auth/operationsAuth";
import { Button, FormGroup } from "@mui/material";
import { FormGroupInput, FormGroupLabel } from "./Register.styled";


const schema = Yup.object().shape({
  name: Yup.string().required("The field Name is required"),
  email: Yup.string().email("Email required").required("Email required"),
  password: Yup.string()
    .required("The field Number is required")
    .min(7, "The number must be at least 7 digits long")
    .max(14, "The number can consist of maximum 14 digits")
});

export default function Register () {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({name, password, email}) => {
    console.log(name, password, email);
    dispatch(registerAuth({name, password, email }))
    reset();
  };

  
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
      <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput type="text" id="name" {...register("name")} />
        {errors.name && <Error> {errors.name?.message}</Error>}
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput type="email" id="email" {...register("email")} />
        {errors.email && <Error> {errors.email?.message}</Error>}
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="password">Password:</FormLabel>
        <FormInput type="password" id="password" {...register("password")} />
        {errors.password && <Error> {errors.password?.message}</Error>}
      </FormGroup>
      <Button variant="contained" color="success" type="submit">
        Register
      </Button>
    </StyledForm>
  );
};
