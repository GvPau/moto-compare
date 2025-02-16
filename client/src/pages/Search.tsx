import React, { useEffect, useState } from 'react';
import { useSearchMotorcycles, FilterParams } from '../hooks/useMotorcycles';
import { MotorcycleDisplay } from '@entities/Motorcycle';
import {
    Container,
    TextField,
    Button,
    Typography,
    CircularProgress,
    Paper,
    Grid,
    Box,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

const SearchPage: React.FC = () => {
    const [motorcycles, setMotorcycles] = useState<MotorcycleDisplay[]>([]);
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [engineSize, setEngineSize] = useState<number | undefined>(undefined);
    const [weight, setWeight] = useState<number | undefined>(undefined);
    const [type, setType] = useState<string>('');
    const [horsePower, setHorsePower] = useState<number | undefined>(undefined);
    const [price, setPrice] = useState<number | undefined>(undefined);
    const [filters, setFilters] = useState<FilterParams>({
        brand: '',
        model: '',
        year: '',
        engineSize: undefined,
        weight: undefined,
        type: '',
        horsePower: undefined,
        price: undefined,
    });
    const { data, isLoading, error } = useSearchMotorcycles(filters);

    useEffect(() => {
        if (data) {
            setMotorcycles(data as MotorcycleDisplay[]);
        }
    }, [data]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setFilters({
            brand,
            model,
            year,
            engineSize,
            horsePower,
            weight,
            type,
            price,
        });
    };

    return (
        <Box>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Search Motorcycles
                    </Typography>
                    <form onSubmit={handleSearch}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                    label="Brand"
                                    variant="outlined"
                                    fullWidth
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                    label="Model"
                                    variant="outlined"
                                    fullWidth
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                    label="Year"
                                    variant="outlined"
                                    fullWidth
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                    label="Engine Size"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={engineSize !== undefined ? engineSize : ''}
                                    onChange={(e) => setEngineSize(e.target.value ? parseFloat(e.target.value) : undefined)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                    label="Horse Power"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={horsePower !== undefined ? horsePower : ''}
                                    onChange={(e) => setHorsePower(e.target.value ? parseFloat(e.target.value) : undefined)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                    label="Price"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={price !== undefined ? price : ''}
                                    onChange={(e) => setPrice(e.target.value ? parseFloat(e.target.value) : undefined)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <TextField
                                    label="Weight"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={weight !== undefined ? weight : ''}
                                    onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : undefined)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <FormControl fullWidth>
                                    <InputLabel>Type</InputLabel>
                                    <Select
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        label="Type"
                                    >
                                        <MenuItem value="sport">Sport</MenuItem>
                                        <MenuItem value="naked">Naked</MenuItem>
                                        <MenuItem value="touring">Touring</MenuItem>
                                        <MenuItem value="cruiser">Cruiser</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ padding: '10px' }}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    {isLoading && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <CircularProgress />
                        </Box>
                    )}
                    {error && (
                        <Typography color="error" align="center" sx={{ marginTop: '20px' }}>
                            {error.message}
                        </Typography>
                    )}
                    {motorcycles.length > 0 && (
                        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                            {motorcycles.map((motorcycle: MotorcycleDisplay) => (
                                <Grid item xs={12} sm={6} md={4} key={motorcycle.id}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={motorcycle.image}
                                            alt={motorcycle.model}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" component="div">
                                                {motorcycle.brand} {motorcycle.model}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Engine Size: {motorcycle.engineSize}cc
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Horsepower: {motorcycle.horsePower}hp
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Price: ${motorcycle.price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Weight: {motorcycle.weight}kg
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Type: {motorcycle.type}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Compare
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Paper>
            </Container>
        </Box>
    );
};

export default SearchPage;