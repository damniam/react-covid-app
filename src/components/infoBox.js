import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function infoBox({ title, cases, total }) {
  return (
    <>
      <Card className="infoBox">
        <CardContent className="infoBox__content">
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
          <Typography className="infoBox__cases" variant="body2" component="p">
            {cases}
          </Typography>
          <Typography className="infoBox_total" variant="body2" component="p">
            {total} total
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default infoBox;
