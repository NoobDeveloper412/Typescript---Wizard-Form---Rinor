import {  TextField, Typography } from "@material-ui/core";
import { useFormContext } from "react-hook-form";
import React from "react";

const PassengerInfo = () => {
  const { control, register } = useFormContext();
  const { number_of_adults, number_of_children, number_of_infants } =
    control._formValues;

  return (
    <React.Fragment>
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
  );
};

export default PassengerInfo;
