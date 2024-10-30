import React from 'react';
import { Form } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {randomColor} from '../../utils/randomColor'

export const handleFormData = async ({request})=>{
 try {
  const res = await request.formData();
  const data = Object.fromEntries(res);
  console.log(data)
  return null;
 } catch (error) {
  console.log(error.message)
 }
}




export default function Contact() {
  return (
 

        <Box 
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        minHeight: '100vh',
       // Dark background color
        padding: '2rem',
       
      }}
    >

      
    <div className={` ${randomColor()}  p-1 h-fit rounded-lg md:w-96 lg:w-[500px] mx-auto `}>
    <Form method='POST'
        className='flex flex-col justify-center items-center w-full max-w-lg gap-6 text-white'
        style={{
          backgroundColor: '#2e2e3b', // Slightly lighter background for form
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        }}
      >
        <TextField 
          name="name" 
          label="Name" 
          variant="outlined" 
          InputLabelProps={{ style: { color: 'white' } }} 
          InputProps={{
            style: { color: 'white' },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: '#3f72af' },
              '&.Mui-focused fieldset': { borderColor: '#3f72af' },
              color: 'white',
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': { color: 'white' },
            width: '100%',
          }}
        />
        
        <TextField 
          name="email" 
          label="Email" 
          variant="outlined" 
          InputLabelProps={{ style: { color: 'white' } }} 
          InputProps={{
            style: { color: 'white' },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: '#3f72af' },
              '&.Mui-focused fieldset': { borderColor: '#3f72af' },
              color: 'white',
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': { color: 'white' },
            width: '100%',
          }}
        />
        
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{
            style: { color: 'white' },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: '#3f72af' },
              '&.Mui-focused fieldset': { borderColor: '#3f72af' },
              color: 'white',
              borderRadius: '8px',
            },
            '& .MuiInputLabel-root': { color: 'white' },
            width: '100%',
          }}
        />
        
        <button 
          type="submit" 
          style={{
            backgroundColor: '#3f72af',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0b0b5a')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#3f72af')}
        >
          Send Message
        </button>
      </Form>
    </div>
    </Box>
 
  );
}
