import React, { useEffect } from 'react';
import ResponsiveAppBar from './NavbarWeb'
import { Box, Grid, Typography } from '@mui/material';
import servimg from './Images/imgServ.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import menu1 from './Images/menu-1.jpg';
import menu2 from './Images/menu-2.jpg';
import menu3 from './Images/menu-3.jpg';
import menu4 from './Images/menu-4.jpg';
import menu5 from './Images/menu-5.jpg';
import menu6 from './Images/menu-6.jpg';
import menu7 from './Images/menu-7.jpg';
import menu8 from './Images/menu-8.jpg';


function Menu() {
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
                            Menu item list
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
                            Our Item's
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
                        Explore Our dishes
                    </Box>
                </Grid>
                <Grid lg={12} md={12} sm={12} xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '2px solid #FEA116'
                    }}>
                        <FreeBreakfastIcon sx={{ fontSize: '50px', color: '#FEA116' }} />
                        <Typography variant='p' sx={{ margin: '0px 10px' }}>
                            Popular <br /> <b>Breakfast</b>
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '1px solid #666565',
                    }}>
                        <LunchDiningIcon sx={{ fontSize: '50px', color: '#FEA116' }} />
                        <Typography variant='p' sx={{ margin: '0px 10px' }}>
                            Special <br /> <b>Launch</b>
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '1px solid #666565'
                    }}>
                        <RestaurantIcon sx={{ fontSize: '50px', color: '#FEA116' }} />
                        <Typography variant='p' sx={{ margin: '0px 10px' }}>
                            Lovely <br /> <b>Dinner</b>
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={6} lg={6} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '10px 0px',
                }}>
                    <Box sx={{
                        backgroundImage: `url(${menu1})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'cover',
                    }} />
                    <Box sx={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <Typography variant='h5' sx={{ fontSize: '20px', marginLeft: '20px' }}>
                            Fry Vegitable <b style={{ marginLeft: '100px', color: '#FEA116', fontSize: '30px' }}>150</b> <hr style={{ margin: '0px', margin: '10px 0px 5px' }} /> <p style={{ margin: '0px', fontSize: '15px' }}> Ipsum ipsum clita erat amet dolor justo diam</p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={6} lg={6} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '10px 0px',
                }}>
                    <Box sx={{
                        backgroundImage: `url(${menu2})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'cover',
                    }} />
                    <Box sx={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <Typography variant='h5' sx={{ fontSize: '20px', marginLeft: '20px' }}>
                            Fry Vegitable <b style={{ marginLeft: '100px', color: '#FEA116', fontSize: '30px' }}>150</b> <hr style={{ margin: '0px', margin: '10px 0px 5px' }} /> <p style={{ margin: '0px', fontSize: '15px' }}> Ipsum ipsum clita erat amet dolor justo diam</p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={6} lg={6} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '10px 0px',
                }}>
                    <Box sx={{
                        backgroundImage: `url(${menu3})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'cover',
                    }} />
                    <Box sx={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <Typography variant='h5' sx={{ fontSize: '20px', marginLeft: '20px' }}>
                            Fry Vegitable <b style={{ marginLeft: '100px', color: '#FEA116', fontSize: '30px' }}>150</b> <hr style={{ margin: '0px', margin: '10px 0px 5px' }} /> <p style={{ margin: '0px', fontSize: '15px' }}> Ipsum ipsum clita erat amet dolor justo diam</p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={6} lg={6} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '10px 0px',
                }}>
                    <Box sx={{
                        backgroundImage: `url(${menu4})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'cover',
                    }} />
                    <Box sx={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <Typography variant='h5' sx={{ fontSize: '20px', marginLeft: '20px' }}>
                            Fry Vegitable <b style={{ marginLeft: '100px', color: '#FEA116', fontSize: '30px' }}>150</b> <hr style={{ margin: '0px', margin: '10px 0px 5px' }} /> <p style={{ margin: '0px', fontSize: '15px' }}> Ipsum ipsum clita erat amet dolor justo diam</p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={6} lg={6} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '10px 0px',
                }}>
                    <Box sx={{
                        backgroundImage: `url(${menu5})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'cover',
                    }} />
                    <Box sx={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <Typography variant='h5' sx={{ fontSize: '20px', marginLeft: '20px' }}>
                            Fry Vegitable <b style={{ marginLeft: '100px', color: '#FEA116', fontSize: '30px' }}>150</b> <hr style={{ margin: '0px', margin: '10px 0px 5px' }} /> <p style={{ margin: '0px', fontSize: '15px' }}> Ipsum ipsum clita erat amet dolor justo diam</p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={6} lg={6} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '10px 0px',
                }}>
                    <Box sx={{
                        backgroundImage: `url(${menu6})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'cover',
                    }} />
                    <Box sx={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <Typography variant='h5' sx={{ fontSize: '20px', marginLeft: '20px' }}>
                            Fry Vegitable <b style={{ marginLeft: '100px', color: '#FEA116', fontSize: '30px' }}>150</b> <hr style={{ margin: '0px', margin: '10px 0px 5px' }} /> <p style={{ margin: '0px', fontSize: '15px' }}> Ipsum ipsum clita erat amet dolor justo diam</p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={6} lg={6} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '10px 0px',
                }}>
                    <Box sx={{
                        backgroundImage: `url(${menu7})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'cover',
                    }} />
                    <Box sx={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <Typography variant='h5' sx={{ fontSize: '20px', marginLeft: '20px' }}>
                            Fry Vegitable <b style={{ marginLeft: '100px', color: '#FEA116', fontSize: '30px' }}>150</b> <hr style={{ margin: '0px', margin: '10px 0px 5px' }} /> <p style={{ margin: '0px', fontSize: '15px' }}> Ipsum ipsum clita erat amet dolor justo diam</p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} md={6} lg={6} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '10px 0px',
                }}>
                    <Box sx={{
                        backgroundImage: `url(${menu8})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'cover',
                    }} />
                    <Box sx={{
                        width: '100%',
                        padding: '10px'
                    }}>
                        <Typography variant='h5' sx={{ fontSize: '20px', marginLeft: '20px' }}>
                            Fry Vegitable <b style={{ marginLeft: '100px', color: '#FEA116', fontSize: '30px' }}>150</b> <hr style={{ margin: '0px', margin: '10px 0px 5px' }} /> <p style={{ margin: '0px', fontSize: '15px' }}> Ipsum ipsum clita erat amet dolor justo diam</p>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </>


    )
}

export default Menu;
