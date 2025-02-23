import { useActivePageStore } from "@/store/useActivePageStore";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Helmets } from "@/components/products-helmet";

export default function Products() {
    const activePage = useActivePageStore((state) => state.activePage);

    const renderProduct = () => {
        switch (activePage?.title) {
            case "Helmets":
                return <Helmets />;
            case "Jackets":
                return <div>Jackets Coming Soon</div>;
            case "Gloves":
                return <div>Gloves Coming Soon</div>;
            default:
                return <div>Select a product category</div>;
        }
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Header with filters */}
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">{activePage?.title}</h2>
                <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price_asc">Price: Low to High</SelectItem>
                        <SelectItem value="price_desc">Price: High to Low</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Product Component */}
            {renderProduct()}
        </div>
    );
} 