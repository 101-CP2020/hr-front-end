import './App.css';
import { ThemeProvider, Grid, Container } from '@material-ui/core';
import { theme } from './theme';
import Header from './components/Header/Header';
import Prototype from './components/Prototype/Prototype';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Prototype type="header"/>
          <Container>
              <Grid container>
                  <Grid container item xs={8} className="col-left">
                        <Prototype type="statystic"/>
                        <Table />
                  </Grid>
                  <Grid container item xs={4} className="col-right">
                      <Prototype type="graf1"/>
                      <Prototype type="graf2"/>
                  </Grid>
              </Grid>
          </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
