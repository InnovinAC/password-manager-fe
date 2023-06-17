import create from "zustand"
import {AUTH_TOKEN_NAME} from "../constants/AppConstants.ts";

interface IAuthStore {
    token: any,
    setToken: any,
    deleteToken: () => any
}

const useAuthStore = create<IAuthStore>((set) => ({
    token: '',
    setToken: (token: string) => {
        localStorage.setItem(AUTH_TOKEN_NAME, token);
        set(() => ({
            token
        }))

    } ,
    deleteToken: () => {
        localStorage.removeItem(AUTH_TOKEN_NAME);
        set(() => ({
            token: ''
        }))
    }

}))

