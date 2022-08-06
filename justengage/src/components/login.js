import React from "react";
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup
            .string()
            .email(
                'Must be a valid email')
            .max(255)
            .required(
                'Email is required'),
            password: Yup
            .string()
            .max(255)
            .required(
                'Password is required')
        }),
        onSubmit: () => {
            //router.push('/');
            console.log('submit');
        }
    });
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
          margin:'3rem',
          marginTop:'0rem',
          borderRadius: '30px',
          backgroundColor: "primary.main",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 , width:300}}>
                <Typography
                    color="#fff"
                    variant="h4"
                >
                    Sign in
                <img src={require('../icons/user.png')} alt="user" height="35rem" style={{marginLeft:10}}/>
                </Typography>
            </Box>
            {/* <ValidationTextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
              color="primary"
              InputLabelProps={{
                style: { color: "#fff" }
              }}
              InputProps={{
                style: { color: "#fff" }
              }}
            /> */}
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
              color="primary"
              style={{"color":"#fff"}}
              InputLabelProps={{
                style: { color: "#fff" }
              }}
              InputProps={{
                style: { color: "#fff" }
              }}
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
              color="primary"
              InputLabelProps={{
                style: { color: "#fff" }
              }}
              InputProps={{
                style: { color: "#fff" }
              }}
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Sign Up
                </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;