declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number
    export function getMaxIndex<T>(input: T[], comparator: Comparator<T>): number;
    type Fn = typeof getMaxIndex
    export function getMaxElement<T>(
        input: T[],
        comparator: Comparator<T>
    ):T
    export const getMinIndex: Fn
    export const getMinElement: typeof getMaxElement
    export const getMedianIndex: Fn
    export const getMedianElement: typeof getMaxElement
    export function getAverageValue<T>(
        input: T[],
        fn: (item: T) => number
    ): number
}
