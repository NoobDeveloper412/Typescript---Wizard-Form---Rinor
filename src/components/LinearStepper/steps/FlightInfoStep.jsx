import { Grid, TextField, Typography } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";

const FlightInfo = () => {
  const { control } = useFormContext();
  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Flight Info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Controller
              control={control}
              name="airline"
              render={({ field }) => (
                <TextField
                  label="Airline"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <Controller
              control={control}
              name="code"
              render={({ field }) => (
                <TextField
                  label="Code"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="cabin"
              render={({ field }) => (
                <TextField
                  label="Class"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="basicFare"
              render={({ field }) => (
                <TextField
                  label="Basic Fare"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="taxes"
              render={({ field }) => (
                <TextField
                  label="%Taxes"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="sc"
              render={({ field }) => (
                <TextField
                  label="Airline"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="discount"
              render={({ field }) => (
                <TextField
                  label="%Discount"
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
              name="totalAmount"
              render={({ field }) => (
                <TextField
                  label="Total Amount"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
};

export default FlightInfo;
