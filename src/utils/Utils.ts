export const convertBase64 = (file: File, onLoadEnd: any) => {
    const reader = new FileReader();
    reader.onloadend = onLoadEnd
    reader.readAsDataURL(file);
}