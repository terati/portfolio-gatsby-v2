import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Divider,
    FormControl,
    Grid,
    styled,
    TextField,
    Typography,
    withStyles,
  } from '@material-ui/core';
import { useFormik } from 'formik';
import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

const styles = () => ({
    input: {
      color: "blue"
    },
    focused: {
      background: "red"
    }
  });

function ContactBody() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        }
    })

    const CssTextField = styled(TextField)({
        '& label':{
            color: 'white',
            fontFamily: 'Helvetica, Arial',
        },
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
      });

    return (
        <Box component="main" sx={{ 
            flexGrow: 1, 
            p: 3,
            // marginLeft: '70px',
            minHeight: '100vh',
            backgroundColor: '#222020',
            color: '#37D4B8',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            {/* <DrawerHeader /> */}
            <h1 style={{color:'#37D4B8', fontSize:'50px', fontFamily:'Roboto, Exo, Arial,', marginLeft:'5%'}}> Contact Me </h1>
            
            <Box sx={{ 
                flexGrow: 1, 
                maxWidth: '500px', 
                backgroundColor:'#3E3E3E', 
                paddingTop: '10px',
                paddingLeft: '50px',
                paddingRight: '50px',
                paddingBottom: '20px',
                borderRadius: '20px',
                justifyContent: "flex-end",
                alignItems: "flex-end",
            }} >
                <CssTextField id="outlined-basic" 
                            label="Name"
                            variant="outlined" 
                            margin="normal" 
                            style={{
                                color: "white",
                                width: '100%',
                            }}
                            InputProps={{
                                style: {
                                    color: "white",
                                }
                            }}
                />
            
                <CssTextField fullWidth id="filled-basic" 
                    label="Email" 
                    variant="outlined" 
                    margin="normal"
                    style={{
                        color: "white",
                    }}
                    InputProps={{
                        style: {
                            color: "white",
                            width: '100%',
                        }
                    }}
                />

                <CssTextField fullWidth id="standard-basic" 
                    label="Message" 
                    variant="outlined" 
                    margin="normal" 
                    multiline rows={8}
                    style={{
                        color: "white",
                    }}
                    InputProps={{
                        style: {
                            color: "white",
                            width: '100%',
                        }
                    }}
                />
                <Button variant="contained" 
                    endIcon={<SendIcon />}
                    style={{
                        backgroundColor: "#37D4B8",
                        color: "white",
                        marginTop: "10px",
                    }}    
                >
                    Submit
                </Button>
            </Box>

        </Box>
    )
}

export default ContactBody
