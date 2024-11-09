import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, Snackbar } from '@mui/material';
import RouterMain from './router';

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

const App = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  // Function to show the snackbar
  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <SnackbarContext.Provider value={showSnackbar}>
        <Router>
         <RouterMain/>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSnackbarOpen(false)}
            message={snackbarMessage}
          />
        </Router>
      </SnackbarContext.Provider>
    </ThemeProvider>
  );
};

export default App;
