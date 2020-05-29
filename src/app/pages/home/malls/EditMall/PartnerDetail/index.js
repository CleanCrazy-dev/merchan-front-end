import React from "react";
// eslint-disable-next-line no-restricted-imports
import { withStyles } from "@material-ui/core/styles";
import { Button, Divider, TextField } from "@material-ui/core";
import MaterialTable from "material-table";
import InputMask from "react-input-mask";

const useStyles = () => ({
  root: {
    display: "flex",
  },
  avatarImg: {
    borderRadius: 10,
    width: 150,
    height: 150,
    margin: 10,
  },
  input: {
    display: "none",
  },
});

class PartnerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "CNPJ",
          field: "companyNumber",
          editComponent: (props) => (
            <InputMask
              mask="99.999.999/9999-99"
              value={props.value}
              disabled={false}
              maskChar=" "
              onChange={(e) => props.onChange(e.target.value)}
            >
              {() => (
                <TextField
                  type="text"
                  label="CNPJ"
                  variant="outlined"
                  placeholder="67.605.166/0001-02"
                />
              )}
            </InputMask>
          ),
        },
        {
          title: "Company Name",
          field: "companyname",
          editComponent: (props) => (
            <TextField
              id="outlined-basic"
              label="CompanyName"
              variant="outlined"
              value={props.value}
              onChange={(e) => props.onChange(e.target.value)}
            />
          ),
        },
      ],
    };
  }
  render() {
    const { columns } = this.state;
    const {
      partnerPageState,
      handleChangePartner,
      handleUpdateMall,
    } = this.props;
    const { partners = [] } = partnerPageState;
    return (
      <div className="col-md-12" style={{ marginTop: 20 }}>
        <div className="kt-section">
          <span className="kt-section__sub">
            <div className="row">
              <div className="col-md-12">
                <MaterialTable
                  title="Partners"
                  columns={columns}
                  data={partners}
                  options={{
                    actionsColumnIndex: -1,
                    search: false,
                    sorting: true,
                  }}
                  name="partners"
                  editComponent={<TextField variant="outlined" />}
                  editable={{
                    onRowAdd: (newData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                          resolve();
                          handleChangePartner("Add", newData);
                        }, 600);
                      }),
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                          resolve();
                          if (oldData) {
                            handleChangePartner("Update", newData, oldData);
                          }
                        }, 600);
                      }),

                    onRowDelete: (oldData) =>
                      new Promise((resolve) => {
                        setTimeout(() => {
                          resolve();
                          handleChangePartner("Delete", null, oldData);
                        }, 600);
                      }),
                  }}
                />
              </div>
            </div>
            <Divider />
            <div
              className="row"
              style={{ padding: 20, float: "right", marginRight: 20 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateMall}
              >
                Save
              </Button>
            </div>
            <div style={{ clear: "both" }}></div>
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(PartnerPage);
