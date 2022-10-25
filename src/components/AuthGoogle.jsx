import React from "react"
import { AuthGoogleAccount } from "./AuthGoogleAccount"

const AuthGoogle = () => {
    return (
        <>
            <div>
                Добро пожаловать на страницу авторизации Google!
            </div>
            <div>
                <AuthGoogleAccount />
            </div>
        </>
    )
}

export { AuthGoogle }