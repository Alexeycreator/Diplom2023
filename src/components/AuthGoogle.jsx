import React from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";

const AuthGoogle = () => {
    return (
        <>
        <div>
            Авторизация Google
        </div>
        <div>
            <Login />
        </div>
        </>
    )
}

export { AuthGoogle }