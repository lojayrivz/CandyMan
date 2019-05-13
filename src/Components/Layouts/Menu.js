import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InventoryIcon from "@material-ui/icons/Kitchen";
import SalesIcon from "@material-ui/icons/ShowChart";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import OrderIcon from "@material-ui/icons/HowToVote";
import AddIcon from "@material-ui/icons/NoteAdd";
import ExpenseIcon from "@material-ui/icons/Money";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const sideList = (
      <div className={root}>
        <Divider />
        <Typography variant="title">
          <center>Candy Man</center>
        </Typography>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SalesIcon />
            </ListItemIcon>
            <ListItemText primary="Sales" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Profit" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <OrderIcon />
            </ListItemIcon>
            <ListItemText primary="Order/Receive Stock" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Transaction" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExpenseIcon />
            </ListItemIcon>
            <ListItemText primary="Expenses" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.toggleDrawer("left", true)}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={this.state.left}
              onClose={this.toggleDrawer("left", false)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer("left", false)}
                onKeyDown={this.toggleDrawer("left", false)}
              >
                {sideList}
              </div>
            </Drawer>
            <Typography variant="h6" color="inherit">
              CandyMan
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer);
