// import muiTheme from 'styles/customized-mui-theme';

import jss from 'jss'

const styles = {
  container: {
      width: '80%',
      margin: 'auto',
      backgroundColor: 'antiquewhite',
  },
    flexContainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
