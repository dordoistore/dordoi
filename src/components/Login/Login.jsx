import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const predefinedUsername = "admin"; // Замените на реальные данные
    const predefinedPassword = "admin"; // Замените на реальные данные

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === predefinedUsername && password === predefinedPassword) {
            // В случае успешной аутентификации переадресуйте пользователя
            navigate("/");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;
