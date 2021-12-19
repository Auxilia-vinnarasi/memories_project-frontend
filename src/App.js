import React, { useState,useEffect } from "react"; //initially its going to be the just component that mount later its become component well update
import { Container, Typography, Grid, AppBar, Grow } from "@material-ui/core";
import memories from "./images/memories.png";

import {getPosts} from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
//with hooks we can use redux much easily
//import hook from react-redux
import { useDispatch } from "react-redux"; //this allows us to do dispatch and actions;

const App = () => {
  const[currentId,setCurrentId]=useState(null);
  const classes = useStyles();
  const dispatch = useDispatch(); //where we are going to diapatch the action? inside useEffect

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          {/*gives nice looking font*/}
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        {/*it gives some nice animations*/}
        <Container>
          <Grid className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>  
    </Container>
  );
};

export default App;
