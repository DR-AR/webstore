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
} from '@mui/material';

function Catalog() {
    const [category, setCategory] = React.useState('');

    const categoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    }

    const [filter, setFilter] = React.useState('');

    const filterChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    }

    return (
        <Stack padding={4}>
            <Typography component="p" variant="caption" color="inherit">
                Home {'>'} Prints
            </Typography>
            <Typography component="p" variant="h5" color="inherit">
                PRINTS
            </Typography>
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
        </Stack>
    );
}

export default Catalog;