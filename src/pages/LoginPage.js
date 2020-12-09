import {useState} from 'react';
import {Link} from 'react-router-dom';
import {login} from '../services/userService';
const LoginPage = (props) => {
    /* component state */
        const [formState, setFormState] = useState({
            email: '',
            password: ''
        })
    /* handler function */
function handleChange(event) {
    setFormState(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
    }))

// change formState using the same technique that we used for handleSignup
// add a value prop to your two inputs, email and password
// add an onchange propt to your tow inputs, email and password
}

async function handleSubmit(event) {
    // disable the default behavior of a form submission
    event.preventDefault();
    if(!formValid()) return; // stop program exectution and get outta here!
    // call the login function from userService
    try {
        await login(formState)
        props.handleSignupOrLogin();
    } catch(error) {
        alert(error.message);
    }

    // call handleSignupOrLogin
}
    /* helper function */
    function formValid() {
        return !!(formState.email && formState.password);
    }

    return (
        <main className="Page">
            <h1>LoginPage</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input onChange={handleChange} value={formState.email} name="email" placeholder="Email" className="form-control" type="email" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input onChange={handleChange} value={formState.password} name="password"className="form-control" placeholder="Password" type="password" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input disabled={!formValid()} value="Login" className="form-control" type="submit" />
                        &nbsp;&nbsp;
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </main>
    )
}
export default LoginPage;