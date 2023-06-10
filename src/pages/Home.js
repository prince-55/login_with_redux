import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../features/userSlice'
import { useNavigate } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Card>
            <Card.Body>
                <Card.Title>Welcome to Home Page</Card.Title>
                <Card.Text>
                    User is successfully logged in .
                </Card.Text>
                <Button variant="primary" 
                    onClick= {()=>{
                            dispatch(logout());
                            alert("Logged out");
                            navigate('/');
                            } } >Logout</Button>
            </Card.Body>
        </Card >

    )
}

export default Home