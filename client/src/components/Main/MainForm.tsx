import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index'
import { FC, useContext, useState } from 'react';
import './MainForm.sass'
import { IIncome } from '../../models/response/IIncome';
import UserService from '../../services/UserService';
const Main: FC = () => {
    const { store } = useContext(Context)
    const [incomes, setIncomes] = useState<IIncome[]>([])

    async function getIncomes() {
        try {
            const response = await UserService.fetchIncomes()
            setIncomes(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    async function getExpenses() {
        try {
            const response = await UserService.fetchIncomes()
            setIncomes(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    function sum (array: number[]) {
        let s: number = 0
        for (var i=0; i < array.length; i++){
            s+=array[i]
        }
        return s
    }

    const [category, setCategory] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [amount, setAmount] = useState<string>('')

    return (

        <div className="main_wrapper">
            <section id='main'>
                <header id='header'>
                    <div className="container">
                        <div className="row">
                            <div className="inner_header">
                                <div className="col-lg-1"><img src="coin.svg" alt="" className="logo" /></div>
                                <div className="col-lg-3"><div className="balance">Balance</div></div>
                                <div className="col-lg-3"><button className='top_btn'>Incomes</button></div>
                                <div className="col-lg-3"><button onClick={() => store.goToExpenses()} className='top_btn'>Expenses</button></div>
                                <div className="col-lg-2"><button className='top_btn' onClick={() => store.logout()}>Log out</button></div>
                            </div>
                        </div>
                    </div>
                </header>


                <div className="incomes">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-1"></div>
                            <div className="col-lg-5">
                                <div className="active_box">

                                    <select name="category" className="category" 
                                        onChange={e => setCategory(e.target.value)}
                                        value={category}>
                                        <option value={category}>Salary</option>
                                        <option value={category}>Other</option>
                                    </select>

                                    <input 
                                        className='title' 
                                        type="text" 
                                        placeholder='Title'
                                        onChange={e => setTitle(e.target.value)}
                                        value={title}
                                    />
                                    <input className='amount'
                                        type="number"
                                        placeholder='Amount'
                                        onChange={e => setAmount(e.target.value)}
                                        value={amount} 
                                    />

                                    <button className="add_income" onClick={() => store.postIncome(category, title, Number(amount))}>Add income</button>

                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="info_box">
                                    <div className="values">
                                        {incomes.map(income =>
                                            <div>{income.amount} руб.</div>)
                                        }
                                    </div>

                                    <button onClick={getIncomes} className="get_incomes">Get incomes</button>
                                </div>

                            </div>
                            <div className="col-lg-1"></div>

                        </div>
                    </div>
                </div>

                

                
                
            </section>

        </div>

    );
};


export default observer(Main);