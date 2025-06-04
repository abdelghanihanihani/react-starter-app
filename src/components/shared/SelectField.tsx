import React from "react";
import {FieldValues, Path, UseFormRegister} from "react-hook-form";

interface SelectFieldProps<T extends FieldValues> {
    id: keyof T;
    label: string;
    options: { value: string; label: string }[];
    register: UseFormRegister<T>;
    error?: string;
    placeholder?: string;
    className?: string; // Optional prop for additional classes
}

const SelectField = <T extends FieldValues>({
                                                id,
                                                label,
                                                options,
                                                register,
                                                error,
                                                placeholder,
                                                className,
                                            }: SelectFieldProps<T>) => (
    <div className="mb-4">
        <label htmlFor={id as string} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <select
            {...register(id as Path<T>)}
            id={id as string}
            name={id as string}
            className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm ${
                className || ""
            }`}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
);

export default SelectField;