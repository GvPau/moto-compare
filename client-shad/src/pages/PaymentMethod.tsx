import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";

export default function PaymentMethod() {
    const [showCVC, setShowCVC] = useState(false);
    const [showCardNumber, setShowCardNumber] = useState(false);

    const toggleShowCVC = () => {
        setShowCVC(!showCVC);
    };

    const toggleShowCardNumber = () => {
        setShowCardNumber(!showCardNumber);
    };


    return (
        <div className="flex-1 p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Payment Method</CardTitle>
                    <CardDescription>
                        Select a payment method to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Payment Options */}
                    <div className="grid grid-cols-3 gap-4">
                        <Card className="cursor-pointer">
                            <CardContent className="flex flex-col items-center justify-center p-6">
                                <CreditCardIcon className="h-8 w-8 mb-2" />
                                <span>Card</span>
                            </CardContent>
                        </Card>
                        <Card className="cursor-pointer">
                            <CardContent className="flex flex-col items-center justify-center p-6">
                                <PaypalIcon className="h-8 w-8 mb-2" />
                                <span>Paypal</span>
                            </CardContent>
                        </Card>
                        <Card className="cursor-pointer">
                            <CardContent className="flex flex-col items-center justify-center p-6">
                                <AppleIcon className="h-8 w-8 mb-2" />
                                <span>Apple</span>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4 text-left text-sm">
                        <div>
                            <Label htmlFor="name" className="text-left mb-3">Email</Label>
                            <Input
                                id="name"
                                placeholder="Your name"
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <Label htmlFor="city" className="text-left mb-3">City</Label>
                            <Input id="city" className="mt-2" placeholder="Your city" />
                        </div>

                        <div>
                            <Label htmlFor="cardNumber" className="text-left mb-3">Card number</Label>
                            <div>
                                <div className="relative">
                                    <Input
                                        id="cardNumber"
                                        placeholder="1234 5678 9012 3456"
                                        className="mt-2 pr-10"
                                        maxLength={16}
                                        type={showCardNumber ? "text" : "password"}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex px-2 mt-2 "
                                        onClick={toggleShowCardNumber}
                                    >
                                        {showCardNumber ? (
                                            <EyeOff className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-500" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <Label className="text-left mb-3">Expires</Label>
                                <Select>
                                    <SelectTrigger className="mt-2">
                                        <SelectValue placeholder="Month" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                            <SelectItem key={month} value={month.toString().padStart(2, '0')}>
                                                {month.toString().padStart(2, '0')}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label className="text-left mb-3" >Year</Label>
                                <Select>
                                    <SelectTrigger className="mt-2">
                                        <SelectValue placeholder="2025" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                            <SelectItem key={year} value={year.toString()}>
                                                {year}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="cvc" className="text-left mb-3">CVC</Label>
                                <div className="relative">
                                    <Input
                                        id="cvc"
                                        placeholder="123"
                                        className="mt-2 pr-10"
                                        maxLength={3}
                                        type={showCVC ? "text" : "password"}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex px-2 mt-2 "
                                        onClick={toggleShowCVC}
                                    >
                                        {showCVC ? (
                                            <EyeOff className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-500" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button>Continue</Button>
                </CardContent>
            </Card>
        </div>
    );
}

// Icons components
function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    );
}

function PaypalIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 11c3 0 4.5-1.5 4.5-1.5L8 17h3l2.5-6.5C15 12 16.5 13 19 13c0-6-6-6-6-6H7c-3 0-5 2-5 5s2 5 5 5" />
        </svg>
    );
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
    );
}