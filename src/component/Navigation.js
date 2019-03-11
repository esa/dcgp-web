import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import DcgpLogo from './DcgpLogo';
import GitHubIcon from './GitHub';

const StyledTabs = withStyles({
  root: {
    backgroundColor: '#D5D6D2',
    color: '#000000',
  },
})(AppBar);

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Navigation = ({
  routes,
  routeIndex,
  handleRouteChange,
  handleMenuToggle,
  classes,
  theme,
}) => {
  const isLargerThenMedium = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <DcgpLogo
            css="height: 1.2em;"
            aria-label="dcgp"
            full={isLargerThenMedium}
          />
          <div css="flex-grow: 1;" />
          <IconButton
            color="inherit"
            href="https://github.com/mikeheddes/dcgp.js"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <StyledTabs position="static" elevation={0} className={classes.tabs}>
        <Tabs value={routeIndex} onChange={handleRouteChange}>
          {routes.map(({ label, path }) => (
            <Tab key={label} label={label} component={Link} to={path} />
          ))}
        </Tabs>
      </StyledTabs>
    </>
  );
};

Navigation.propTypes = {
  routeIndex: PropTypes.number.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  handleRouteChange: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(Navigation);
