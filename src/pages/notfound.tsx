import { AuthProvider } from "../routes/auth"

export default function NotFound() {
    if ( AuthProvider.isAuthenticated() ) {
        setTimeout(() => { window.location.href = "/dashboard" }, 2000)
    }

    if ( !AuthProvider.isAuthenticated() ) {
        setTimeout(() => { window.location.href = "/login" }, 2000)
    }

    return(
        <>
            NotFound Page Here
        </>
    )
}