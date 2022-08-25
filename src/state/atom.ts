import { atom } from "recoil";

export const participantsListState = atom<string[]>({
    key: 'participantsListState',
    default: []
})
export const santaSecretResultState = atom<Map<string,string>>({
    key: 'santaSecretResultState',
    default: new Map()
})

export const errorState = atom<string>({
    key: 'errorState',
    default: ''
})