import { useState } from 'react';
import '../Index.css'

function ContactPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const styles = {
    message: {
      height: '200px'
    },
    inputs: {
      width: '50%',
    }

  };

  const validateEmail = (email) => {
    const re = /[a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
    return re.test(String(email).toLowerCase());
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'name') {
        setName(value);
      } else if (name === 'message') {
        setMessage(value);
      }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      setErrorMessage('Must include message');  
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email or username is invalid');
      return;
    }

    setName(name);
    setEmail(email);
    setMessage(message);

    alert(`Hello ${name}, I will be sure to contact you!`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <div className="container mt-4">
      <div>
      <h1 className='title'>Contact me</h1>

        <div className='row'>
          <div className='col-12'>
            <div className="card text-center mt-5">
              <div className="card-header">
                <br/>
              </div>
              <div className="card-body input-xxlarge">
                <form className="form" onSubmit={handleFormSubmit}>
                  <p>Looking forward to hearing from you!</p>
                  <div className='mb-3'>
                    <input
                      value={name}
                      name="name"
                      type="text"
                      placeholder="name"
                      onChange={handleInputChange}
                      style={styles.inputs}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      value={email}
                      name="email"
                      type="email"
                      placeholder="email"
                      onChange={handleInputChange}
                      style={styles.inputs}
                    />
                  </div>
                  <div className='mb-3'>
                    <input 
                      value={message}
                      name="message"
                      type="text"
                      placeholder="message"
                      onChange={handleInputChange}
                      style={{ ...styles.inputs, ...styles.message }}
                      className='input-lg'
                    />
                  </div>
                  <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
                {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
              </div>
              <div className="card-footer text-muted">
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactPage;
