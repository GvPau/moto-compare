import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useProductsStore } from "@/store/useProductsStore";
import { useFetchProducts } from "@/hooks/use-products";
import { HelmetDisplay } from "../../../../server/src/types/entities/Helmet";

export function Helmets() {
    const { products, setHelmets } = useProductsStore();
    const { data: helmets, isLoading, error } = useFetchProducts();

    useEffect(() => {
        if (helmets) {
            setHelmets(helmets as HelmetDisplay[]);
        }
    }, [helmets, setHelmets]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.helmets.map((helmet) => (
                <Card key={helmet.id} className="overflow-hidden">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {helmet.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="aspect-square relative">
                                        <img
                                            src={image}
                                            alt={`${helmet.name} - view ${index + 1}`}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {helmet.images.length > 1 && (
                            <>
                                <CarouselPrevious className="left-2" />
                                <CarouselNext className="right-2" />
                            </>
                        )}
                    </Carousel>
                    <div className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">
                            {helmet.style}
                        </p>
                        <h3 className="text-xl font-semibold mb-3">
                            {helmet.name}
                        </h3>
                        <div className="flex justify-between items-center">
                            <p className="text-lg text-muted-foreground">
                                {helmet.brand}
                            </p>
                            <p className="text-xl font-bold">
                                ${helmet.price}
                            </p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
} 