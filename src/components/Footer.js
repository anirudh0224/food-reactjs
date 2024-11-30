import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Footer() {
    return (
        <div>
            <Grid container sx={{
                margin: 'auto',
                width: '85%',
                height: '100%',
                backgroundColor: '#0F172B',
                padding: '10px',
                paddingTop: '50px'
            }}>
                <Grid xs={12} sm={12} md={6} lg={3} sx={{
                    padding: '20px'
                }}>
                    <Box sx={{
                        color: 'white',
                        fontSize: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }}>
                        Compnay
                        <Box sx={{
                            borderTop: '1px solid #FEA116',
                            width: '40px',
                            marginLeft: '5px',
                        }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', '&:hover': { letterSpacing: '2px', transition: '.4s' }, marginBottom: '10px' }}>
                        <KeyboardArrowRightIcon sx={{ color: 'white' }} />
                        <Box sx={{ color: 'white' }}>About US</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', '&:hover': { letterSpacing: '2px', transition: '.4s' }, marginBottom: '10px' }}>
                        <KeyboardArrowRightIcon sx={{ color: 'white' }} />
                        <Box sx={{ color: 'white' }}>Privacy Policy</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', '&:hover': { letterSpacing: '2px', transition: '.4s' }, marginBottom: '10px' }}>
                        <KeyboardArrowRightIcon sx={{ color: 'white' }} />
                        <Box sx={{ color: 'white' }}>Contact</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', '&:hover': { letterSpacing: '2px', transition: '.4s' }, marginBottom: '10px' }}>
                        <KeyboardArrowRightIcon sx={{ color: 'white' }} />
                        <Box sx={{ color: 'white' }}>Reservation</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', '&:hover': { letterSpacing: '2px', transition: '.4s' }, marginBottom: '10px' }}>
                        <KeyboardArrowRightIcon sx={{ color: 'white' }} />
                        <Box sx={{ color: 'white' }}>Term & Condition</Box>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={3} sx={{
                    padding: '20px'
                }}>
                    <Box sx={{
                        color: 'white',
                        fontSize: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }}>
                        Contact
                        <Box sx={{
                            borderTop: '1px solid #FEA116',
                            width: '40px',
                            marginLeft: '5px',
                        }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <LocationOnIcon sx={{ color: 'white' }} />
                        <Box sx={{ color: 'white', marginLeft: '10px', letterSpacing: '1px' }}>123 Street,New York,USA</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <LocalPhoneIcon sx={{ color: 'white' }} />
                        <Box sx={{ color: 'white', marginLeft: '10px', letterSpacing: '1px' }}>+012 345 67890</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <EmailIcon sx={{ color: 'white' }} />
                        <Box sx={{ color: 'white', marginLeft: '10px', letterSpacing: '1px' }}>info@example.com</Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                    }}>
                        <Box className="boxicon" sx={{
                            border: '1px solid white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px',
                            '&:hover': {
                                color: '#FEA116',
                                backgroundColor: 'white'
                            }
                        }}>
                            <TwitterIcon className='iconFooter' />
                        </Box>
                        <Box className="boxicon" sx={{
                            border: '1px solid white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px',
                            '&:hover': {
                                color: '#FEA116',
                                backgroundColor: 'white'
                            }
                        }}>
                            <FacebookOutlinedIcon className='iconFooter' />
                        </Box>
                        <Box className="boxicon" sx={{
                            border: '1px solid white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px',
                            '&:hover': {
                                color: '#FEA116',
                                backgroundColor: 'white'
                            }
                        }}>
                            <YouTubeIcon className='iconFooter' />
                        </Box>
                        <Box className="boxicon" sx={{
                            border: '1px solid white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px',
                            '&:hover': {
                                color: '#FEA116',
                                backgroundColor: 'white'
                            }
                        }}>
                            <LinkedInIcon className='iconFooter' />
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={3} sx={{
                    padding: '20px'
                }}>
                    <Box sx={{
                        color: 'white',
                        fontSize: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }}>
                        Opening
                        <Box sx={{
                            borderTop: '1px solid #FEA116',
                            width: '40px',
                            marginLeft: '5px',
                        }}
                        />
                    </Box>
                    <Box sx={{ color: 'white', letterSpacing: '1px', fontSize: '25px' }}>Monday - Saturday</Box>
                    <Box sx={{ color: 'white', letterSpacing: '1px', marginBottom: '10px' }}>09AM - 09PM</Box>
                    <Box sx={{ color: 'white', letterSpacing: '1px', fontSize: '25px' }}>Sunday</Box>
                    <Box sx={{ color: 'white', letterSpacing: '1px' }}>10AM - 08PM</Box>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={3} sx={{
                    padding: '20px'
                }}>
                    <Box sx={{
                        color: 'white',
                        fontSize: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }}>
                        Newsletter
                        <Box sx={{
                            borderTop: '1px solid #FEA116',
                            width: '40px',
                            marginLeft: '5px',
                        }}
                        />
                    </Box>
                    <Box sx={{ color: 'white', letterSpacing: '1px', marginBottom: '10px' }}>Dolor amet sit justo amet elitr clita ipsum elitr est.</Box>
                    <Typography variant='type-text' sx={{
                        color: 'white'
                    }}>


                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                            noValidate
                            autoComplete="off">
                            <TextField id="outlined-basic" label="your email" variant="outlined" />
                            <Stack spacing={2} direction="row">
                                <Button variant="contained">SIGNUP</Button>
                            </Stack>
                        </Box>

                    </Typography>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} sx={{ borderTop: '1px solid white' }}></Grid>
                <Grid xs={12} sm={12} md={12} lg={8} sx={{ padding: ' 20px', display: 'flex', alignItems: 'center', color: 'white', wordSpacing: '2px' }} >
                    <CopyrightIcon sx={{ color: 'white' }} /> <u style={{ color: 'white' }}>Your Site Name,</u>  All Right Reserved. Designed By <u>Anirudh Sakhat</u>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={4} sx={{ padding: '0px 20px', display: 'flex', alignItems: 'center', color: 'white', wordSpacing: '2px', display: 'flex', justifyContent: 'end' }} >
                    <Typography sx={{ color: 'white', borderRight: '1px solid white', padding: '5px' }} >Home</Typography>
                    <Typography sx={{ color: 'white', borderRight: '1px solid white', padding: '5px' }} >Cookies</Typography>
                    <Typography sx={{ color: 'white', borderRight: '1px solid white', padding: '5px' }} >Help</Typography>
                    <Typography sx={{ color: 'white', borderRight: '1px solid white', padding: '5px' }} >FQAs</Typography>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} sx={{ color: 'white', padding: '0px 20px' }} >
                    <Typography>Distributed By <u>Parthiv</u> </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
