import { FormLabel, Grid, TextField, Typography } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import InputField from "../../UI_FormComponents/InputField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

const BookingInfo = () => {
  const { control } = useFormContext();
  const [oneWayTrip, setOneWayTrip] = useState(true);

  function handleFlightType(value) {
    if (value === "oneWay") {
      setOneWayTrip(true);
    }
    if (value === "roundWay") {
      setOneWayTrip(false);
    }
  }

  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Booking Details
        </Typography>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => handleFlightType(e.target.value)}
            defaultValue="oneWay"
          >
            <FormControlLabel
              value="oneWay"
              control={<Radio />}
              label="One Way Trip"
            />
            <FormControlLabel
              value="roundWay"
              control={<Radio />}
              label="Round Way Trip"
            />
          </RadioGroup>
        </FormControl>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="origin"
              render={({ field }) => (
                // <TextField
                //   label="From"
                //   variant="outlined"
                //   fullWidth={true}
                //   {...field}
                // />
                <InputField name="from" label="From" />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="destination"
              render={({ field }) => (
                <TextField
                  label="Destination"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="journeyDate"
              render={({ field }) => (
                <TextField
                  label="Journey Date"
                  type="date"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={3}>
            <Controller
              control={control}
              name="returnDate"
              render={({ field }) => (
                <TextField
                  label="Return Date"
                  type="date"
                  disabled={oneWayTrip === true ? false : true}
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              control={control}
              name="number_of_adults"
              render={({ field }) => (
                <TextField
                  label="Number of Adults"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              control={control}
              name="number_of_children"
              render={({ field }) => (
                <TextField
                  label="Number of Children"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              control={control}
              name="number_of_infants"
              render={({ field }) => (
                <TextField
                  label="Number of Infants"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
      </React.Fragment>
      {/* <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </>
  );
};

export default BookingInfo;
