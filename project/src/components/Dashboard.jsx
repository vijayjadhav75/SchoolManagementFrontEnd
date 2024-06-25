import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Dashboard = ({ role }) => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">GTH</Navbar.Brand> 
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        {role === 'student' && <Nav.Link href="/student">Student</Nav.Link>}
                        {role === 'teacher' && <Nav.Link href="/teacher">Teacher</Nav.Link>}
                        {role === 'admin' && <Nav.Link href="/admin">Admin</Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Dashboard;
