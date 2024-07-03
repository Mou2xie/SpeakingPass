
export const switchLang = (lang) => {

    let language = 'en';

    switch (lang) {
        case "en":
            break;
        case "cn":
            language = 'cn';
            break;
        case "vn":
            language = 'vn';
            break;
        case "uz":
            language = 'uz';
            break;
        case "ru":
            language = 'ru';
            break;
        case "in":
            language = 'in';
            break;
        default:
            language = 'en';
    }

    return language
}