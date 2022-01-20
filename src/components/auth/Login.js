import logo from '../../images/HCC-logo-white.png';
import './Login.css';
import { Button, Input, InputGroup } from 'reactstrap';
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
                        <Input id="employee_id" placeholder="Employee #"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && (parseInt(document.getElementById("employee_id").value) === 1252)) {
                                    navigate('/profile')
                                }
                            }} />
                        <Button onClick={() => {

                            if (parseInt(document.getElementById("employee_id").value) === 1252) {
                                navigate('/profile')

                            }

                        }}>Enter</Button>
                    </InputGroup>

                </div>
            </header>
        </div>
    );
}

export default Login;
