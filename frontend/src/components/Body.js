import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Post from './Post';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
      padding: '10px',
      backgroundColor: "lightgray",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Body({body}) {
  const classes = useStyles();
let clinics = <h2> no data </h2>
  if (body) {
      clinics = body.map(data =>
          <Grid item xs={4}>
          <Post name={data.name} city={data.city} state={data.state} doctors={data.doctors} />
       </Grid>
      )
      }
  else {

  }
  return (
     <div className={classes.root}>
      <Grid container spacing={1}>
        {clinics}
      </Grid>
    </div>
  );
}
