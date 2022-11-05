import { Grid, TextField, Typography } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";

const ReviewBooking = () => {
  const { control, register } = useFormContext();

  const {
    origin,
    destination,
    journeyDate,
    returnDate,
    number_of_adults,
    number_of_children,
    number_of_infants,
    airline,
    cabin,
    basicFare,
    taxes,
    sc,
    discount,
    totalAmount,
    gender,
    firstName,
    surName,
    date_of_birth,
    email,
    phone,
    pnr,
    ticket,
    issueBy,
    ledger,
    code,
  } = control._formValues;
  return (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom style={{ margin: 20 }}>
          Review Your Booking
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Controller
              control={control}
              name="airline"
              render={({ field }) => (
                <TextField
                  label="Airline"
                  value={airline}
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
                  value={code}
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
                  value={cabin}
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
                  value={basicFare}
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
                  value={taxes}
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
                  value={sc}
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
                  value={totalAmount}
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
        <hr style={{ margin: 20 }} />
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Controller
              control={control}
              name="origin"
              render={({ field }) => (
                <TextField
                  label="Origin"
                  value={origin}
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
              name="destination"
              render={({ field }) => (
                <TextField
                  label="To"
                  variant="outlined"
                  value={destination}
                  fullWidth={true}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="journeyDate"
              render={({ field }) => (
                <TextField
                  label="Journey Date"
                  variant="outlined"
                  fullWidth={true}
                  value={journeyDate}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="returnDate"
              render={({ field }) => (
                <TextField
                  label="Basic Fare"
                  variant="outlined"
                  fullWidth={true}
                  value={returnDate}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="number_of_adults"
              render={({ field }) => (
                <TextField
                  label="Number of adults"
                  variant="outlined"
                  fullWidth={true}
                  value={number_of_adults}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="number_of_children"
              render={({ field }) => (
                <TextField
                  label="Number of children"
                  variant="outlined"
                  fullWidth={true}
                  value={number_of_children}
                  {...field}
                />
              )}
            />{" "}
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="number_of_infants"
              render={({ field }) => (
                <TextField
                  label="Number of infants"
                  variant="outlined"
                  fullWidth={true}
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Passenger Information
        </Typography>
        {Array.from({ length: number_of_adults }).map((_, index) => (
          <div style={{ margin: 20 }}>
            <TextField
              {...register(`adults.${index}.surName`)}
              label="Surname"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`adults.${index}.firstName`)}
              label="First Name"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`adults.${index}.email`)}
              label="Email"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`adults.${index}.phoneNumber`)}
              label="Phone Number"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`adults.${index}.date_of_birth_of_adult`)}
              label="Date of Birth"
              variant="outlined"
              fullWidth={true}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        ))}
        <hr />
        {Array.from({ length: number_of_children }).map((_, index) => (
          <div style={{ margin: 20 }}>
            <TextField
              {...register(`children.${index}.surName`)}
              label="Surname"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`children.${index}.firstName`)}
              label="First Name"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`children.${index}.email`)}
              label="Email"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`children.${index}.phoneNumber`)}
              label="Phone Number"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`children.${index}.date_of_birth_of_children`)}
              label="Date of Birth"
              variant="outlined"
              fullWidth={true}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        ))}
        <hr />
        {Array.from({ length: number_of_infants }).map((_, index) => (
          <div style={{ margin: 20 }}>
            <TextField
              {...register(`infants.${index}.surName`)}
              label="Surname"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`infants.${index}.firstName`)}
              label="First Name"
              variant="outlined"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register(`infants.${index}.date_of_birth_of_infant`)}
              label="Date of Birth"
              variant="outlined"
              fullWidth={true}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        ))}
      </React.Fragment>
    </>
  );
};

export default ReviewBooking;
