import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Pic from "/Users/bobbikerei/Documents/GitHub/dashboard/src/assets/img/pic.1.png";
import Giffx1 from "/Users/bobbikerei/Documents/GitHub/dashboard/src/assets/img/giff.1.gif";
import Giffx2 from "/Users/bobbikerei/Documents/GitHub/dashboard/src/assets/img/giff.2.gif";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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

export default function TypographyPage() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Guru Card</h4>
        <p className={classes.cardCategoryWhite}>
        New Zealand RNA Context Initiative
        </p>
      </CardHeader>
      <CardBody>
        <p>
        <b>TL;DR:</b> From Monday the 4th of November until the end of the year, 
        whenever you come across an error or issue with Athena while in channels you 
        just type /rna in Slack. This way it makes it easier for recording purposes.
        </p>

<p><b>What is this?</b>
When a call isn’t answered it bounces the call back into the queue and reroutes it to the next available Guru. 
This is called a Reservation Timeout or Ring No Answer (RNA) event. To make sure we’re doing right by our merchants and 
reducing the stress of waiting in a phone queue can cause we’re rolling out a new way to let your lead know these events happen. 
This way squad leads can better identify and record any issues which will lead to getting resources and fixes in place to reduce 
incidents. This is a temporary initiative that will run from the 4th of November 2019 till the end of 2019.
</p>
<p><b>To get set up</b>
Click this <a href="https://app.textexpander.com/public/4f79a4c159a63f7420ce1abebf800dcb">link to open Text Expander</a> and 
join the group. If you’re asked to sign into OKTA, just come back here and follow the link again.
</p>
<p>
The next time you have an issue pop up while in phone channels just use /rna in your squads Slack channel. And fill in the Text Expander box that appears.
</p>
<box>
          <img src={Giffx1} width= "50%"/>   
        
</box>
<p>
Just let your lead know what happened in the dialogue box and use the drop down underneath to pick a reason for the incident. When you’re finished just click OK. 
<box>
  <img src={Pic} width= "50%"/>   
</box>
</p>
<p>
Your message will appear like this in the channel and automatically @ your lead.
If the automated message doesn’t appear in your channel after clicking OK, then use /rna again and try posting your response again without the text expander. 
<box>
          <img src={Giffx2} width= "50%"/>   
</box>
</p>
<p>
If you have any questions about the Initiative or you’d like to learn more about Reservation Timeouts or RNA then reach out to your lead or Matt Cameron (@matt).
</p>
<p><b>Related content</b></p>
<p><a href="https://app.getguru.com/card/crKaa6Ei/Athena-General-Troubleshooting">Athena - General Troubleshooting</a></p>
<p><a href="https://app.getguru.com/card/9TeeEABT/Athena-Common-issues-known-bugs">Athena - Common issues and known bugs</a></p>
<p><a href="https://app.getguru.com/card/LcakG75c/Athena-Getting-support">Athena - Getting support</a></p>
<p></p>
<p><b><a href="https://app.getguru.com/card/irkM7rzT/New-Zealand-RNA-Context-Initiative">Orginal Guru card here</a></b></p>

      </CardBody>
    </Card>
  );
}
