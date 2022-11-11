import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index'
import { FC, useContext, useState } from 'react';
const Main: FC = () => {
    const {store} = useContext(Context)
    
    return (
        <div>
            authorized
            <button onClick={() => store.logout()}>
                log out
            </button>
        </div>
        
    );
};

export default observer(Main);