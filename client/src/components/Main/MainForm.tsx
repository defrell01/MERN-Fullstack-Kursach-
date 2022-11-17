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

    return (
        <section id="main">
            {/* <header id="header">
                <div className="container">
                    <div className="inner_header">
                        <img className="logo" src="Coin.svg" alt="" />
                        <div className="right_side_header">
                            <button onClick={() => store.logout()} className='top_btn'>Incomes</button>
                            <button onClick={() => store.logout()} className='top_btn'>Expenses</button>
                            <button onClick={() => store.logout()} className='top_btn'>Log out</button>
                        </div>
                    </div>
                </div>
            </header> */}
            
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"><img className="logo" src="Coin.svg" alt="" /></div>
                        <div className="col-lg-3"><button onClick={() => store.logout()} className='top_btn'>Incomes</button></div>
                        <div className="col-lg-3"><button onClick={() => store.logout()} className='top_btn'>Incomes</button></div>
                        <div className="col-lg-3"><button onClick={() => store.logout()} className='top_btn'>Incomes</button></div>
                    </div>
                </div>
            </header>

            <div className="container">
                <button onClick={getIncomes}>Get incomes</button>

                {incomes.map(income =>
                <div>{income.amount}</div>)

                }
            </div>
        </section>


    );
};


export default observer(Main);