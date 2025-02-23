import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useProductsStore } from "@/store/useProductsStore";
import { useFetchProducts } from "@/hooks/use-products";
import { HelmetDisplay } from "../../../server/src/types/entities/Helmet";
import { Separator } from "@radix-ui/react-separator";
import { Badge } from "./ui/badge";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.helmets.map((helmet) => (
                <Card key={helmet.id} className="overflow-hidden">
                    {/* Images Carousel */}
                    <Carousel className="w-full">
                        <CarouselContent>
                            {helmet.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="aspect-[4/3] relative">
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
                    <CardHeader className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold">{helmet.name}</h3>
                            <span className="text-muted-foreground">
                                ${helmet.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{helmet.brand}</span>
                            <span>•</span>
                            <span>{helmet.style}</span>
                        </div>
                    </CardHeader>
                    <Separator />
                    <CardContent className="pt-6">
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {helmet.certification && (
                                    <Badge variant="secondary">
                                        CERT: {helmet.certification}
                                    </Badge>
                                )}
                                {helmet.weight && (
                                    <Badge variant="secondary">
                                        {helmet.weight} Kg
                                    </Badge>
                                )}

                            </div>


                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
} 