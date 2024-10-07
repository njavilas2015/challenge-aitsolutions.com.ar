import { create, StoreApi, UseBoundStore } from 'zustand'

export interface IState {
    step: "create" | "download" | "home" | "upload" | "settings" | "update"
    page: 'settings' | 'app'
    setStep: (payload: IState['step']) => void
    setPage: (payload: IState['page']) => void
}

const store: UseBoundStore<StoreApi<IState>> = create<IState>((set) => ({
    step: "home",
    page: "settings",
    setStep: (payload: IState['step']) => set({ step: payload }),
    setPage: (payload: IState['page']) => set({ page: payload }),
}))

export default store