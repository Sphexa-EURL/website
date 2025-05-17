'use client';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { landingPageConfig } from '@/config/landing-page';
import { Button } from '@/components/ui/button';
import LanguageSelect from './language-select';
import { Icons } from '@/components/icons';

import { VisuallyHidden } from 'radix-ui';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 flex items-center justify-between px-4 h-[60px] shadow-lg mx-auto max-w-[90%] w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full rounded-md border bg-background/80">
      <div className="flex items-center">
        <Link href="/" className="block w-[100px] ">
          <Image
            src={'/favicon/type-text.png'}
            alt={siteConfig.name}
            width={125}
            height={40}
            className="w-full h-auto"
            priority
          />
        </Link>
      </div>
      <div className="hidden lg:flex items-center justify-center flex-grow gap-8">
        {landingPageConfig.navbar.items.map((item: NavbarItemProps) => (
          <div key={item.title}>
            <Link
              href={item.href}
              className="text-sm hover:text-sphexa transition-colors flex items-center"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <LanguageSelect />
        <Button className="bg-sphexa hover:bg-sphexa-dark">Contact us</Button>
      </div>
      <div className="lg:hidden flex items-center gap-4">
        <Button
          size="sm"
          className="bg-sphexa hover:bg-sphexa-dark text-xs px-3"
        >
          Contact us
        </Button>
        <Drawer>
          <DrawerTrigger>
            <Icons.Menu className="w-5 h-5" />
          </DrawerTrigger>
          <DrawerContent>
            <VisuallyHidden.Root>
              <DrawerHeader>
                <DrawerTitle />
                <DrawerDescription />
              </DrawerHeader>
            </VisuallyHidden.Root>
            <Image
              src={'/favicon/type-text.png'}
              alt={siteConfig.name}
              width={150}
              height={40}
              className="h-auto w-[125px] sm:w-[125px] mt-2 pl-4"
            />
            <div className="mt-4 pl-4">
              <div className="flex flex-col gap-2">
                {landingPageConfig.navbar.items.map((item: NavbarItemProps) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      className="text-lg hover:text-sphexa transition-colors"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <DrawerFooter className="flex flex-row justify-between w-full">
              <LanguageSelect />
              <Button className="bg-sphexa hover:bg-sphexa-dark">
                Contact us
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
