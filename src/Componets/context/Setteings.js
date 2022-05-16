import React, {useState} from 'react';
export const setteingsContext = React.createContext();

export default function Settings(props){
    const [items, setItems] = useState(3)
    const state ={
        display: false,
        items:items,
        sortItem:"",
        setItems:setItems,
    }

    return(
        <setteingsContext.Provider value={state}>
            {props.children}
        </setteingsContext.Provider>
    )
}
