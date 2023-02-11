import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { PreviewContainer } from "./styled.js";

const Preview = () => {
  const { artClasses, artLevel, artClassLocation, artClassDays, artClassTime } =
    useSelector((state) => state.chooseArt.filterData);
  const {
    firstName,
    lastName,
    dob,
    emailId,
    mailingAddress: { houseNumber, street, city, country, postalCode },
  } = useSelector((state) => state.personalDetails.data);

  const mailingAddressDisplay = `${houseNumber}, ${street}, ${city} ${postalCode}, ${country} `;

  return (
    <PreviewContainer>
      <Box sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper" }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Preview
              </Typography>
            </Grid>
          </Grid>
          <Typography color="text.primary" variant="body1" component="div">
            Thank you {firstName && <Chip color="primary" label={firstName} />}{" "}
            for filling in the details! Please confirm your choices made for
            your art class(es).
          </Typography>
        </Box>
        <Box sx={{ m: 2 }}>
          <Divider sx={{ mb: 1 }}>Choose Art</Divider>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1}>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ margin: 0, lineHeight: 2 }}
              >
                You're interested in
              </Typography>
              {artClasses.map((art) => (
                <Chip key={art} color="primary" label={art} />
              ))}
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ margin: 0, lineHeight: 2 }}
              >
                Your skill level is
              </Typography>
              <Chip color="primary" label={artLevel} />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ margin: 0, lineHeight: 2 }}
              >
                You want your classes to be at
              </Typography>
              {artClassLocation.map((location) => (
                <Chip key={location} color="primary" label={location} />
              ))}
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ margin: 0, lineHeight: 2 }}
              >
                You want these classes on
              </Typography>
              {artClassDays.map((day) => (
                <Chip key={day} color="primary" label={day} />
              ))}
              <Typography
                gutterBottom
                variant="body1"
                sx={{ margin: 0, lineHeight: 2 }}
              >
                at
              </Typography>
              <Chip color="primary" label={artClassTime} />
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ m: 2 }}>
          <Divider sx={{ mb: 1 }}>Personal Details</Divider>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1}>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ margin: 0, lineHeight: 2 }}
              >
                Full Name:
              </Typography>
              {firstName && lastName && (
                <Chip color="primary" label={`${firstName} ${lastName}`} />
              )}
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ margin: 0, lineHeight: 2 }}
              >
                You were born on:
              </Typography>
              {dob && <Chip color="primary" label={dob} />}
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ margin: 0, lineHeight: 2 }}
              >
                Email-ID:
              </Typography>

              {emailId && <Chip color="primary" label={emailId} />}
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ margin: 0, lineHeight: 2 }}
              >
                Mailing Address:
              </Typography>

              {mailingAddressDisplay && (
                <Chip color="primary" label={mailingAddressDisplay} />
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </PreviewContainer>
  );
};

export default Preview;
