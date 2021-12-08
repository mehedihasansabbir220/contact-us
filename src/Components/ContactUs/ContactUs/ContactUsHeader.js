import React from 'react';
import './ContactUs.css'
import contactusbg from '../../Images/pexels-pixabay-248444.jpg'
import { Container } from 'react-bootstrap';

const divStyle = {
  width: '100%',
  height: '300px',
  verticalAlign:'middle',
  backgroundImage: `url(${contactusbg})`,
  backgroundSize: 'cover'
};

const ContactUsHeader = () => {
    return (
        <>
        <Container>
        <div className='mt-2 p-3 my-3' style={divStyle} >
          <div className='d-flex flex-column bd-highlight m-3 p-2'>
          <h1 className='font-weight-bold' align="start">CONTACT US
         </h1>
         <p align="start" >Hello, is it me you’re looking for?
         </p>
          </div>
        </div>
        <p align='start' className='my-2 py-2'>Please carefully read the terms and conditions set out below before ordering any food or services from this website. Because if you do so you agree to be bound by these terms and conditions.</p>
        <h4 className='font-weight-bold' align='start'>Head Office</h4>
        <p align='start'>
        Hungrynaki HQ
        <br/>
        Asfia Tower, House 76, Block E, Road 11,
        <br/>
        Banani, Dhaka-1213, Bangladesh.
        <br/>
        Contact: 09678-454545
        <br/>
        email: xyz@gmail.com
        </p>
        </Container>
            
        </>
    );
};

export default ContactUsHeader;