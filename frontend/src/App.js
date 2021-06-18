import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingComponent from './components/Loading';
import Body from './components/Body';
import {makeStyles} from "@material-ui/core/styles";

    const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
      padding: '10px',
      backgroundColor: "lightgray",
  },
}));

function App(){
    const classes = useStyles();
  const Loading = LoadingComponent(Body);
  const [appReady, setAppReady] = useState({
    loading: false,
    body:null,
  })

  useEffect(() => {
    setAppReady({ loading: true });
    const apiURL = 'http://127.0.0.1:8000/clinics/';
    fetch(apiURL)
        .then((data) => data.json() )
        .then((body) => {
          setAppReady({
            loading: false,
            body: body,
          });
        });

  },[setAppReady]);
console.log('data', appReady.body)
  return (
      <div className={classes.root}>
          <h1> Clinics </h1>
        <Loading isLoading={appReady.loading} body={appReady.body} />
      </div>
  )
}


export default App;

