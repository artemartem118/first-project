export const required = value => {
    if (value) return undefined;
    return "Field is required"
}
export const maxLength = num => value => {
    if (value.length > num) return `Max lenght is ${num} symbols`;
    return undefined;
}