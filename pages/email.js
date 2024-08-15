import { Html, Head, Body, Container, Row, Column, Text } from '@react-email/components';

const EmailTemplate = ({ name, email, phone, subject, message }) => (
  <Html>
  
    <Head>
      <style>
        {`
          .email-body {
            background-color: #f4f4f4;
            padding: 20px;
            font-family: Arial, sans-serif;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            background-color: #191918;
            padding: 10px;
            text-align: center;
          }
          .email-header img {
            max-width: 150px;
            height: auto;
          }
          .email-intro {
            padding: 20px;
            color :#000;
          }
          .email-content {
            padding: 20px;
          }
          .email-content h2 {
            color: #333333;
          }
          .email-content p {
            color: #555555;
            line-height: 1.6;
          }
          .email-footer {
            background-color: #f1f1f1;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            color: #6c757d;
          }
          .footer-text {
            margin: 0;
          }
        `}
      </style>
    </Head>
    <Body>
      <Container className="email-body">
        <Row>
          <Column>
            <div className="email-container">
              <div className="email-header">
            
              <div className="d-flex" >
          <a href="/">
            <h3 style={{color: '#f04545'}} className='p-2' >{`StrykeFit `}</h3>
          </a>
          <div className="logo p-2">
            <a href="/">
              <img src="/images/logo.svg" alt="" />
            </a>
          </div>
        </div>
      
              </div>
              <div className="email-intro">
                
                Hi There!<br />
                <strong>{name}</strong> has submitted a contact query. Below are the details:
              
            </div>
              <div className="email-content">
             
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Subject:</strong> {subject}</p>
                <p><strong>Message:</strong></p>
                <p>{message}</p>
              </div>
              <div className="email-footer">
                <p className="footer-text">You received this message because you are an admin of [Your Site].</p>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
