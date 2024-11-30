import React, { useEffect } from 'react';
import ResponsiveAppBar from './NavbarWeb'
import { Box, Grid, Typography } from '@mui/material';
import servimg from './Images/imgServ.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Person3Icon from '@mui/icons-material/Person3';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Footer from './Footer';

function Services() {
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
                            Services
                        </Typography>
                    </Box>
                </Box>
            </div>

            <Grid container sx={{
                margin: 'auto',
                width: '85%',
                height: '100%',
                backgroundColor: 'rgba( 247, 244, 184,.2  )',
                padding: '10px'
            }}>
                <Grid lg={12} md={12} sm={12} xs={12}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '80px 0px 10px',
                    }}>
                        <Box sx={{
                            borderTop: '2px solid #FEA116',
                            width: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px'

                        }} />
                        <Box sx={{
                            color: 'black',
                            fontSize: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FEA116',

                        }}>
                            Our Services
                        </Box>
                        <Box sx={{
                            borderTop: '2px solid #FEA116',
                            width: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '10px'

                        }} />
                    </Box>
                </Grid>
                <Grid lg={12} md={12} sm={12} xs={12}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        marginBottom: '20px'
                    }}>
                        Explore Our Services
                    </Box>
                </Grid>



                <Grid sm={6} md={4} lg={3} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        width: '300px',
                        height: '200px',
                        boxShadow: '0px 3px 10px rgba(0,0,0,0.3 )',
                        margin: '10px',
                        padding: '30px',
                        '&:hover': {
                            backgroundColor: '#FEA116',
                            color: 'white',
                            transition: '.2s'
                        }
                    }}>
                        <Person3Icon sx={{
                            color: '#ebe07f',
                            fontSize: '70px',
                        }} />
                        <Typography variant='h5'
                            sx={{
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                            Master Chefs
                        </Typography>
                        <Typography variant='p'
                            sx={{
                                fontSize: '20px'
                            }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={6} md={4} lg={3} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        width: '300px',
                        height: '200px',
                        boxShadow: '0px 3px 10px rgba(0,0,0,0.3 )',
                        margin: '10px',
                        padding: '30px',
                        '&:hover': {
                            backgroundColor: '#FEA116',
                            color: 'white',
                            transition: '.2s'
                        }
                    }}>
                        <RestaurantIcon sx={{
                            color: '#ebe07f',
                            fontSize: '70px'
                        }} />
                        <Typography variant='h5'
                            sx={{
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                            Quality Food
                        </Typography>
                        <Typography variant='p'
                            sx={{
                                fontSize: '20px'
                            }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={6} md={4} lg={3} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        width: '300px',
                        height: '200px',
                        boxShadow: '0px 3px 10px rgba(0,0,0,0.3 )',
                        margin: '10px',
                        padding: '30px',
                        '&:hover': {
                            backgroundColor: '#FEA116',
                            color: 'white',
                            transition: '.2s'
                        }
                    }}>
                        <ShoppingCartIcon sx={{
                            color: '#ebe07f',
                            fontSize: '70px'
                        }} />
                        <Typography variant='h5'
                            sx={{
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                            Online Order
                        </Typography>
                        <Typography variant='p'
                            sx={{
                                fontSize: '20px'
                            }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={6} md={4} lg={3} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        width: '300px',
                        height: '200px',
                        boxShadow: '0px 3px 10px rgba(0,0,0,0.3 )',
                        margin: '10px',
                        padding: '30px',
                        '&:hover': {
                            backgroundColor: '#FEA116',
                            color: 'white',
                            transition: '.2s'
                        }
                    }}>
                        <HeadsetMicIcon sx={{
                            color: '#ebe07f',
                            fontSize: '70px'
                        }} />
                        <Typography variant='h5'
                            sx={{
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                            24/7 Service
                        </Typography>
                        <Typography variant='p'
                            sx={{
                                fontSize: '20px'
                            }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={6} md={4} lg={3} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        width: '300px',
                        height: '200px',
                        boxShadow: '0px 3px 10px rgba(0,0,0,0.3 )',
                        margin: '10px',
                        padding: '30px',
                        '&:hover': {
                            backgroundColor: '#FEA116',
                            color: 'white',
                            transition: '.2s'
                        }
                    }}>
                        <Person3Icon sx={{
                            color: '#ebe07f',
                            fontSize: '70px',
                        }} />
                        <Typography variant='h5'
                            sx={{
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                            Master Chefs
                        </Typography>
                        <Typography variant='p'
                            sx={{
                                fontSize: '20px'
                            }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={6} md={4} lg={3} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        width: '300px',
                        height: '200px',
                        boxShadow: '0px 3px 10px rgba(0,0,0,0.3 )',
                        margin: '10px',
                        padding: '30px',
                        '&:hover': {
                            backgroundColor: '#FEA116',
                            color: 'white',
                            transition: '.2s'
                        }
                    }}>
                        <RestaurantIcon sx={{
                            color: '#ebe07f',
                            fontSize: '70px'
                        }} />
                        <Typography variant='h5'
                            sx={{
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                            Quality Food
                        </Typography>
                        <Typography variant='p'
                            sx={{
                                fontSize: '20px'
                            }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={6} md={4} lg={3} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        width: '300px',
                        height: '200px',
                        boxShadow: '0px 3px 10px rgba(0,0,0,0.3 )',
                        margin: '10px',
                        padding: '30px',
                        '&:hover': {
                            backgroundColor: '#FEA116',
                            color: 'white',
                            transition: '.2s'
                        }
                    }}>
                        <ShoppingCartIcon sx={{
                            color: '#ebe07f',
                            fontSize: '70px'
                        }} />
                        <Typography variant='h5'
                            sx={{
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                            Online Order
                        </Typography>
                        <Typography variant='p'
                            sx={{
                                fontSize: '20px'
                            }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={6} md={4} lg={3} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        width: '300px',
                        height: '200px',
                        boxShadow: '0px 3px 10px rgba(0,0,0,0.3 )',
                        margin: '10px',
                        padding: '30px',
                        '&:hover': {
                            backgroundColor: '#FEA116',
                            color: 'white',
                            transition: '.2s'
                        }
                    }}>
                        <HeadsetMicIcon sx={{
                            color: '#ebe07f',
                            fontSize: '70px'
                        }} />
                        <Typography variant='h5'
                            sx={{
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                            24/7 Service
                        </Typography>
                        <Typography variant='p'
                            sx={{
                                fontSize: '20px'
                            }}>
                            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </>


    )
}

export default Services;
