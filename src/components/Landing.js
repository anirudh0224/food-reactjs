import React, { useEffect } from 'react';
import ResponsiveAppBar from './NavbarWeb';
import { Box, Typography, useMediaQuery, useTheme, Container, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from './Images/hero-img.png';

function Landing() {

    useEffect(() => {
        AOS.init();
    }, []);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            {/* <ResponsiveAppBar classname="menuBar" /> */}
            <div className='homePage'>
                <Grid container>
                    <Grid xs={12} sm={12} md={6} lg={6} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box sx={{
                            position: 'relative',
                            left: isSmallScreen ? '2%' : '10%',
                            top: isSmallScreen ? '20%' : '25%',
                            backgroundPosition: 'center',
                            width: isSmallScreen ? '150px' : isMediumScreen ? '250px' : '400px',
                            height: isSmallScreen ? '150px' : isMediumScreen ? '250px' : '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            backgroundImage: `url(${img})`,
                            animation: 'hero-dish 10s linear infinite reverse',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <Box className='hero-image'></Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Box sx={{
                            position: 'relative',
                            // right: '5%',
                            // top: '40%',
                            textAlign: 'center',
                            top: isSmallScreen ? '35%' : '40%',
                            right: isSmallScreen ? '2%' : '5%',
                            padding: isSmallScreen ? '10px' : '0px',
                        }}>
                            <Typography
                                className='headDream'
                                variant={isSmallScreen ? 'h3' : isMediumScreen ? 'h2' : 'h1'}
                                data-aos="fade-down"
                                data-aos-offset="120"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                                data-aos-mirror="true"
                                data-aos-anchor-placement="top-bottom"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: isSmallScreen ? '7vw' : isMediumScreen ? '5vw' : '4.5vw',
                                }}> OUR DREAM'S CAFE </Typography>
                            <Typography
                                variant='body1'
                                data-aos="fade-up"
                                data-aos-offset="120"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                                data-aos-mirror="true"
                                data-aos-anchor-placement="top-bottom"
                                sx={{
                                    color: 'white',
                                    fontSize: isSmallScreen ? '4vw' : '3vw',
                                    fontWeight: '200',
                                }} > Made From Our Own Organic <br /> Food & Milk </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default Landing

