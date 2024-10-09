import { Providers } from "./redux/provider";
import RouterApp from "./routes";
import './index.css'

export default function App() {
    return(
        <>
            <Providers>
                <RouterApp />
            </Providers>
        </>
    )
}