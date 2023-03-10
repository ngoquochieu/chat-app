import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword  } from 'firebase/auth'
import {auth} from '../Firebase/config'
import LoginGG from './LoginGG'
import LoginFB from './LoginFB'
function Login() {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    })
    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(state => ({...state, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, inputs.email, inputs.password)
            .then(userCredential => {
                console.log(userCredential.user)
            })
            .catch(err => {
                console.log(err)
            })
    }
    auth.onAuthStateChanged(user => {
        if(user) {
            navigate('/home')
        }
    })
    return <section id="login">
        <div className="login container-fluid row">
            <div className="col-4 content-left h-100">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="row">LOGIN</div>
                        <div className="row txt_field">
                            <label>Email</label>
                            <input type="email" name="email" onChange={handleInputs}/>
                        </div>
                        <div className="row txt_field">
                            <label>Password</label>
                            <input type="password" name="password" onChange={handleInputs}/>
                        </div>
                        <div className="row">
                            <button className="btn-login">Login</button>
                        </div>
                        <div className="row auth d-flex justify-content-around align-items-center">
                            <LoginGG></LoginGG>                          
                            <LoginFB></LoginFB>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-8 content-right h-100">
                <div className="img-right h-100">
                    <img src='https://s3-alpha-sig.figma.com/img/3ea0/2027/ea1fe593648b2c6f7feaa9b26d82a9d6?Expires=1679270400&Signature=IJGe-ljTxfUzZ6Tv8lSIfB52Q~Bpm-nSCg6WtPijQzv5uXKTlJVrJc~JZ8KL-JwSOx3cbQl7xjAsQePTSWsnfBCG09wMXbygH3AqnI45OrBNzY28IH31I4lSgWj9kVwYqHfl0aW0yKIN0a3Hwv8D9chSQZHgbd-mDfaKxt3t8bnLEvWViWYzduZIiM6nQ--lrOoS88v7Wjl7md6iK2abM3vw0p7HktK-xUxMrRUINvdyyzpgmhvNUDYkE8eSmjlMP9dyUvp9pNhL~BrP49H6Ei4m~B7ndBrIr1lPic5l144v8zKr--pCWbQ6XKxZbh5X6NJjvccvVedI8yqerg4YEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="" />
                </div>
            </div>
        </div>
    </section>
}
export default Login