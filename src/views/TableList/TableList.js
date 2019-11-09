import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Sup from "/Users/bobbikerei/Documents/GitHub/dashboard/src/assets/img/sup.png";
//import Trademe from "/Users/bobbikerei/Documents/GitHub/dashboard/src/assets/img/trademe.png";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    },
    image: {
      flex: 1,
      width: 100,
      height: 50,
      resizeMode: 'contain' }
  }
  
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>SUP app</h4>
            <p className={classes.cardCategoryWhite}>
              App content and Google store profile.
            </p>
          </CardHeader>
       
          <CardBody>
            <box>
          <img src={Sup} width= "50%"/>         
        </box>
              <p className={classes.description}>
              In October 2018 I started at Enspirial dev academy and during my time 
              I bounced between Scum Master, Project Manager, Content writer and Front end Developer. For my final group project I was the Project manager and content writer 
              for SUP was a passion project to help homeless people in Wellington find food and shelter,easily in the Wellington region. My job was to write all the content, scum master, motivate and present the project at graduation. 
              After graduation presented the project to Trade Me at Friday Lightening talks. I then picked up the project and made into into an app that is on the Google Play Store. Just click <a href="https://play.google.com/store/apps/details?id=com.sup.whats_sup&fbclid=IwAR36fJOhYanI4E0pYup_CRxkHYY01n7eEuhgoqbpZXf70iIGcSAloOqPSdo">here.</a>
              </p>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Address Verfication
            </h4>
            <p className={classes.cardCategoryWhite}>
              Training documents, Advocate and Macro writer.
            </p>
          </CardHeader>
          <CardBody>
          <box>
          <img src={Sup} width= "50%"/>   
        </box>
              <p className={classes.description}>
              I started at Trade Me in 2012 shortly after the process of Address Verfications was given to me. I learnt the process directly from the people who were doing it before and then
              went on to train the rest of my team in the process. To help me with that I wrote training documents and then later on rewriting the Macros we were using to make them kinder and worded better to help members self service. 
              I spent the next 6 years, training multiple staff members, updating Macros and advocating for the process to be fixed, updated and removed. I was even the content writer for the process called <b>Kill AV's</b>, we created an app that replaces the the process. 
              Due to the nature of the process, I was removed from the Trade Me system when I left in April 2019 so what I can pass onto you is scsreenshots of my orginal work which I have put in a <a href ="https://docs.google.com/document/d/1TbYQC2JBF0bNj8ftP3ppSdlpmVcpGeLxjuRKB5gbqik/edit?usp=sharing">Google Document here.</a> If you would like a PDF version just reach out and I can pass that on to you :)
              </p>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Other work</h4>
            <p className={classes.cardCategoryWhite}>
              Project/Site Advocate and Process bulider
            </p>
          </CardHeader>
       
          <CardBody>
            <box>
          <img src={Sup} width= "50%"/>         
        </box>
              <p className={classes.description}>
              During my time at Trade Me I help advacte and education for the rewards process, were a merchant 
              gets a free t-shirt when they hit 500 postivie feedback. I was in charge of training and communicating 
              with the third party company who sent the shirts out.
              </p> 
              <p>
                I also advocated for the dating site FindSomeone. The site has no technical support so while doing 
                customer service for the members, I would find devlopers and testers to fix issues. I networked with 
                the wider compaany to make sure the site had support and I was the go to for everything FindSomeone related.
               I also trained and created training documents for the customer service side of the site.
              </p>
              <p>I also particpated in Hack days for Trade Me in 2018. I was project manager for two projects, <b>Kill AV's</b> and <b>Stop Motors Timeouts</b>. 
              I was in charge of communicating the what, 
              where how and why of the projects prior to starting. I spent the 24 hours researching the impact that 
              These charges would make to the wider company. I also created Google slides and presented both projects to the whole company. 
              </p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
