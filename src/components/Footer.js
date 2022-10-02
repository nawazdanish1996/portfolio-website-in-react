import React from 'react';
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <div className='text-center bg-black text-white p-2'>
        <Container>
            Copyright &copy; - 2022: <span className='text-success'>Nawaz Danish</span>
        </Container>
    </div>
  )
}

export default Footer;