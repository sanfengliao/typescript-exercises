declare module 'str-utils' {
    // export const ...
    type Fn = (value: string) => string
    export const strReverse: Fn
    export const strToLower: Fn
    export const strToUpper: Fn
    export const strRandomize: Fn
    export const strInvertCase: Fn
    // export function ...
}
