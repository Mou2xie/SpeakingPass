
export function load({ params }) {
    let { lang } = params;
    switch (lang) {
        case 'cn':
            break;
        case 'vn':
            break;
        case 'uz':
            break;
        case 'ru':
            break;
        case 'in':
            break;
        default:
            lang = 'en'
    }
    return {
        lang
    }
}

export const prerender = true;
export const ssr = true;