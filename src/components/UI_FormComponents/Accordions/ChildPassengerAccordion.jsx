import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, TextField } from "@material-ui/core";

function ChildPassengerDetailAccordion({ title, subtitle, register, index }) {
  return (
    <div>
      <Accordion style={{ backgroundColor: "darkgrey", margin:'10px 0px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="white">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color: "white" }}>
          <Typography color="white">{subtitle}</Typography>
          <Container style={{ marginTop: "20px", paddingLeft: "0px" }}>
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
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ChildPassengerDetailAccordion;
