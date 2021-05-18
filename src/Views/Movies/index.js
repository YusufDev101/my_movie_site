import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import bmw from '../../resources/bmw.jpg'

const useStyles = makeStyles({
  image:{
    width: '100%',
    height: '20%'
  },
  root: {
    marginTop: 50,
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Movies = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

  return (
    <Card className={classes.root} variant="outlined">
  <img src={bmw} alt="Logo"  className={classes.image} />;
    </Card>
  );
}

export default Movies