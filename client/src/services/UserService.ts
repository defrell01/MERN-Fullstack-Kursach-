import $api from "../http";
import { AxiosResponse } from 'axios';
import { IUser } from "../models/response/IUser";
import { IIncome } from "../models/response/IIncome";
import { IExpense } from "../models/response/IExpense";
import { IncomeResponse } from "../models/response/IncomeResponse";
import { ExpenseResponse } from "../models/response/ExpenseResponse";

export default class UserService {
    
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }

    static fetchIncomes(): Promise<AxiosResponse<IIncome[]>> {
        return $api.get<IIncome[]>('/incomes/get')
    }

    static fetchExpenses(): Promise<AxiosResponse<IExpense []>> {
        return $api.get<IExpense[]>('/expenses/get')

    }

    static postIncome(category: String, amount: Number): Promise<AxiosResponse<IncomeResponse>> {
        return $api.post<IncomeResponse>('/incomes/create')
    }

    static postExpense(category: String, amount: Number): Promise<AxiosResponse<ExpenseResponse>> {
        return $api.post<ExpenseResponse>('/expenses/create')
    }
}


