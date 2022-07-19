import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  components: {
    // Name of the component
    CustomCheckbox: {
      styleOverrides: {
        // Name of the slot
        root: {
          background: 'red',
          width: '4em',
        },
        checked: {
        //   color: 'yellow',
          background: 'green',
        },
      },
    },
  },
});

const CustomCheckbox = styled(Checkbox, {
  name: 'CustomCheckbox',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => {
    console.log(props);
    console.log(styles);
    return [
    styles.root,
    styles.checked,
  ]},
})(({theme}) => {
  return {
  background: 'red',
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}});

const MyCustomCheckbox = (props) => {
  return (
      <ThemeProvider theme={theme}>
       <CustomCheckbox {...props} />
     </ThemeProvider>
  );
};

export default MyCustomCheckbox;


//usage
{/* <CustomCheckbox defaultChecked something='true' /> */}