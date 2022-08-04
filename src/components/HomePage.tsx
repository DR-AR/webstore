import React from "react";
import {
    Stack,
    Typography,
    Box,
} from "@mui/material";

function HomePage() {

    // once the footer is completed we can come back to this to properly set the image height
    // something like window.innerHeight - footer.height - header.height - welcomeToMyShop.height
    const height = window.innerHeight;
    const image_height = height * 0.833;

    return (
        <Stack>
            <Box width={'100%'} padding={2}>
                <Box
                    component="img"
                    sx={{ height: image_height, width: '100%' }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                />
            </Box>
            <Typography component="div" variant="h4" color="inherit" align="center" paddingBottom={2}>
                Welcome to my shop
            </Typography>
        </Stack>
    )
}

export default HomePage;