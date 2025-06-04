import React, {useEffect, useMemo, useState} from 'react';

import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useTranslation} from 'react-i18next';
import {FORM_CONSTANTS} from "../../assets/constants";
import {useNavigate} from "react-router-dom";
import {getRegisterSchema} from "../../validations/formSchemas";
import InputField from "../shared/InputField";
import SelectField from "../shared/SelectField";

interface IFormInput {
    name: string
    email: string
    date: string
    mobile: string
    password: string
    confirmPassword: string
    file: any
    gender: string

}

// Validation Schema
const useRegisterSchema = (t: (key: string) => string) =>
    useMemo(() => getRegisterSchema(t), [t]);
const Register: React.FC = () => {
    const navigate = useNavigate();

    const {t, i18n} = useTranslation();
    const schema = useRegisterSchema(t);


    const {register, handleSubmit, formState: {errors, dirtyFields}, reset, watch,} = useForm<IFormInput>(
        {
            defaultValues: {
                name: '',
                email: '',
                date: '',
                mobile: '',
                password: '',
                confirmPassword: '',
                file: null as unknown as FileList, // Initialize as null or empty FileList
                gender: '',

            },
            mode: "onChange",
            resolver: yupResolver(schema),
        }
    )
    const handleNavigateToLogin = () => {
        navigate("/")
    }
    useEffect(() => {
        reset()
    }, [i18n.language, reset]);
    const watchFile = watch("file");
    const [image, setImage] = useState(null as string | null);
    const convertBase64 = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result as string);
        }
        reader.readAsDataURL(file);
    }
    useEffect(() => {
        if (errors.file || !watchFile || watchFile.length === 0) {
            setImage('');
            return;
        }
        convertBase64(watchFile[0]);
    }, [watchFile, errors.file]);


    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("data : ", data)
        if (!data.file || data.file.length === 0) {
            return;
        }
        const file = data.file[0];
    }

    return (
        <div className="pt-10 bg-gray-100 flex items-center justify-center min-h-screen">

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800">  {t(FORM_CONSTANTS.REGISTER)}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <InputField<IFormInput>
                        id="name"
                        label={t(FORM_CONSTANTS.NAME)}
                        type="text"
                        register={register}
                        error={errors.name?.message}
                        placeholder={t(FORM_CONSTANTS.NAME_PLACEHOLDER)}
                    />
                    <InputField<IFormInput>
                        id="email"
                        label={t(FORM_CONSTANTS.EMAIL)}
                        type="email"
                        register={register}
                        error={errors.email?.message}
                        placeholder={FORM_CONSTANTS.EMAIL_PLACEHOLDER}

                    />
                    <InputField<IFormInput>
                        id="date"
                        label={t(FORM_CONSTANTS.DATE)}
                        type="date"
                        register={register}
                        error={errors.date?.message}
                        placeholder={FORM_CONSTANTS.DATE_PLACEHOLDER}
                        inputClassName={i18n.language === 'ar' ? 'text-right' : 'text-left'}

                    />
                    <InputField<IFormInput>
                        id="mobile"
                        label={t(FORM_CONSTANTS.MOBILE)}
                        type="text"
                        register={register}
                        error={errors.mobile?.message}
                        placeholder={FORM_CONSTANTS.MOBILE_PLACEHOLDER}
                    />
                    <InputField<IFormInput>
                        id="password"
                        label={t(FORM_CONSTANTS.PASSWORD)}
                        type="password"
                        register={register}
                        error={errors.password?.message}
                        placeholder={FORM_CONSTANTS.PASSWORD_PLACEHOLDER}/>
                    <InputField<IFormInput>
                        id="confirmPassword"
                        label={t(FORM_CONSTANTS.CONFIRM_PASSWORD)}
                        type="password"
                        register={register}
                        error={errors.confirmPassword?.message}
                        placeholder={FORM_CONSTANTS.PASSWORD_PLACEHOLDER}/>
                    <SelectField<IFormInput>
                        id="gender"
                        label={t(FORM_CONSTANTS.GENDER)}
                        options={[
                            {value: "m", label: t(FORM_CONSTANTS.GENDER_MALE)},
                            {value: "f", label: t(FORM_CONSTANTS.GENDER_FEMALE)},
                        ]}
                        register={register}
                        error={errors.gender?.message}
                        placeholder={t(FORM_CONSTANTS.GENDER_PLACEHOLDER)}
                    />
                    <InputField<IFormInput>
                        id="file"
                        label={t(FORM_CONSTANTS.PHOTO_PLACEHOLDER)}
                        type="file"
                        register={register}
                        error={errors.file?.message as string}
                        placeholder={t(FORM_CONSTANTS.PHOTO_PLACEHOLDER)}
                        inputClassName="hidden"

                    />
                    <div className="mb-4">
                        {dirtyFields.file && !errors.file && image && <img
                            className="inline-block h-20 w-20 ring-2 ring-white"
                            src={image}
                            alt="User avatar"
                        />}
                    </div>
                    <div className="mt-6">
                        <button type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            {t(FORM_CONSTANTS.REGISTER)}
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    {t(FORM_CONSTANTS.HAVE_ACCOUNT)}
                    <button type="button" onClick={handleNavigateToLogin}
                            className="text-blue-600 hover:underline">{t(FORM_CONSTANTS.LOGIN)}
                    </button>
                </p>
            </div>
            {/*<DevTool control={control}/> */}

        </div>
    );
}

export default Register;
