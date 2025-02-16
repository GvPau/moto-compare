import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Change this import

const HomePage: React.FC = () => {
    const navigate = useNavigate();  // Add this hook

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the homepage</p>

            <Button onClick={() => navigate('/search')}>Search</Button>
            <Button onClick={() => navigate('/clothes')}>Clothes</Button>
        </div>
    );

}

export default HomePage;