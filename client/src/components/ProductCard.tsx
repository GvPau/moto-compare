import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ProductCardProps {
    name: string;
    brand: string;
    price: number;
    images: string[];
    style: string;
}

export function ProductCard({ name, brand, price, images, style }: ProductCardProps) {
    return (
        <Card sx={{ position: 'relative' }}>
            {images.length > 1 ? (
                <Carousel
                    animation="slide"
                    navButtonsAlwaysVisible
                    indicators={false}
                    NavButton={({ onClick, next, prev }) => {
                        return (
                            <IconButton
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
                                sx={{
                                    position: 'absolute',
                                    zIndex: 2,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255,255,255,0.8)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                    },
                                    ...(next && { right: 8 }),
                                    ...(prev && { left: 8 }),
                                }}
                            >
                                {next && <NavigateNextIcon />}
                                {prev && <NavigateBeforeIcon />}
                            </IconButton>
                        );
                    }}
                >
                    {images.map((image, i) => (
                        <CardMedia
                            key={i}
                            component="img"
                            height="300"
                            image={image}
                            alt={`${name} - view ${i + 1}`}
                            sx={{
                                bgcolor: '#f5f5f5',
                                transition: 'opacity 0.3s ease-in-out',
                                '&:hover': {
                                    opacity: 0.8,
                                },
                            }}
                        />
                    ))}
                </Carousel>
            ) : (
                <CardMedia
                    component="img"
                    height="300"
                    image={images[0]}
                    alt={name}
                    sx={{
                        bgcolor: '#f5f5f5',
                        transition: 'opacity 0.3s ease-in-out',
                        '&:hover': {
                            opacity: 0.8,
                        },
                    }}
                />
            )}
            <CardContent sx={{ p: 2 }}>
                <Typography variant="caption" color="text.secondary" gutterBottom>
                    {style}
                </Typography>
                <Typography variant="subtitle1" component="h2" sx={{ fontWeight: 'medium' }}>
                    {name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        {brand}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        ${price}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
} 