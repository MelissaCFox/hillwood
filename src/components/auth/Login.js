import logo from '../../images/HCC-logo-white.png';
import './Login.css';
import { Input, InputGroup } from 'reactstrap';
import React from "react"
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="login">
                    <p>Employee Portal</p>
                    <InputGroup>
                        <Input type="password" id="employee_id" placeholder="Employee #"
                            onKeyUp={(e) => {
                                const input = document.getElementById("employee_id").value
                                const number = parseInt(input)
                                if (input.length === 4 && number === 1252) {
                                    navigate('/profile')
                                }
                                
                            }} />
                    </InputGroup>

                </div>
            </header>
        </div>
    );
}

export default Login;
