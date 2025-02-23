import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserStore } from "@/store/useUserStore";

export default function Profile() {
    // Get the user from the store
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);

    const [newName, setNewName] = useState(user?.name || "");
    const [newEmail, setNewEmail] = useState(user?.email || "");

    // Handle form submission
    const handleSave = () => {
        console.log("Saving user...");
        setUser({ name: newName, email: newEmail });
    };

    return (
        <div className="flex">
            {/* Main Content */}
            <div className="flex-1 p-8">
                <Card>
                    <CardHeader className="text-left">
                        <h2 className="text-xl font-semibold">Profile</h2>
                    </CardHeader>
                    {/* Increased space below separator */}
                    <Separator className="my-4" />
                    <CardContent>
                        <div className="space-y-10">
                            {/* Name Field with increased space */}
                            <div className="flex flex-col">
                                <Label htmlFor="name" className="text-left mb-3">Name</Label>
                                <Input
                                    id="name"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="mt-2"
                                />
                                {/* Description text for Name input */}
                                <p className="text-left text-sm text-muted-foreground mt-2">
                                    Enter your full name.
                                </p>
                            </div>
                            {/* Email Field with increased space */}
                            <div className="flex flex-col">
                                <Label htmlFor="email" className="text-left mb-3">Email</Label>
                                <Input
                                    id="email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    className="mt-2"
                                />
                                {/* Description text for Email input */}
                                <p className="text-left text-sm text-muted-foreground mt-2">
                                    Enter your email address. We will use this for notifications.
                                </p>
                            </div>
                        </div>
                        <Separator className="my-6" />

                        {/* Update User Button */}
                        <div className="flex gap-4">
                            <Button variant="outline" onClick={handleSave}>
                                Update User
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
