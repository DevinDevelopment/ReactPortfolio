import { useState } from 'react';

function ContactPage() {
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target.name;
    const email = target.email;
    const message = target.message;

    if (!validateEmail(email) || !name) {
      setErrorMessage('Invalid email');
      
      return;
    }

    if(message == null){
        
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
    <div>
      <h1>Contact me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
      <input
          value={name}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          type="text"
          placeholder="message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
