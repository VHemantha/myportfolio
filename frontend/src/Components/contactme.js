import React, { useState } from 'react';
import { Container, TextField, Typography, Box } from '@mui/material';
import { submitContactForm } from '../services/api';
import Button from 'react-bootstrap/Button';
import { styled } from '@mui/material/styles';


const Root = styled('div')({
  position: 'relative',
  minHeight: '80vh',
  overflow: 'hidden',
  paddingTop: '100px',
  
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setSubmitStatus(''); // Clear previous status
      console.log(formData);
      
      submitContactForm(formData)
        .then(response => {
          setSubmitStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch(error => {
          console.error('Error sending email:', error);
          console.error('Error sending email:', error.response);
          setSubmitStatus('Failed to send Message. Please try again later.');
        });
    } else {
      setFormErrors(errors);
    }
  };



  return (
    <Root>
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(formErrors.name)}
          helperText={formErrors.name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(formErrors.email)}
          helperText={formErrors.email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="message"
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={Boolean(formErrors.message)}
          helperText={formErrors.message}
          multiline
          rows={4}
        />
        <Button type='submit' variant="dark">Submit</Button>
        {submitStatus && (  
          <Typography variant="body1" color={submitStatus.includes('successfully') ? 'green' : 'red'} style={{ marginTop: '20px' }}>
            {submitStatus}
          </Typography>
        )}
      </Box>
    </Container>
    </Root>
  );
};

export default Contact;