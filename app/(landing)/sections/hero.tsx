import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';
import { Marquee } from '@/components/magicui/marquee';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-1 justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="items-center justify-center flex">
              <Link
                className="text-sm font-medium tracking-wider text-muted-foreground uppercase flex flex-row gap-2 hover:text-sphexa items-center justify-center"
                href="https://github.com/Sphexa-EURL"
              >
                Check out our Github
                <ArrowRight className="w-4 h-4 justify-center items-center" />
              </Link>
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              We code with <span className="text-sphexa">care</span>
              <br /> We secure with <span className="text-sphexa">purpose</span>
            </h1>
            <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div className="space-x-4">
            <Button
              className="bg-sphexa hover:bg-sphexa-dark "
              size="lg"
              asChild
            >
              <Link href="/contact" className="text-lg">
                Get started <ArrowRight></ArrowRight>
              </Link>
            </Button>
          </div>
        </div>
        <section className="mt-16 w-full flex flex-col items-center justify-center space-y-4">
          <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
            Trusted by leading teams
          </p>
          <Marquee className="flex items-center justify-center">
            <Image
              height={50}
              width={100}
              src="https://cdn.magicui.design/companies/Google.svg"
              alt=""
              className="opacity-50 grayscale"
            />
            <Image
              height={50}
              width={60}
              src="https://cdn.magicui.design/companies/Uber.svg"
              alt=""
              className="opacity-50 grayscale"
            />
            <Image
              height={50}
              width={100}
              src="https://cdn.magicui.design/companies/Instagram.svg"
              alt=""
              className="opacity-50 grayscale"
            />
            <Image
              height={50}
              width={100}
              src="https://cdn.magicui.design/companies/Microsoft.svg"
              alt=""
              className="opacity-50 grayscale"
            />
            <Image
              height={50}
              width={100}
              src="https://cdn.magicui.design/companies/Google.svg"
              alt=""
              className="opacity-50 grayscale"
            />
          </Marquee>
        </section>
      </div>
    </section>
  );
}
