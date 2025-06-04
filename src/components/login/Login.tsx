import React, {useEffect, useMemo} from 'react';
import {useForm, SubmitHandler, FieldValues} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {getLoginSchema} from "../../validations/formSchemas";
import InputField from "../shared/InputField";
import {FORM_CONSTANTS} from "../../assets/constants";

// Types
interface ILoginInput {
    email: string;
    password: string;
}

// Validation Schema
const useLoginSchema = (t: (key: string) => string) =>
    useMemo(() => getLoginSchema(t), [t]);


const Login: React.FC = () => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const schema = useLoginSchema(t);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<ILoginInput>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<ILoginInput> = (data) => {
        console.log('Login data:', data);
    };

    const handleNavigateToRegister = () => navigate('/register');

    useEffect(() => {
        reset();
    }, [i18n.language, reset]);

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800">{t(FORM_CONSTANTS.LOGIN)}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <InputField<ILoginInput>
                        id="email"
                        label={t(FORM_CONSTANTS.EMAIL)}
                        type="email"
                        register={register}
                        error={errors.email?.message}
                        placeholder={FORM_CONSTANTS.EMAIL_PLACEHOLDER}
                    />
                    <InputField<ILoginInput>
                        id="password"
                        label={t(FORM_CONSTANTS.PASSWORD)}
                        type="password"
                        register={register}
                        error={errors.password?.message}
                        placeholder={FORM_CONSTANTS.PASSWORD_PLACEHOLDER}
                    />
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {t(FORM_CONSTANTS.LOGIN)}
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    {t(FORM_CONSTANTS.NO_ACCOUNT)}
                    <button
                        type="button"
                        onClick={handleNavigateToRegister}
                        className="text-blue-600 hover:underline"
                    >
                        {t(FORM_CONSTANTS.REGISTER)}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;