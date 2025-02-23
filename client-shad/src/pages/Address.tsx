import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserStore } from "@/store/useUserStore";

export default function Address() {
    // Get the address from the store
    const address = useUserStore((state) => state.address);
    const setAddress = useUserStore((state) => state.setAddress);

    const [street, setStreet] = useState(address?.street || "");
    const [city, setCity] = useState(address?.city || "");
    const [state, setState] = useState(address?.state || "");
    const [zip, setZip] = useState(address?.zip || "");
    const [country, setCountry] = useState(address?.country || "");

    // Handle form submission
    const handleSave = () => {
        setAddress({ street, city, state, zip, country });
    };

    return (
        <div className="flex">
            {/* Main Content */}
            <div className="flex-1 p-8">
                <Card>
                    <CardHeader className="text-left">
                        <h2 className="text-xl font-semibold">Address</h2>
                    </CardHeader>
                    <Separator className="my-4" />
                    <CardContent>
                        <div className="space-y-10">
                            {/* Street and City Fields */}
                            <div className="flex flex-col md:flex-row md:space-x-4">
                                <div className="flex flex-col flex-1">
                                    <Label htmlFor="street" className="text-left mb-2">Street</Label>
                                    <Input
                                        id="street"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <Label htmlFor="city" className="text-left mb-2">City</Label>
                                    <Input
                                        id="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            {/* State, ZIP, and Country Fields */}
                            <div className="flex flex-col md:flex-row md:space-x-4">
                                <div className="flex flex-col flex-1">
                                    <Label htmlFor="state" className="text-left mb-2">State</Label>
                                    <Input
                                        id="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <Label htmlFor="zip" className="text-left mb-2">ZIP</Label>
                                    <Input
                                        id="zip"
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <Label htmlFor="country" className="text-left mb-2">Country</Label>
                                    <Input
                                        id="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <Separator className="my-6" />

                        {/* Save Address Button */}
                        <div className="flex gap-4">
                            <Button variant="outline" onClick={handleSave}>
                                Save Address
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}