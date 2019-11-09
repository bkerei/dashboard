import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Store from "@material-ui/icons/Store";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>grade</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>To Be Creative</p>
             
            </CardHeader>
           
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>To be a Constant Learner</p>
            </CardHeader>
           
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>favorite</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>To Be Kind</p>
             
            </CardHeader>
           
          </Card>
        </GridItem>
       
      </GridContainer>
     
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          
        </GridItem>
        <GridItem>
          <h1><b>I decided to do something different...</b></h1>
          <h4> Instead of sending you links to everything, I decided to play to my strengths and made you this site! And introduce myself to you through my Core values at the top of this page :)
           As requested, I've include my Resume, my previous content plus a Guru card and Bridge course I'd created.
           </h4>
           <h4>
             I love feedback!! If you'd like to pass any on or you have any questions feel free to either Slack me on <b>@bob</b> or pop me an email on <b>bobbi.kerei@shopify.com</b></h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
