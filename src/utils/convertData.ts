export const objectToUrlParams = (obj: { [key: string]: any }) => {
    const params = [];
    for (const key in obj) {
        if (
            Object.prototype.hasOwnProperty.call(obj, key) &&
            obj[key] !== null &&
            obj[key] !== undefined &&
            obj[key] !== ''
        ) {
            params.push(
                `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`,
            );
        }
    }
    return params.join('&');
};