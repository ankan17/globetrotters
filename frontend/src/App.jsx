import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";

const App = () => (
  <Grid container direction="column">
    <Grid item>
      <Header />
    </Grid>
    <Grid item container style={{ minHeight: "calc(100vh - 128px)" }}>
      <Content />
    </Grid>
    <Grid item>
      <Footer />
    </Grid>
  </Grid>
);

export default App;
