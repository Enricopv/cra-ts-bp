
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { MuiThemeProvider } from '@material-ui/core/styles'
import * as React from 'react'
import Routes from '../Routes'
// import { greyColor } from '../theme/colors'
// import { orange } from '@material-ui/core/colors'
import pink from '@material-ui/core/colors/pink'
import grey from '@material-ui/core/colors/grey'

// ? Declare new theme variables
declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    custom?: {
      colors?: {
        inputUnderline?: string,
        referral: string
      }
    },
    modal?: {
      padding?: number
    }
  }
}

// Edit Original MUI Settings
function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    overrides: {
      MuiInputLabel: {
        // root: {
        //   color: 'orange',
        //   '&:focus': {
        //     color: 'green'
        //   }
        // },
        // shrink: {
        //   color: 'brown',
        //   '&cssFocused': {
        //     color: 'orange'
        //   }
        // },
      },
      MuiInput: {
        underline: {
          '&:before': {
            borderBottomColor: grey[400]
          },
          '&:hover:not($disabled):not($error):not($focused):before': {
            borderBottomColor: grey[800]
          },
          '&:after': {
            borderBottomColor: grey[600],
          },
        }
      }
    },
    typography: {
      fontFamily: 'Poppins'
    },
    palette: {
      background: {
        default: "#ECF5F8"
      }
    },
    ...options,
  })
}

// ?? Add new theme variables
const theme = createMyTheme({
  custom: {
    colors: {
      // inputUnderline: grey[600]
      referral: pink[500]
    }
  },
  modal: {
    padding: 30
  }
})

const SetupTheme = (props: any) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes {...props} />
    </MuiThemeProvider>
  )
}

export default SetupTheme
