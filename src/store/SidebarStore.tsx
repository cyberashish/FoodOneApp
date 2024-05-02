"use client"

import { createContext, useContext, useReducer } from "react";
interface CounterProviderProps {
    children:React.ReactNode
}

interface CounterContextValue {
   Value:{activeItem:String},
   dispatch:(action:Object) => void
}

const CounterContext = createContext<CounterContextValue | null>(null);

const initState = {
    activeItem:""
}

const reducer = (state:any,action:any) => {
    switch(action.type){
        case "ActivateItem":
         if(state.activeItem===""){
             return({...state,activeItem:"active"})
         }else{
            return({...state,activeItem:""})
         }
    }
}

export const CounterProvider:React.FC<CounterProviderProps> = (props) => {
    const [state,dispatch] = useReducer(reducer,initState)
   return(
    <CounterContext.Provider value={{
        Value:state,
        dispatch
    }}>
      {props.children}
    </CounterContext.Provider>
   )
}

export const useCounter = () => {
    return (useContext(CounterContext))
}