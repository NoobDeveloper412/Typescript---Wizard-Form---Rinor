import { Typography } from "@material-ui/core";
import { useFormContext } from "react-hook-form";
import React from "react";
import AdultPassengerForm from "../Forms/AdultPassengerForm";
import ChildPassengerForm from "../Forms/ChildPassengerForm";
import InfantPassengerForm from "../Forms/InfantPassengerForm";

const PassengerInfo = () => {
  const { control, register } = useFormContext();
  const { numberOfAdults, numberOfChildren, numberOfInfants } =
    control._formValues;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Passenger Information
      </Typography>

      <AdultPassengerForm register={register} numberOfAdults={numberOfAdults} />
      <ChildPassengerForm
        register={register}
        numberOfChildren={numberOfChildren}
      />
      <InfantPassengerForm
        register={register}
        numberOfInfants={numberOfInfants}
      />
    </React.Fragment>
  );
};

export default PassengerInfo;
