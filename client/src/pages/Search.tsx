import React, { useEffect, useState } from 'react';
import { useSearchMotorcycles } from '../hooks/useMotorcycles';
import { Motorcycle } from '../types/Motorcycle';

const SearchPage: React.FC = () => {
    const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');
    const [filters, setFilters] = useState({ brand: '', year: '' });
    const { data, isLoading, error } = useSearchMotorcycles(filters);


    useEffect(() => {
        if (data) {
            setMotorcycles(data);
        }
    }, [data]);


    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setFilters({ brand, year });
    };

    return (
        <div>
            <h1>Search Motorcycles</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Search by brand"
                />
                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Search by year"
                />
                <button type="submit">Search</button>
            </form>
            {isLoading && <p>Loading...</p>}
            {data && data.length === 0 && <p>No motorcycles found</p>}
            {error && <p>Error: {error.message}</p>}
            {motorcycles && (
                <ul>
                    {motorcycles.map((motorcycle) => (
                        <li key={motorcycle.id}>{motorcycle.brand} {motorcycle.model} ({motorcycle.year})</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchPage;