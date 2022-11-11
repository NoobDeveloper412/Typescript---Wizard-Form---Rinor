import React from "react";
import InfantPassengerDetailAccordion from "../../UI_FormComponents/Accordions/InfantPassengerAccordion";

function InfantPassengerForm({ register, numberOfInfants }) {
  return (
    <React.Fragment>
      {Array.from({ length: numberOfInfants }).map((_, index) => (
        <InfantPassengerDetailAccordion
          key={index}
          title={`Infant ${index + 1}`}
          subtitle={`Enter the details of the passenger.`}
          index={index}
          register={register}
        />
      ))}
    </React.Fragment>
  );
}

export default InfantPassengerForm;
