/* eslint-disable no-restricted-imports */
import React from "react";
import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";
import OpenInNewRoundedIcon from "@material-ui/icons/OpenInNewRounded";
import dynamic from "react-dynamic";

const CKEditor = dynamic(() => import("../../common/CKEditor"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  button: {
    margin: theme.spacing(1),
  },
}));
class ContractPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userParagraphs: "",
      valid: true,
    };
  }

  handleCkEditorChange = (name, value) => this.setState({ [name]: value });

  render() {
    const { classes } = this.props;
    const { userParagraphs, valid } = this.state;
    return (
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col-md-9">
          <Paper square>
            <div className="kt-section" style={{ padding: "20px 10px" }}>
              <div
                className="kt-section__sub"
                style={{ textAlign: "center", margin: 30 }}
              >
                <p>
                  ADVERTISING SPACE LEASE AGREEMENT WITH A SPECIFIC TERM
                  IDENTIFYING THE CONTRACTING PARTIES
                </p>
                <CKEditor
                  data={userParagraphs ? userParagraphs : ""}
                  name="userParagraphs"
                  valid={valid || (!valid && userParagraphs !== "")}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    this.handleCkEditorChange("userParagraphs", data);
                  }}
                />
              </div>
              <div className="kt-section__content" style={{ margin: 30 }}>
                <div className={classes.root}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    fullWidth
                    style={{ padding: 10 }}
                  >
                    DownLoad
                  </Button>
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <div className="col-md-3">
          <div className="kt-section">
            <div className="kt-section__sub">
              drag the item below to the document to create a new section.
            </div>
            <div className="kt-section__content">
              <Paper>
                <div style={{ padding: "10px", marginTop: 20 }}>
                  <OpenInNewRoundedIcon />
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    New Text Section
                  </span>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(ContractPage);
