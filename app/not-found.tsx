import Navbar from './(landing)/components/navbar';
import Footer from './(landing)/components/footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function notFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex flex-1  justify-center w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <p className="text-md font-medium tracking-wider text-sphexa uppercase">
                404
              </p>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Lost in the code?
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
                The page you are looking for does not exist. It might have been
                removed or the URL might be incorrect.
              </p>
            </div>
            <div className="mt-4 space-y-4 flex flex-col">
              {siteConfig.notFound.items.map((item) => (
                <Link href={item.href} key={item.title}>
                  <div className=" flex items-center space-x-4 rounded-md border p-4 max-w-sm w-full hover:scale-105 transition-all duration-200 ease-in-out group">
                    <item.icon className="w-5 h-5 group-hover:text-sphexa transition-all" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none text-left">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground text-left">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5"></ArrowRight>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              className="text-sphexa hover:text-sphexa-dark transition-all flex gap-2 justify-center items-center group"
              href="/"
            >
              <ArrowLeft className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-0.25"></ArrowLeft>{' '}
              Back to home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
