import React from "react";
import ReactDOM from "react-dom";
import { Form } from "react-final-form";
import {
  TextField,
  Checkboxes,
  Radios,
  Select,
  DatePicker,
  TimePicker,
} from "mui-rff";
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  MenuItem,
} from "@mui/material";

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, ['0'], 2));
};

const validate = (values) => {
  const errors = { firstName: "", lastName: "", email: " " };
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};

const formFields = [
  {
    size: 6,
    field: (
      <TextField
        label="First Name"
        name="firstName"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 6,
    field: (
      <TextField
        label="Last Name"
        name="lastName"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        type="email"
        label="Email"
        name="email"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <Select
        name="neighbourhood"
        label="Select a NeighbourHood"
        formControlProps={{ margin: "none" }}
      >
        <MenuItem value="Northwest Calgary">Northwest Calgary</MenuItem>
        <MenuItem value="Northeast Calgary">Northeast Calgary</MenuItem>
        <MenuItem value="Southwest Calgary">Southwest Calgary</MenuItem>
        <MenuItem value="Southeast Calgary">Southeast Calgary</MenuItem>
      </Select>
    ),
  },
  {
    size: 12,
    field: (
      <Checkboxes
        label="Services"
        name="services"
        formControlProps={{ margin: "none" }}
        formGroupProps={{ row: true }}
        data={[
          { label: "Lawn Mowing", value: "mowing" },
          { label: "Planting", value: "planting" },
          { label: "Patios", value: "patio" },
          { label: "Snow Removal", value: "snow" },
        ]}
      />
    ),
  },
  {
    size: 12,
    field: <TextField name="message" multiline label="Message" margin="none" rows={4} required={true}/>,
  },
];

export default function ContactForm() {
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        <span role="img" aria-label="wave">
        👋
        </span>{" "}
        Lets Get in Touch!
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true, stooge: "larry" }}
        validate={validate}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16, background: 'transparent', boxShadow: 'none' }}>
              <Grid container alignItems="flex-start" spacing={2}>
                {formFields.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}
