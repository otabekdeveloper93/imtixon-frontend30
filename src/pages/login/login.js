import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import Container from "../../components/container/container";
import "./login.scss";
import Logo from "../../components/logo/logo";

const Login = () => {

    const {setToken} = useContext(AuthContext);
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    const inputEmailValue = useRef();
    const inputPasswordValue = useRef();

    const handleFormSubmit = (evt) =>{
        evt.preventDefault();
        
        const emailValue = inputEmailValue.current.value;
        const passwordValue = inputPasswordValue.current.value;

        if(emailValue && passwordValue){
            
            fetch("https://reqres.in/api/login",{
                method: "POST",
                body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(res.ok){
                return res.json()
                }
            }).then(data => {

                setToken(data.token)
                navigate('/')

            }).catch(err => setErr("login yoki parol xato terildi"))
        }
    }

    // eve.holt@reqres.in    cityslicka
    return (
        <div className="login-page">
            <Container>
                <Logo black="black"/>
                <div className="login-box">
                    <h1>Login</h1>
                    <form onSubmit={handleFormSubmit}>
                        <input ref={inputEmailValue} type="email" name="email" placeholder="Login" aria-label="Email"/>
                        <input ref={inputPasswordValue} type="password" name="password" placeholder="Password" aria-label="Password"/>
                        <button type="submit">Submit</button>
                        <p style={{color: "red"}}>{err}</p>
                    </form> 
                </div>
            </Container>
        </div>
    );
};

export default Login;