import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/response/IUser";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";

export default class Store {
    user = {} as IUser
    isAuth = false
    isLoading = false

    isAuthPage = false
    isMainPage = false
    isExpensePage = false


    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: IUser) {
        this.user = user
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setAuthPage(bool: boolean) {
        this.isAuthPage = bool;
    }

    setMainPage(bool: boolean) {
        this.isMainPage = bool;
        this.isAuthPage = bool;
    }

    switchPage(bool: boolean) {
        this.isMainPage = bool;
        this.isExpensePage = !bool;
    }

    async postIncome(category: string, title: string, amount: number) {
        try {
            const response = await UserService.postIncome(category, title, amount)
            console.log(response)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async postExpense(category: string, title: string, amount: number) {
        try {
            const response = await UserService.postExpense(category, title, amount)
            console.log(response)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
        finally {
            this.isAuthPage = false;
            this.isMainPage = true;
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
            this.isExpensePage = false
            this.isMainPage = false
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

        } catch (e) {
            console.log(e.response?.data?.message)
        }
        finally {
            this.setLoading(false)
        }
    }

    async goToAuth() {
        this.setLoading(true)
        try {
            this.setAuthPage(true)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
        finally {
            this.setLoading(false)
        }
    }

    async goToExpenses() {
        this.setLoading(true)
        try {
            this.switchPage(false)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
        finally {
            this.setLoading(false)
        }
    }

    async goToIncomes() {
        this.setLoading(true)
        try {
            this.switchPage(true)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
        finally {
            this.setLoading(false)
        }
    }
}