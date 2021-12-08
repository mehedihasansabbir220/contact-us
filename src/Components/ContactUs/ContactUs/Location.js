import React from 'react';
import { Container } from 'react-bootstrap';
import map from '../../Images/web-3120321_960_720.png'

const Location = () => {
    return (
        <>
        <Container>
        <div className='text-start'>
            <h4>Our Location </h4>
            <div class="embed-responsive embed-responsive-100x400px">
            <iframe src={map} width="100%" height="600"></iframe>
            </div>
        </div>
        </Container>
      
        </>
    );
};

export default Location;