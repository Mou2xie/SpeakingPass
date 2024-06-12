
export const switchLang = (lang) => {
    let textIndex = 0;

    switch (lang) {
        case "en":
            break;
        case "cn":
            textIndex = 1;
            break;
        case "vn":
            textIndex = 2;
            break;
        default:
            textIndex = 0;
    }

    return textIndex
}