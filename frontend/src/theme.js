import { createTheme } from '@mui/material/styles';
import { COLOUR_PRIMARY, COLOUR_SECONDARY, COLOUR_GREY_1, COLOUR_GREY_2, COLOUR_GREY_3, COLOUR_WHITE } from './assets';
const theme = createTheme({
    palette: {
        primary: {
          main: COLOUR_PRIMARY,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          main: COLOUR_SECONDARY,
        },
      },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    color: {
        grey: { 
            one: COLOUR_GREY_1,
            two: COLOUR_GREY_2,
            three: COLOUR_GREY_3,
        }
    },
    btn: {
        primary: {
            background: COLOUR_WHITE,
            padding: '.5rem 2rem',
            borderRadius: '20rem',
            marginLeft: '2rem',
            color: COLOUR_PRIMARY,
            border: `.15rem solid ${COLOUR_WHITE}`,
            '&:focus': {
                outline: 'none',
                border: `.15rem solid ${COLOUR_PRIMARY}`
            },
            '&:hover': {
                boxShadow: `1px 1px 1px ${COLOUR_GREY_2}`
            }
        }
    }
});

export default theme