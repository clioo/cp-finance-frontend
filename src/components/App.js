import React, { Component } from 'react';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';

class App extends Component {
  render() {
    const isUserLogged = false;

    return (
      <ThemeProvider theme={theme}>
        <Header isUserLogged={isUserLogged} margin={theme.spacing}></Header>
        {[...new Array(20)]
                        .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
      </ThemeProvider>
    );
  }
}

export default App;
