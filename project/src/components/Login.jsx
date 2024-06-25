import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { createLogin } from '../service/MainService';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true); 
            return;
        }

        try {
            const user = await createLogin(email, password);
            if (user && user.rollId) {
                const role = user.rollId.roll.toLowerCase();
                if (role === 'admin') {
                    navigate('/admin');
                } else if (role === 'teacher') {
                    navigate('/teacher');
                } else if (role === 'student') {
                    navigate('/student');
                } else {
                    alert('Unknown role');
                }
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
        } finally {
            setValidated(true); 
        }    
    };

    return (
        <div className="container">
            <div className="row">
                <div className="studreg" style={{
                    backgroundColor: 'lightblue',
                    color: 'black',
                    padding: '20px',
                    margin: '20px',
                    border: '1px solid black',
                    borderRadius: '10px',
                    width: '500px',
                    height: 'auto',
                    marginLeft: '300px',
                    marginTop: '80px',
                    boxShadow: '3px 3px 5px 0.5px rgba(2,2,2,5)'
                }}>
                    <h2 style={{ color: 'red' }}>Login Form</h2><br></br>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3" style={{ marginLeft: '10px', width: '650px' }}>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="username"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button type="submit" style={{ width: '100px', marginLeft: '180px' }}>Login</Button><br></br>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
