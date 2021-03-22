import './App.css';
import { Container , AppBar , Typography , Grow , Grid } from '@material-ui/core'

import memories from './assets/images/memories.jpg';

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles';
const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">Memories</Typography>
          <img src={memories} alt="memories" height="60" />
        </AppBar> 
        <Grow in>
          <Grid container justify="space-between" alignment="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Grow>
    </Container>
  );
}

export default App;
