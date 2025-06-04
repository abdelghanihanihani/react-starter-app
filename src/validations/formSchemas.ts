import * as yup from 'yup';
import {FORM_CONSTANTS, MOBILE_PATTERN} from "../assets/constants";

const maxFileSize: number = 2; // 2MB
const minPasswordSize: number = 6;
const isFileListOrArray = (value: unknown): value is FileList | File[] => {
    return (
        value instanceof FileList ||
        (Array.isArray(value) && value.length > 0 && value[0] instanceof File)
    );
}
const isValidFileSize = (value: unknown): value is FileList | File[] => {
    return isFileListOrArray(value) && value && value[0] && value[0].size <= maxFileSize * 1024 * 1024;

}
const isValidFileType = (value: unknown): value is FileList | File[] => {
    return isFileListOrArray(value) &&
        value &&
        value[0] &&
        [FORM_CONSTANTS.JPEG.toString(), FORM_CONSTANTS.PNG.toString()].includes(value[0].type);
}

// Login Schema
export const getLoginSchema = (t: (key: string) => string) =>
    yup.object({
        email: yup
            .string()
            .email(t(FORM_CONSTANTS.EMAIL_INVALID))
            .required(t(FORM_CONSTANTS.EMAIL_REQUIRED)),
        password: yup
            .string()
            .min(6, t(FORM_CONSTANTS.PASSWORD_INVALID))
            .required(t(FORM_CONSTANTS.PASSWORD_REQUIRED)),
    });
export const getRegisterSchema = (t: (key: string) => string) =>
    yup.object({
        name: yup.string().required(t(FORM_CONSTANTS.NAME_REQUIRED)),
        email: yup.string().email(t(FORM_CONSTANTS.EMAIL_INVALID)).required(t(FORM_CONSTANTS.EMAIL_REQUIRED)),
        date: yup.string().required(t(FORM_CONSTANTS.DATE_REQUIRED)),
        mobile: yup.string().required(t(FORM_CONSTANTS.MOBILE_INVALID)).matches(MOBILE_PATTERN, t(FORM_CONSTANTS.MOBILE_INVALID)),
        password: yup
            .string()
            .min(minPasswordSize, t(FORM_CONSTANTS.PASSWORD_INVALID))
            .required(t(FORM_CONSTANTS.PASSWORD_REQUIRED)),
        confirmPassword: yup
            .string()
            .min(minPasswordSize, t(FORM_CONSTANTS.PASSWORD_INVALID))
            .required(t(FORM_CONSTANTS.PASSWORD_REQUIRED)),
        file: yup.mixed()
            .required(t(FORM_CONSTANTS.PHOTO_REQUIRED))
            .test(
                FORM_CONSTANTS.FILE_SIZE,
                t(FORM_CONSTANTS.PHOTO_LARGE),
                value => isValidFileSize(value)
            )
            .test(
                FORM_CONSTANTS.FILE_TYPE,
                t(FORM_CONSTANTS.PHOTO_INVALID),
                value => isValidFileType(value)
            ),
        gender: yup
            .string()
            .required(t(FORM_CONSTANTS.GENDER_REQUIRED)),
    }).required();


