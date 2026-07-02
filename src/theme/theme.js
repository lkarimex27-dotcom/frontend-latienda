import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#E91E63',      // Rosa principal
      light: '#F48FB1',
      dark: '#C2185B',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#F8BBD0',      // Rosa pastel
      light: '#FCE4EC',
      dark: '#EC407A',
      contrastText: '#880E4F',
    },

    background: {
      default: '#FFF5F8',   // Fondo rosado muy claro
      paper: '#FFFFFF',
    },

    text: {
      primary: '#4A2C3A',
      secondary: '#8A6A78',
    },

    divider: '#F3D6E0',

    success: {
      main: '#66BB6A',
    },

    error: {
      main: '#EF5350',
    },

    warning: {
      main: '#FFA726',
    },

    info: {
      main: '#42A5F5',
    },
  },

  shape: {
    borderRadius: 14,
  },

  typography: {
    fontFamily: '"Poppins", "Inter", sans-serif',

    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(233,30,99,0.08)',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#E91E63',
          boxShadow: '0 4px 12px rgba(233,30,99,.2)',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingLeft: 18,
          paddingRight: 18,
          fontWeight: 600,
        },

        containedPrimary: {
          background: 'linear-gradient(135deg,#EC407A,#E91E63)',

          '&:hover': {
            background: 'linear-gradient(135deg,#E91E63,#D81B60)',
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            backgroundColor: '#FCE4EC',
            color: '#880E4F',
            fontWeight: 700,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },

    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;