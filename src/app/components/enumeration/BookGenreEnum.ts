export enum BookGenre {
    Nonfiction = 0,
    Fantasy = 1,
    SciFi = 2,
    Mystery = 3,
    Romance = 4,
    Horror = 5,
    Historical = 6,
    Realism = 7
}

export namespace BookGenre {
    export function values() {
        return Object.keys(BookGenre).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}