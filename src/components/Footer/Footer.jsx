import React from "react";
import "./Footer.css";
import { MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdb-react-ui-kit";

const Footer = () => {
  return (

    <>
  <MDBFooter className='text-center text-lg-start text-muted footer-container'>
  <section className='mb-4 footer-icons'>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#3b5998' }}
          href='https://www.facebook.com/profile.php?id=100040037795176'
          role='button'
        >
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#55acee' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#dd4b39' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#ac2bac' }}
          href='https://www.instagram.com/dineshdhiney/'
          role='button'
        >
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#0082ca' }}
          href='https://www.linkedin.com/in/dinesh-tsd-fire-coder/'
          role='button'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#333333' }}
          href='https://github.com/Dinesh-TSD'
          role='button'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Dinesh Soft Tech
              </h6>
              <p>
              Welcome to My Company! We are passionate about creating innovative solutions using the MERN stack.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Portfolio 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ecommerce Websites
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Social Media Apps
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Educational Apps
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                MLR,VDM,TK,CUDDALORE 
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                dineshtsd76@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 987654321
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' />987654321
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:=:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          dineshtsd76@gmail.com
        </a>
      </div>
    </MDBFooter>

    </>
 
  );
};

export default Footer;
