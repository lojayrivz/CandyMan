import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto"
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  paper2: {
    padding: theme.spacing.unit * 1,
    textAlign: "left",
    color: theme.palette.text.secondary
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Inventory" />
            <Tab label="Sales" />
            <Tab label="Profit" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <div className={classes.root}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Typography variant="title">2019/05/13 04:07:25</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper2}>
                    <Typography variant="subheading">
                      <center>Initial</center>
                    </Typography>
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper2}>
                    <Typography variant="subheading">
                      <center>Final</center>
                    </Typography>
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div className={classes.root}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Typography variant="title">2019/05/13 04:07:25</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper2}>
                    <Typography variant="subheading">
                      <center>Today's Sales</center>
                    </Typography>
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper2}>
                    <Typography variant="subheading">
                      <center>Weekly Sales</center>
                    </Typography>
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab xs=6
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper2}>
                    <Typography variant="subheading">
                      <center>Cumulative Sales</center>
                    </Typography>
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab xs=6
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div className={classes.root}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Typography variant="title">2019/05/13 04:07:25</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper2}>
                    <Typography variant="subheading">
                      <center>Profit/Loss</center>
                    </Typography>
                    xs=6
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper2}>
                    <Typography variant="subheading">
                      <center>Overall Profit/Loss</center>
                    </Typography>
                    xs=6
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                    <br />
                    adjwskabdsdjfab
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
