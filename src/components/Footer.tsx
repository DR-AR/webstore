import React from "react";
import { Container, Grid, Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer>
        <AppBar
        position="static"
        color="secondary"
        >
        <Container maxWidth="lg">
            <Stack>
                <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Box borderBottom={1}>Help</Box>
                    <Box>
                    <Link href="#">Search</Link>
                    </Box>
                    <Box>
                    <Link href="#">Commissions</Link>
                    </Box>
                    <Box>
                    <Link href="#">Terms of Service</Link>
                    </Box>
                    <Box>
                    <Link href="#">Refund Policy</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box borderBottom={1}>Socials</Box>
                    <Box>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    </Box>
                    <Box>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    </Box>
                    <Box>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    </Box>
                </Grid>
                </Grid>
                {/* TODO: ADD EMAIL ENTRY FOR NEWSLETTER */}
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Typography
                        variant="h6"
                        align="center"
                        color="primary">
                        {"Copyright © "}
                        <Link
                            sx={{
                                pointerEvents: "all"
                            }}
                            href="https://github.com/DR-AR"
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer">
                            DR-AR Software
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Grid>
            </Stack>
        </Container>
        </AppBar>
    </footer>
  );
}
export default Footer;
