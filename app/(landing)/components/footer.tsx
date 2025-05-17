import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { landingPageConfig } from "@/config/landing-page";
import { Separator } from "@/components/ui/separator";


export default function Footer() {
    return (
        <footer className="border-t py-12 px-6 md:px-12">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-14 gap-8">
                    <div className="md:col-span-6 lg:col-span-5">
                        <div className="flex items-center gap-2 mb-3">
                            <Link
                                href="/"
                                className="block w-[100px] sm:w-[125px]"
                            >
                                <Image
                                    src={"/favicon/type-text.png"}
                                    alt={siteConfig.name}
                                    width={125}
                                    height={40}
                                    className="w-full h-auto"
                                    priority
                                />
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-md">
                            {siteConfig.slogan}
                        </p>
                    </div>

                    <div className="md:col-span-3 lg:col-span-3">
                        <h3 className="font-medium mb-4 text-sphexa">Pages</h3>
                        <nav className="flex flex-col space-y-2">
                            {landingPageConfig.navbar.items.map((item) => (
                                <Link
                                    className="text-muted-foreground hover:text-primary"
                                    href={item.href}
                                    key={item.title}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 ">
                        <h3 className="font-medium mb-4 text-sphexa">
                            Our Services
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            {landingPageConfig.services.map((item) => (
                                <Link
                                    className="text-muted-foreground hover:text-primary"
                                    href={item.href}
                                    key={item.title}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3">
                        <h3 className="font-medium  mb-4 text-sphexa">Legal</h3>
                        <nav className="flex flex-col space-y-2">
                            {landingPageConfig.legal.map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.title}
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <Separator className="my-8"/>
    
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0 text-muted-foreground">
                        &copy; 2025 <span className="text-sphexa">{siteConfig.name}</span> All Rights Reserved
                    </p>
                    <div className="flex space-x-4">
                        {landingPageConfig.social.map((item) => (
                            <Link
                            key={item.title}
                            href={item.href}
                            >
                                <item.icon className="h-5 w-5 hover:text-sphexa text-muted-foreground"/>
                                <span className="sr-only">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
