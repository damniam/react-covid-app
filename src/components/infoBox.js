import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function infoBox({ title, cases, total }) {
  return (
    <>
      <p>test</p>
      {console.log("czy to jest")}
      <Card className="infoBox">
        <CardContent>
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
          <Typography className="infoBox__cases" color="textSecondary">
            {cases}
          </Typography>
          <Typography className="infoBox_total" variant="body2" component="p">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default infoBox;
