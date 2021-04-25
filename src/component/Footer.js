import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link  style={{color:"#e34234"}} >
        RAMDOM PARTNER
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container> */}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Get updated with us. your<h3 style={{color:'#e34234'}}>RANDOM PARTNER</h3> </Typography>
        <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
>
       <Link href="https://www.linkedin.com/in/praveen-nayak/" > <LinkedInIcon /> </Link> 
       <Link href="https://github.com/Praveennayak877" color="textPrimary" ><GitHubIcon /></Link>  
       <Link href="https://www.youtube.com/channel/UCopCCIygD-vHw2iHGC8b4Rw" color="error"><YouTubeIcon /></Link>
       <Link href="https://www.instagram.com/_ronni3/" color="error"><InstagramIcon /></Link>
       <Link href="https://twitter.com/praveenayak15"><TwitterIcon /></Link>
        </Grid>

          <Copyright />
        </Container>
      </footer>
    </div>
  );
}