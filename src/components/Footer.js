import React from 'react';
import Container from "react-bootstrap/Container";

function Footer() {

  return (
    <div id="footer" className='text-center bg-black text-white'>
        <Container className='p-2'>
            Copyright &copy; - 2022: <span className='text-success'>Nawaz Danish</span>
        </Container>
    </div>
  )
}

export default Footer;