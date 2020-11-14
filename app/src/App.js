import './App.css';
import { ThemeProvider, Grid, Container, Paper, Typography, CircularProgress } from '@material-ui/core';
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
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+"?groupBy="+groupBy)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.status) {
                        setError(result.message);
                    } else {
                        setItems(Object.values(result));
                    }
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
                                  label: 'По специальности'
                              },
                              {
                                  id: 2,
                                  label: 'По отрасли'
                              }
                          ]}/>
                          {items.length ? <Table rows={items} /> : (
                              error ? <Typography variant='h6'>{error}</Typography> : <CircularProgress />
                          )}
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
