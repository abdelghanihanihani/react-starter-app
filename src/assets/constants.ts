

export const MOBILE_PATTERN=/^\+971\d{9}$/;
export const DATE_PATTERN=/^\+971\d{9}$/;
// Constants for Navbar and Form
export const NAVBAR_CONSTANTS= {
    AR:'AR',
    EN:'EN',
    CONTACT:'contact'
};

// Constants for Form Validation
export const FORM_CONSTANTS = {
    NAME: "form.fullname",
    NAME_PLACEHOLDER: "form.fullnamePlaceholder",
    NAME_REQUIRED: "form.error.fullnameRequired",
    EMAIL: "form.email",
    EMAIL_PLACEHOLDER:'example@example.com',
    EMAIL_INVALID:'form.error.emailInvalid',
    EMAIL_REQUIRED:'form.error.emailRequired',
    DATE: "form.date",
    DATE_PLACEHOLDER:'DD/MM/YYYY',
    DATE_INVALID:'form.error.dateInvalid',
    DATE_REQUIRED:'form.error.dateRequired',
    MOBILE: "form.mobile",
    MOBILE_PLACEHOLDER:'+971XXXXXXXXX',
    MOBILE_REQUIRED:'form.error.mobileRequired',
    MOBILE_INVALID:'form.error.mobileInvalid',
    MOBILE_PATTERN: MOBILE_PATTERN,
    PASSWORD: "form.password",
    PASSWORD_PLACEHOLDER:'••••••••',
    CONFIRM_PASSWORD: "form.confirmPassword",
    PASSWORD_INVALID:'form.error.passwordInvalid',
    PASSWORD_REQUIRED:'form.error.passwordRequired',
    PHOTO: "form.photo",
    PHOTO_PLACEHOLDER: "form.photoPlaceholder",
    PHOTO_REQUIRED: "form.error.photoRequired",
    PHOTO_LARGE: "form.error.photoLarge",
    PHOTO_INVALID: "form.error.photoInvalid",
    GENDER: "form.gender",
    GENDER_PLACEHOLDER: "form.genderPlaceholder",
    GENDER_MALE: "form.genderMale",
    GENDER_FEMALE: "form.genderFemale",
    GENDER_REQUIRED: "form.error.genderRequired",
    NO_ACCOUNT: "form.no_account",
    HAVE_ACCOUNT: "form.already_have_an_account",
    REGISTER: "form.register",
    LOGIN: "form.login",
    FILE_TYPE: "fileType",
    FILE_SIZE: "fileSize",
    JPEG: "image/jpeg",
    PNG: "image/png"

    // Add more keys as needed
} as const;