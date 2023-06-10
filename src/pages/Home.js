import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../features/userSlice'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector((state)=>state.user.user.username);

    return (
        <Card className='mx-auto my-5 w-50 h-25 bg-dark text-white text-center' >
            <Card.Body>
                <Card.Title>Welcome to Home Page</Card.Title>
                <Card.Text>
                    {userName} is successfully logged in .
                </Card.Text>
                <Button variant="secondary"
                 
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