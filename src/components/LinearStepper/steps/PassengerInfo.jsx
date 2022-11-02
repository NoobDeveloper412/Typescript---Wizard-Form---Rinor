import { Grid, TextField, Typography } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";

const PassengerInfo = () => {
  const { control } = useFormContext();
  const { number_of_adults, number_of_children, number_of_infants } =
    control._formValues;

  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Passenger Info
        </Typography>
        <Grid container spacing={3}>
          {Array.from({ length: number_of_adults }).map((_, index) => (
            <Grid item xs={4}>
              <Controller
                key={index + "a"}
                control={control}
                name="adult"
                render={({ field }) => (
                  <TextField
                    label="Adult Name"
                    variant="outlined"
                    fullWidth={true}
                    {...field}
                  />
                )}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3}>
          {Array.from({ length: number_of_children }).map((_, index) => (
            <Grid item xs={4}>
              <Controller
                key={index + number_of_adults}
                control={control}
                name="child"
                render={({ field }) => (
                  <TextField
                    label="Child Name"
                    variant="outlined"
                    fullWidth={true}
                    {...field}
                  />
                )}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3}>
          {Array.from({ length: number_of_infants }).map((_, index) => (
            <Grid item xs={4}>
              <Controller
                key={index}
                control={control}
                name="Infant"
                render={({ field }) => (
                  <TextField
                    label="Infant Name"
                    variant="outlined"
                    fullWidth={true}
                    {...field}
                  />
                )}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    </>
  );
};

export default PassengerInfo;
