import React from "react";
import { Container, Grid, Box, TextField, Button } from "@mui/material";
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
                                <Stack>
                                    <Box>
                                        <Box borderBottom={1}>Newsletter</Box>
                                        <Box display="flex" alignItems="center">
                                            <TextField label="Your email" variant="standard" fullWidth={true}></TextField>
                                            <Button variant="contained">Subscribe</Button>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box borderBottom={1}>Socials</Box>
                                        <IconButton>
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton>
                                            <TwitterIcon />
                                        </IconButton>
                                        <IconButton>
                                            <FacebookIcon />
                                        </IconButton>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
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
