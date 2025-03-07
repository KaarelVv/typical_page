import './Login.css'

import Card from '../UI/Card'
import Button from '../UI/Button'
import { useEffect, useState } from 'react'

const Login = () => {

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [emailIsValid, setEmailIsValid] = useState()
    const [passwordIsValid, setPasswordIsValid] = useState()
    const [formIsValid, setFromIsValid] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            console.log('check form is valid')
            setFromIsValid(emailIsValid && passwordIsValid)
            console.log('checked')
        }, 500)
        return () => {
            clearTimeout(timeOut)
        }
    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    }

    const emailValidateHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'))
    }

    const passwordvalidateHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6)
    }


    return (
        <Card className='login'>
            <form>
                <div className={`control ${emailIsValid === false ? 'invalid' : ''}`}>
                    <label for='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={emailValidateHandler}
                    ></input>
                </div>
                <div className={`control ${passwordIsValid === false ? 'invalid' : ''}`}>
                    <label for='password'>Password</label>
                    <input
                        value={enteredPassword}

                        type='password'
                        id='password'
                        onChange={passwordChangeHandler}
                        onBlur={passwordvalidateHandler}
                    ></input>
                </div>
                <div className='actions'>
                    <Button
                        type='submit'
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>

    )
}

export default Login