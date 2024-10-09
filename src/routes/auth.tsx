let isAuthenticated: boolean = false;

export const AuthProvider = {
    login(callback: VoidFunction) {
        isAuthenticated = true
        setTimeout(callback, 100)
    },

    logout(callback: VoidFunction) {
        isAuthenticated = false
        setTimeout(callback, 100)
    },

    isAuthenticated() {
        return isAuthenticated
    }
}