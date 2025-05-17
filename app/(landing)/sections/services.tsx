import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { landingPageConfig } from "@/config/landing-page";

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="flex flex-1 justify-center w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4">
                        <p className="text-sm font-medium tracking-wider text-sphexa uppercase">
                            Our services
                        </p>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Tailored solutions for{" "}
                            <span className="text-sphexa">your needs</span>
                        </h1>
                        <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
                            We offer a wide range of services to meet your
                            needs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
                        {landingPageConfig.services.map((service) => (
                            <Card className="transition-all hover:scale-105 duration-200 ease-in-out border rounded-md group shadow-none flex flex-col gap-2" key={service.title}>
                                <CardHeader className="flex flex-col gap-2">
                                    <service.icon className="group-hover:text-sphexa w-8 h-8 transition-all"/>
                                    <CardTitle className="text-left">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground text-left">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
