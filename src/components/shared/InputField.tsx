import React from "react";
import {useForm} from "react-hook-form";
import Register from "../register/Register";

interface IFormInput {
    name: string
    email: string
    mobile: string
    password: string
    confirmpassword: string
}

interface InputFieldProps {
    id: "text" | "email" | "password"
    label: string;
    type: string;
    register: ReturnType<typeof useForm<IFormInput>>['register'];
    error?: string;
    placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = React.memo(
    ({id, label, type, register, error, placeholder}) => (
        <div className = "mb-4" >
        <label htmlFor = {id}
className = "block text-sm font-medium text-gray-700" >
    {label}
    < /label>
    < input
{...
    register(id)
}
type = {type}
id = {id}
className = "mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
placeholder = {placeholder}
/>
{
    error && <p className = "mt-1 text-sm text-red-500" > {error} < /p>}
        < /div>
)
)
    ;

    export default InputField;
