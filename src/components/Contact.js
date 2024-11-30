import React, { useEffect } from 'react';
import ResponsiveAppBar from './NavbarWeb'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import servimg from './Images/imgServ.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import { purple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import map from './Images/map.png';


function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: '#fa9805',
        '&:hover': {
            backgroundColor: '#FEA116',
        },
    }));

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
                            Contact Us
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
                display: 'flex',
                justifyContent: 'center',
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
                        marginBottom: '30px'
                    }}>
                        Contact For Any Query
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={4} lg={4}>
                    <Box sx={{
                        color: '#FEA116',
                        fontSize: '25px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        Booking
                        <Box sx={{
                            borderTop: '2px solid #fea116',
                            width: '40px',
                            marginLeft: '5px'
                        }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#666565',
                        marginBottom: '20px'
                    }}>
                        <EmailIcon sx={{ color: '#fea116', marginRight: '10px' }} />book@example.com
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={4} lg={4}>
                    <Box sx={{
                        color: '#FEA116',
                        fontSize: '25px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        General
                        <Box sx={{
                            borderTop: '2px solid #fea116',
                            width: '40px',
                            marginLeft: '5px'
                        }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#666565',
                        marginBottom: '20px'
                    }}>
                        <EmailIcon sx={{ color: '#fea116', marginRight: '10px' }} />info@example.com
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={4} lg={4}>
                    <Box sx={{
                        color: '#FEA116',
                        fontSize: '25px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        Technical
                        <Box sx={{
                            borderTop: '2px solid #fea116',
                            width: '40px',
                            marginLeft: '5px'
                        }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#666565',
                        marginBottom: '20px'
                    }}>
                        <EmailIcon sx={{ color: '#fea116', marginRight: '10px' }} />tech@example.com
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={6} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px',
                }}>
                    <Box sx={{
                        width: '100vw',
                        height: '350px',
                        backgroundImage: `url(${map})`,
                    }} />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignContent: 'center',
                    padding: '20px',
                }}>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: isSmallScreen ? '17.5ch' : isMediumScreen ? '20ch' : '27ch' }, color: 'black' }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" label="Your Name" variant="filled" />
                        <TextField id="filled-basic" label="Your Email" variant="filled" />
                    </Box>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: isSmallScreen ? '37ch' : isMediumScreen ? '42ch' : '55.8ch' }, color: 'black' }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" label="Subject" variant="filled" />
                    </Box>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: isSmallScreen ? '37ch' : isMediumScreen ? '42ch' : '55.8ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="filled-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                variant="filled"
                            />
                        </div>
                    </Box>
                    <Stack spacing={0} direction="row">
                        <ColorButton variant="contained">Send Message</ColorButton>
                    </Stack>
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </>


    )
}

export default Contact;
