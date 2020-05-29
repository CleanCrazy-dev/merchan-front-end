/* eslint-disable no-restricted-imports */
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toAbsoluteUrl } from "../../../../../_metronic/utils/utils";
import EditIcon from "@material-ui/icons/CreateOutlined";
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
    margin: 10,
    borderRadius: 5,
  },
}));

export default function UserCardComponent(props) {
  const classes = useStyles();

  return (
    <div className="col-md-3 align-self-stretch">
      <div className="kt-section">
        <div className="kt-section__content">
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={toAbsoluteUrl(props.user.profileImage)}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  {props.user.username}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {props.user.userType}
                </Typography>
                <Link to={"/users/" + props.user.id}>
                  <EditIcon
                    style={{ position: "absolute", top: 15, right: 25 }}
                  />
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
