import { create, StoreApi, UseBoundStore } from 'zustand'

export interface IRaw {
    id: string
    code: string
    description: string
    price: number
}

export interface IState {
    data: IRaw[]
    select: string[]
    url: string
    isOnline: boolean,
    isInit: boolean
    raw: IRaw
    setRaw: (payload: Partial<IRaw>) => void
    setSelected: (payload: string) => void
    setResetSelected: () => void
    setData: (payload: IRaw[]) => void
    setUrl: (payload: string) => void
    setIsOnline: (payload: boolean) => void
    setInit: (payload: boolean) => void
    setReset: () => void
}

const store: UseBoundStore<StoreApi<IState>> = create<IState>((set) => ({
    select: [],
    data: [],
    isOnline: false,
    isInit: false,
    url: "http://192.168.1.37:8080/api",
    raw: {
        id: "",
        code: "",
        description: "",
        price: 0,
    },
    setRaw: (payload: Partial<IRaw>) => set(prev => ({ raw: { ...prev.raw, ...payload } })),
    setResetSelected: () => set({ select: [] }),
    setReset: () => set({
        select: [],
        data: [],
        isOnline: false,
        isInit: false,
        url: "http://192.168.1.37:8080/api",
    }),
    setUrl: (payload: string) => set({ url: payload }),
    setIsOnline: (payload: boolean) => set({ isOnline: payload }),
    setInit: (payload: boolean) => set({ isInit: payload }),
    setData: (payload: IRaw[]) => set({ data: payload }),
    setSelected: (payload: string) => set((prev: IState) => {

        let raw_select: string[] = prev.select

        const match: boolean = raw_select.some(el => el === payload)

        if (match) {

            raw_select = raw_select.filter(el => el !== payload)

        } else {

            raw_select = raw_select.concat(payload)
        }

        return { select: raw_select }
    }),
}))

export default store