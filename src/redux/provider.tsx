import { Provider } from "react-redux"
import { Store } from "./store"
import { ReactNode } from "react"

// Setup Object Params
interface ProviderProps { 
    children: ReactNode
}

export function Providers({ children }: ProviderProps) {    
    return(
        <>
            <Provider store={ Store }>
                { children }
            </Provider>
        </>
    )
}