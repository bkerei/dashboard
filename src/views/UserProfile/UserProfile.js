import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>History</h4>
              <p className={classes.cardCategoryWhite}>Work and Education</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={10}>
                <InputLabel style={{ color: "#AAAAAA" }}>Education and Training</InputLabel>
                <b>Different courses through Trade Me Trade Me HR training Wellington,
                New Zealand / From August 2012 to February 2019</b>
                <p>Through working at Trade Me I've done one and two-day courses in Squad
                Master Agile practices, Resilences, Courageous conversations, Emotional
                intelligence, Speechcraft and Dealing with difficult behaviour.</p>
                <b>Phase 0 and Bootcamp Enspirial Dev Academy Enspirial Dev Academy
                Wellington, New Zealand / From August 2018 to December 2018</b>
                <p>I learnt Full Stack devleopement usiing React framework. My own self directed study and
                group projects lead to learning Google API's, Leaflet and bit of TypeScript and
                Angular.</p>
                <b>Diploma in Commercial Broadcasting New Zealand Radio Training School
                Wellington, New Zealand / From January 2000 to July 2000</b>
                <p>Radio DJ and sound production. Learned about music software and audio
                editing systems.</p>
                <b>School Certifcate Mount Maunganui College Mount Maunganui, New
                Zealand / From January 1998 to January 1999</b>
                <p>Achieved passes in English, History, Geography and Music</p>
                <InputLabel style={{ color: "#AAAAAA" }}>Work History</InputLabel>
                <b>Customer Service Representative Trade Me Ltd Wellington, New Zealand /
                Since August 2012</b>
                <p>My main responsibility is looking after our members who make contact
                through email via our CRM or over the phone using Shoretel. In the last
                year, we upgraded to Zendesk and I've mastered that system. I also have
                extra responsibilities looking after the AV process, certificates and t-shirts,
                creating better systems for non-CRM contact and logging idea or bringing
                faults to the attention of the right team using Jira.</p>
                <b>Barista KPR Catering/ Karaka Cafe Wellington, New Zealand / From July
                2011 to July 2012</b>
                <p>I made coffee, both hot and cold. Responsibilities included training staff,
                basic coffee machine and grinder maintenance, food prep and customer
                service.</p>
                <b>Barista, Retail working, Manager, Hairdressing, Outbound telephone
                surveyor and radio DJ Multiple Mount Maunganui, Hamilton, Tokoroa,
                Taupo and Wellington / From 1996 to 2011</b>
                <p>I've worked for K-mart, Starbucks, Ruakawa Fm, Kesh Hairdressing,
                Digipoll, United Video, MacDonalds, Friends Cafe and Hells Pizza.</p>

                
                </GridItem>
                
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
          
              <h4 className={classes.cardTitle}>Bobbi Kerei</h4>
              <p className={classes.description}>
              I enjoy learning new skills and building
              on what I have learnt already. In the
              Customer Service and software field,
              things are constantly changing so it
              important to keep learning and
              upskilling.
              </p>
              
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
