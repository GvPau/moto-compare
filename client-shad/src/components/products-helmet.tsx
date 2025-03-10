import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useProductsStore } from "@/store/useProductsStore";
import { useFetchProducts } from "@/hooks/use-products";
import { HelmetDisplay } from "../../../server/src/types/entities/Helmet";

export function Helmets() {
    const { products, setHelmets } = useProductsStore();
    const { data: helmets, isLoading, error } = useFetchProducts();
    console.log(helmets);
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
                <Card key={helmet.id} className="overflow-hidden bg-white rounded-xl">
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

                    <div className="absolute bottom-4 right-4 bg-gray-100/90 px-2 py-0.5 rounded text-sm">
                        {helmet.weight}g
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1">
                            {helmet.name}
                        </h3>

                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                            <span>{helmet.brand}</span>
                            <span>•</span>
                            <span>{helmet.style}</span>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {helmet.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {helmet.certification.map((cert, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="px-2 py-0.5 text-xs bg-gray-100 text-gray-800 hover:bg-gray-200"
                                >
                                    {cert}
                                </Badge>
                            ))}
                            <Badge
                                variant="secondary"
                                className="px-2 py-0.5 text-xs bg-gray-100 text-gray-800 hover:bg-gray-200"
                            >
                                {helmet.name}
                            </Badge>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="text-xl font-bold">
                                ${helmet.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
} 