import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import CardMedia from '@material-ui/core/CardMedia';
import { Box,
	Breadcrumbs,
	Container,
	Grid,
	Typography,Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor:'#e34234'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  media:{
    height: '3em',
    width:'3em',
    borderRadius:30
  }
});

export default function CovidCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  const date = new Date(props.data.updated)


  return (
    <Card className={classes.root}>
      <CardContent>
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
        <Typography className={classes.title} color="textSecondary" style={{color:"white",fontWeight:"bold"}} gutterBottom>
          {`Covid cases in India`}
        </Typography>
        <CardMedia
          className={classes.media}
          image={'https://disease.sh/assets/img/flags/in.png'}
        />
        </Grid>
        <Typography variant="h5" component="h2" style={{color:"white"}}>
          {`Total active cases : ${props.data.active}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" style={{color:"white"}}>
          {`Recoverd🎉${props.data.recovered}`}
        </Typography>
        <Typography variant="body2" component="p" style={{color:"white"}}>
          {`Total cases:${props.data.cases}`}
          <br />
          {`Critical:${props.data.critical}`}
        </Typography>
        <Typography variant="h6" component="p" style={{color:"white"}}>
          {`Last Update:${date}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="contained" href="/StateDataTable" >States Covid cases</Button>
      </CardActions>
    </Card>
  );
}
