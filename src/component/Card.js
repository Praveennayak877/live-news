import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop:'1em',
    marginBottom:'1em'
  },
  media: {
    height: '15em',
  },
});

export default function CardComponent(props) {
  const classes = useStyles();
// console.log('news props---',props)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.news.url}
          title={props.news.author}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
           {props.news.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="p" style={{marginTop:'1.4em'}}>
            {  props.news.author !== null ? 'AUTHOR:' + props.news.author : null }
          </Typography>
          <Typography gutterBottom variant="caption" component="p" style={{marginTop:'0.7em',color:'#e34234'}}>
            {  props.news.source !== null ? 'SOURCE:' + props.news.source : null }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" href={props.news.url} >
          Learn More
        </Button>

      </CardActions>
    </Card>
  );
}
