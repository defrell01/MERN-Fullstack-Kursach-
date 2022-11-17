import $api from "../http";
import { AxiosResponse } from 'axios';
import { IUser } from "../models/response/IUser";
import { IIncome } from "../models/response/IIncome";

export default class UserService {
    
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }

    static fetchIncomes(): Promise<AxiosResponse<IIncome[]>> {
        return $api.get<IIncome[]>('/incomes/get')
    }

}

