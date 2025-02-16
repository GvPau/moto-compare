import { trpc } from "../utils/trpc";
import { Link, useLocation } from "react-router-dom";
import { ProductCard } from '../components/ProductCard';
import {
    Box,
    Container,
    Breadcrumbs,
    Typography,
    Tabs,
    Button,
    Select,
    MenuItem,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Tab,
} from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';

const categories = [
    { id: "", label: "All" },
    { id: "", label: "Racing/Sport" },
    { id: "", label: "Adventure" },
    { id: "", label: "Enduro" },
    { id: "", label: "Karting" },
    { id: "", label: "Motocross" },
    { id: "", label: "MTB" },
    { id: "", label: "Urban" },
];

export default function Clothes() {
    const location = useLocation();
    const { data: helmets } = trpc.products.helmets.getAll.useQuery();
    const currentCategory = location.pathname.split('/').pop() || 'all';

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* Breadcrumb */}
            <Breadcrumbs sx={{ mb: 3 }}>
                <Link to="/" style={{ color: 'text.secondary', textDecoration: 'none' }}>
                    Home
                </Link>
                <Link to="/clothes" style={{ color: 'text.secondary', textDecoration: 'none' }}>
                    Clothes
                </Link>
            </Breadcrumbs>

            {/* Title with count */}
            <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 4 }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                    Toda la ropa de moto
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ ml: 2 }}>
                    ({helmets?.length ?? 0})
                </Typography>
            </Box>

            {/* Categories */}
            <Tabs
                value={currentCategory}
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    mb: 4,
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#e4002b',
                    },
                }}
            >
                {categories.map((category) => (
                    <Tab
                        key={category.id}
                        label={category.label}
                        value={category.id}
                        component={Link}
                        to={`search`}
                        sx={{
                            textTransform: 'none',
                            minWidth: 'auto',
                            padding: '12px 16px',
                            marginRight: 2,
                            color: 'text.secondary',
                            '&.Mui-selected': {
                                color: '#e4002b',
                            },
                        }}
                    />
                ))}
            </Tabs>

            {/* Filters and Sort */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Button
                    startIcon={<TuneIcon />}
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                >
                    Mostrar filtros
                </Button>
                <Select
                    defaultValue=""
                    displayEmpty
                    sx={{ minWidth: 200, borderRadius: 2 }}
                >
                    <MenuItem value="">Ordenar por</MenuItem>
                    <MenuItem value="price_asc">Precio: Menor a mayor</MenuItem>
                    <MenuItem value="price_desc">Precio: Mayor a menor</MenuItem>
                    <MenuItem value="newest">Más nuevos</MenuItem>
                </Select>
            </Box>

            {/* Product Grid */}
            <Grid container spacing={3}>
                {helmets?.map((helmet) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={helmet.id}>
                        <ProductCard
                            name={helmet.name}
                            brand={helmet.brand}
                            price={helmet.price}
                            images={helmet.images}
                            style={helmet.style}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
} 