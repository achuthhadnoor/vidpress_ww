"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#docs",
    label: "Documentation",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Efficient Video Compression",
    description: "Compress videos without compromising quality using advanced algorithms.",
  },
  {
    title: "Fast Processing",
    description: "Lightning-fast compression speeds with multi-threaded processing support.",
  },
  {
    title: "Format Support",
    description: "Support for all major video formats including MP4, MOV, AVI, and more.",
  },
  {
    title: "Custom Settings",
    description: "Fine-tune compression parameters to match your specific needs.",
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card backdrop-blur-lg">
      <Link href="/" className="font-bold text-lg items-center flex gap-2">
        <svg className="h-[36px] w-[36px]" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="326" height="326" rx="96" fill="url(#paint0_linear_4365_90)" />
          <rect x="2" y="2" width="322" height="322" rx="94" stroke="url(#paint1_linear_4365_90)" stroke-opacity="0.6" stroke-width="4" />
          <g filter="url(#filter0_i_4365_90)">
            <path d="M153.275 72.2138C94.5124 66.6442 26.8836 171.211 102.73 231.958C111.234 238.768 122.317 230.731 120.153 220.053L116.689 202.96C114.87 193.982 122.658 185.988 131.681 187.574L150.281 190.843C158.239 192.242 165.532 186.119 165.532 178.039V149.352C165.532 141.921 173.553 137.258 180.011 140.934V140.934C186.273 144.5 194.096 140.223 194.476 133.027L196.764 89.6804C197.057 84.1308 200.993 79.0766 206.45 80.1237C249.876 88.4552 310.937 221.86 165.532 254" stroke="white" stroke-width="22" stroke-linecap="round" />
          </g>
          <defs>
            <filter id="filter0_i_4365_90" x="58.0166" y="60.9989" width="209.982" height="208.003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4365_90" />
            </filter>
            <linearGradient id="paint0_linear_4365_90" x1="163" y1="0" x2="163" y2="326" gradientUnits="userSpaceOnUse">
              <stop stop-color="#683EFF" />
              <stop offset="1" stop-color="#21115B" />
            </linearGradient>
            <linearGradient id="paint1_linear_4365_90" x1="163" y1="0" x2="163" y2="326" gradientUnits="userSpaceOnUse">
              <stop stop-color="#151515" />
              <stop offset="1" stop-color="#9C99FF" />
            </linearGradient>
          </defs>
        </svg>

        Vidpress
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Shadcn
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem className="gap-5 flex font-semibold">
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-400">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="Download vidpress"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            Download
          </Link>
        </Button>
      </div>
    </header>
  );
};
