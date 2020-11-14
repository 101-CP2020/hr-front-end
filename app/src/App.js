import './App.css';
import { ThemeProvider, Grid, Container, Paper, Typography, Link } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { theme } from './theme';
import Prototype from './components/Prototype/Prototype';
import Table from './components/Table/Table';
import Filter from './components/Filter/Filter';
import HeadRow from './components/HeadRow/HeadRow';
import {useState, useEffect} from 'react'

function App() {
    const [groupBy, setGroupBy] = useState(1);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.example.com/items?groupBy="+groupBy)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setItems(result);
                },
                (error) => {
                    alert(error)
                }
            )
    }, [groupBy]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Prototype type="header"/>
          <Container>
              <HeadRow/>
              <Grid container>
                  <Grid container item xs={8} className="col-left">
                      <Prototype type="statystic"/>
                      <Paper className="main-table">
                          <Typography className="subtitle" variant='subtitle1'>
                              Вакансии в регионе
                              <ArrowForward/>
                          </Typography>
                          <Filter onChange={(id) => setGroupBy(id)} options={[
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
