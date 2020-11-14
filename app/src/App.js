import './App.css';
import { ThemeProvider, Grid, Container, Paper, Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { theme } from './theme';
import Prototype from './components/Prototype/Prototype';
import Table from './components/Table/Table';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Prototype type="header"/>
          <Container>
              <Grid container>
                  <Grid container item xs={8} className="col-left">
                      <Prototype type="statystic"/>
                      <Paper className="main-table">
                          <Typography className="subtitle" variant='subtitle1'>
                              Вакансии в регионе
                              <ArrowForward/>
                          </Typography>
                          <Filter options={[
                              {
                                  id: 1,
                                  label: 'По отрасли'
                              },
                              {
                                  id: 2,
                                  label: 'По специальности'
                              }
                          ]}/>
                        <Table />
                      </Paper>
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
