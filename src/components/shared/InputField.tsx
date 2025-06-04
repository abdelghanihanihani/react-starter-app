import React from "react";
import {FieldValues, Path, useForm, UseFormRegister} from "react-hook-form";
import Register from "../register/Register";
import {Trans} from "react-i18next";


interface InputFieldProps<T extends FieldValues> {
    id: keyof T;
    label: string;
    type: string;
    register: UseFormRegister<T>;
    error?: string;
    placeholder?: string;
    inputClassName?: string; // Optional prop for additional classes
    labelClassName?: string; // Optional prop for additional classes

}

const InputField =
    <T extends FieldValues>({
                                id,
                                label,
                                type,
                                register,
                                error,
                                placeholder,
                                inputClassName,
                                labelClassName
                            }: InputFieldProps<T>) => (
        <div className="mb-4">
            <label htmlFor={id as string}
                   className={`block text-sm font-medium text-gray-700 ${labelClassName || " "}`}>
                {label}
            </label>
            <input
                {...
                    register(id as Path<T>)
                }
                type={type}
                id={id as string}
                className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
                } ${inputClassName || ""}`}
                placeholder={placeholder}
            />
            {error && <p className="mt-1 text-sm text-red-500"> {error} </p>}

        </div>

    )


export default InputField;
