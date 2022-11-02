import React, { useState } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormProvider, useForm } from "react-hook-form";
import BookingInfo from "./steps/BookingInfoStep";
import FlightInfo from "./steps/FlightInfoStep";
import PassengerInfo from "./steps/PassengerInfo";
import ReviewBooking from "./steps/ReviewBookingStep";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Booking Information",
    "Flight Information",
    "Passenger Information",
    "Review Your Booking",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BookingInfo />;
    case 1:
      return <FlightInfo />;
    case 2:
      return <PassengerInfo />;
    case 3:
      return <ReviewBooking />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      origin: "",
      destination: "",
      journeyDate: "",
      returnDate: "",
      number_of_adults: 0,
      number_of_children: 0,
      number_of_infants: 0,
      adults: [
        {
          id: 0,
          firstName: "",
          surName: "",
          email: "",
          phoneNumber: "",
          date_of_birth_adults: "",
        },
      ],
      children: [
        {
          id: 0,
          firstName: "",
          surName: "",
          email: "",
          phoneNumber: "",
          date_of_birth_children: "",
        },
      ],
      infants: [
        {
          id: 0,
          firstName: "",
          surName: "",
          date_of_birth_infants: "",
          age: "",
        },
      ],
      airline: "",
      cabin: "",
      basicFare: "",
      taxes: "",
      sc: "",
      discount: "",
      totalAmount: "",
      gender: "",
      firstName: "",
      surName: "",
      date_of_birth: "",
      email: "",
      phone: "",
      pnr: "",
      ticket: "",
      issueBy: "",
      ledger: "",
      code: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    // return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);

    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
