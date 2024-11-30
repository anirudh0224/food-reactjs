import React, { useEffect } from 'react';
import ResponsiveAppBar from './NavbarWeb'
import { Box, Grid, Typography } from '@mui/material';
import servimg from './Images/imgServ.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import about1 from './Images/about1.jpg';
import about2 from './Images/about2.jpg';
import about3 from './Images/about3.jpg';
import about4 from './Images/about4.jpg';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function About() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div>
                {/* <ResponsiveAppBar /> */}
                <Box sx={{
                    width: '100%',
                    height: '200px',
                    position: 'relative',
                    backgroundImage: `url(${servimg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 1,
                    }} />

                    <Box sx={{
                        position: 'relative',
                        zIndex: 2,
                        color: 'white',
                    }}>
                        <Typography
                            variant='h2'
                            data-aos="fade-down"
                            data-aos-offset="120"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-mirror="true"
                            data-aos-anchor-placement="top-bottom"
                            sx={{
                                cursor: 'pointer'
                            }}>
                            About
                        </Typography>
                    </Box>
                </Box>
            </div>
            <Grid container sx={{
                margin: 'auto',
                width: '85%',
                height: '100%',
                backgroundColor: 'rgba( 247, 244, 184,.2  )',
                padding: '10px',
            }}>
                <Grid sm={12} xs={12} md={12} lg={6} sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    columnGap: '10px',
                    rowGap: '10px',
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '300px',
                        display: "grid",
                        alignContent: 'end',
                        justifyContent: 'end',
                    }}>
                        <Box sx={{
                            width: '250px',
                            height: '250px',
                            backgroundImage: `url(${about1})`,
                            backgroundSize: 'cover',

                        }} /></Box>
                    <Box sx={{
                        width: '100%',
                        height: '300px',
                        display: "grid",
                        alignContent: 'end',
                    }}>
                        <Box sx={{
                            width: '200px',
                            height: '200px',
                            display: 'grid',
                            backgroundImage: `url(${about2})`,
                            backgroundSize: 'cover',
                        }} />
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: '300px',
                        display: "grid",
                        justifyContent: 'end',
                        alignContent: 'start'
                    }}>
                        <Box sx={{
                            width: '200px',
                            height: '200px',
                            display: 'grid',
                            backgroundImage: `url(${about3})`,
                            backgroundSize: 'cover',
                        }} />
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: '300px',
                        display: "grid",
                    }}>
                        <Box sx={{
                            width: '250px',
                            height: '250px',
                            backgroundImage: `url(${about4})`,
                            backgroundSize: 'cover',
                        }} />
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={12} lg={6} sx={{
                    display:'grid',
                    alignContent:'center',
                    padding:'10px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '30px',
                        color: '#FEA116',
                    }} >
                        about Us
                        <Box
                            sx={{
                                borderTop: '2px solid #FEA116',
                                width: '40px',
                                marginLeft: '5px'
                            }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        fontSize: '45px',
                        fontWeight: 'bold',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }}> Welcome to
                        <RestaurantIcon sx={{
                            color: '#FEA116',
                            fontSize: '45px'
                        }} /> Restaurant
                    </Box>
                    <Box sx={{
                        marginBottom: '20px'
                    }}>
                        <Typography variant='p' sx={{
                            color: '#666565',
                            fontSize: '20px',
                        }}>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                        </Typography>
                    </Box>
                    <Box sx={{
                        marginBottom: '20px',
                    }}>
                        <Typography variant='p' sx={{
                            color: '#666565',
                            fontSize: '20px',
                        }}>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </Typography>
                    </Box>
                    <Box sx={{
                        display:'flex'
                    }}>
                        <Box sx={{
                            borderLeft: '5px solid #FEA116',
                            height: '60px',
                            paddingLeft: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '60px',
                            color: '#FEA116'
                        }}>
                            15
                            <Typography variant='p' sx={{
                                color: '#666565',
                                fontSize: '20px',
                                paddingLeft: '30px',
                            }}>Years of <br /> <p style={{ margin: '0px', fontSize: '30px', color: '#FEA116' }}>EXPERIENCE</p> </Typography>
                        </Box>
                        <Box sx={{
                            borderLeft: '5px solid #FEA116',
                            height: '60px',
                            paddingLeft: '30px',
                            marginLeft:'20px',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '60px',
                            color: '#FEA116'
                        }}>
                            50
                            <Typography variant='p' sx={{
                                color: '#666565',
                                fontSize: '20px',
                                paddingLeft: '30px',
                            }}>Popular <br /> <p style={{ margin: '0px', fontSize: '30px', color: '#FEA116' }}>MASTER CHEFS</p> </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </>


    )
}

export default About;
