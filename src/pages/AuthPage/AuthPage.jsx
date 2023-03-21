import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { useState } from 'react'

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    const currPage = ['Sign Up', 'Log In']
    function handleClick() {
        showLogin ? setShowLogin(false) : setShowLogin(true)
    }
    return (
        <main>
            <h1>AuthPage</h1>
            <button onClick={handleClick}>{showLogin ? currPage[0] : currPage[1]}</button>
            {showLogin ?
                <LoginForm setUser={setUser} />
                :
                <SignUpForm setUser={setUser} />

            }
        </main>
    )
}