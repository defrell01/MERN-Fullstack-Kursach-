import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { IUser } from './models/response/IUser';
import UserService from './services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css'
import FaceForm from './components/FaceForm/FaceForm';
import AuthForm from './components/AuthForm.tsx/AuthForm';
import Main from './components/Main/MainForm';
import LoadingForm from './components/LoadingForm/LoadingForm';
import Expenses from './components/Main/Expenses';


const App: FC = () => {
    const { store } = useContext(Context)
    const [users, setUsers] = useState<IUser[]>()

    useEffect(() => {
      if (localStorage.getItem('token')) {
        store.checkAuth()
      }
    }, [])

    if (store.isLoading){
      return(
        <LoadingForm/>
      )
    }


    if(store.isAuthPage) {
      return (
        <AuthForm/>
      )
    }

    if(store.isAuth && store.isMainPage && !store.isExpensePage) {
      return (
        <Main/>
      )
    }

    if(store.isAuth && !store.isMainPage && store.isExpensePage) {
      return (
        <Expenses/>
      )
    }

    async function getUsers() {
      try {
        const response = await UserService.fetchUsers()
        setUsers(response.data)
      } catch (e) {
        console.log(e)
      }
    }

    return (
      <FaceForm/>
    )
    

  
}

export default observer(App);