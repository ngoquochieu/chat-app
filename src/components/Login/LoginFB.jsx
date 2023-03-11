import {FaFacebookF} from 'react-icons/fa'
import { auth, providerFB } from '../Firebase/config'
import {signInWithPopup} from 'firebase/auth'
function LoginFB() {
    const loginFB = (e) => {
        signInWithPopup(auth, providerFB)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <div className="col-5 btn-auth " onClick={loginFB}>
            <FaFacebookF></FaFacebookF>
        </div>
    ) 
}
export default LoginFB