import React, {useState} from 'react';
export const setteingsContext = React.createContext();

export default function Settings(props){
    const [list,setList]=useState([]);
    const [complete,setComplete]=useState(true);
    const [sortType,setSort]= useState('asc')
    const displayCompleteFun =()=>{
        setComplete(!complete);
    }
    const state ={
        list:list,
        setList:setList,
        display: false,
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
