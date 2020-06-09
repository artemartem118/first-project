export type FieldValidator = (value: string | null) => string | undefined

export const required: FieldValidator = (value) => {
    if (value) return undefined
    return 'Field is required'
}
export const maxLength = (num: number): FieldValidator => (value) => {
    if (value && value.length > num) return `Max lenght is ${num} symbols`
    return undefined
}