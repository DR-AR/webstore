import React from 'react';
import {
    Typography,
    Stack,
    SelectChangeEvent,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Container,
    Grid,
    Card,
} from '@mui/material';

// Will have to convert this into a factory function that populates the
// dropdown menus with categories from the database
function Filters() {
    const [category, setCategory] = React.useState('');

    const categoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    }

    const [filter, setFilter] = React.useState('');

    const filterChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    }

    return (
        <Container>
            <Box>
                <Typography component="p" variant="caption" color="inherit">
                    Home {'>'} Prints
                </Typography>
                <Typography component="p" variant="h5" color="inherit">
                    PRINTS
                </Typography>
            </Box>
            <Box>
                <Typography component="p" variant="caption" color="inherit">
                    Browse by
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    {/* I cant figure out how to center the text in the dropdown field */}
                    <FormControl fullWidth>
                        <InputLabel id="filter-label">Prints</InputLabel>
                        <Select
                            labelId="filter-label"
                            id="filter-select"
                            value={category}
                            label="Prints"
                            onChange={categoryChange}
                        >
                            <MenuItem value={'Originals'}>Originals</MenuItem>
                            <MenuItem value={'Merch'}>Merch</MenuItem>
                            <MenuItem value={'Custom Orders'}>Custom Orders</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box>
                <Typography component="p" variant="caption" color="inherit">
                    Sort by
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    {/* I cant figure out how to center the text in the dropdown field */}
                    <FormControl fullWidth>
                        <InputLabel id="category-label">Best Selling</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category-select"
                            value={filter}
                            label="Best Selling"
                            onChange={filterChange}
                        >
                            <MenuItem value={'Merch'}>Price: Low to High</MenuItem>
                            <MenuItem value={'Custom Orders'}>Price: High to Low</MenuItem>
                            <MenuItem value={'Originals'}>Most Recent</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Container>
    );
}

function Item() {

    return (
        <Card>
            <Box
                marginTop={5}
                marginBottom={5}
                component="img"
                sx={{ height: 240, width: '100%' }}
                alt="shirt"
                src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
            />
            <Typography component="p" variant="h5" color="inherit" align="center">
                Item Name
            </Typography>
            <Typography component="p" variant="body2" color="inherit" align="center">
                $69
            </Typography>
        </Card>
    );
}

// Also needs to be turned into a factory function that creates Items from db
function AllItems() {

    return (
        <Container sx={{ paddingTop: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    {Item()}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {Item()}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {Item()}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {Item()}
                </Grid>
            </Grid>
        </Container>
    );
}

function Catalog() {

    return (
        <Stack padding={3}>
            {Filters()}
            {AllItems()}
        </Stack>
    );
}

export default Catalog;