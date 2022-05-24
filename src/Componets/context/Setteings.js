import React, {useState} from 'react';
export const setteingsContext = React.createContext();

export default function Settings(props){
    const [list,setList]=useState(JSON.parse(localStorage.getItem('data')) ||[]);
    const [complete,setComplete]=useState(true);
    const [display,setDisplay]=useState(true);
    const [sortType,setSort]= useState('asc')
    const displayCompleteFun =()=>{
        setComplete(!complete);
    }
    const state ={
        list:list,
        setList:setList,
        display: display,
        setDisplay:setDisplay,
        sortType:sortType,
        setSort:setSort,
        setComplete:setComplete,
        complete:complete,
        displayCompleteFun:displayCompleteFun
    }

    return(
        <setteingsContext.Provider value={state}>
            {props.children}
        </setteingsContext.Provider>
    )
}
