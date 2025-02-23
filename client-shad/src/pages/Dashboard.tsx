import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/components/app-sidebar-items"; // Import the sidebar items
import { useActivePageStore } from "@/store/useActivePageStore"; // Zustand store
import Profile from "@/pages/Profile"; // Import the Profile page component

export default function Dashboard() {
    const activePage = useActivePageStore((state) => state.activePage);
    const setActivePage = useActivePageStore((state) => state.setActivePage);

    const handleItemClick = (item: { title: string; url: string }) => {
        setActivePage(item); // Update the active page when breadcrumb link is clicked
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {activePage &&
                                    sidebarItems.navMain.map((mainItem) => {
                                        // Check if the active page belongs to this main item
                                        if (mainItem.items && mainItem.items.some((item) => item.title === activePage?.title)) {
                                            return (
                                                <React.Fragment key={mainItem.title}>
                                                    <BreadcrumbItem>
                                                        <BreadcrumbLink
                                                            href={mainItem.url}
                                                            onClick={() => handleItemClick(mainItem)}
                                                        >
                                                            {mainItem.title}
                                                        </BreadcrumbLink>
                                                    </BreadcrumbItem>
                                                    <BreadcrumbSeparator />
                                                    <BreadcrumbItem>
                                                        <BreadcrumbLink
                                                            href={activePage?.url}
                                                            onClick={() => handleItemClick(activePage)}
                                                        >
                                                            {activePage?.title}
                                                        </BreadcrumbLink>
                                                    </BreadcrumbItem>
                                                </React.Fragment>
                                            );
                                        }
                                        return null;
                                    })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {/* Conditionally render the profile page or other content based on activePage */}
                    {activePage?.title === "Profile" ? (
                        <Profile />
                    ) : (
                        <>
                            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                                <div className="aspect-video rounded-xl bg-muted/50" />
                                <div className="aspect-video rounded-xl bg-muted/50" />
                                <div className="aspect-video rounded-xl bg-muted/50" />
                            </div>
                            < div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                        </>

                    )
                    }

                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
