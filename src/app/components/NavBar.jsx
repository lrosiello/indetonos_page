"use client"
import React from "react";
import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { useState } from "react";
import {useRouter} from 'next/navigation'
export default function App() {
  const menuItems = [
    {"title": "Go to home", "keyword": "" },
    {"title": "Discography", "keyword": "discography" },
    {"title": "Singles", "keyword": "singles" },
    {"title": "Videography", "keyword": "videography" },
    {"title": "Some live shows", "keyword": "lives" },
    {"title": "About us", "keyword": "about" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <Navbar  isBordered
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle style={{color:"black"}} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image style={{padding:5}}
            alt="logo"
            className="object-cover rounded-xl"
            src= "/logo.png"
            width={50}
            onClick={() => router.push('/')}  
          />
          <h1 className="font-bold text-inherit text-primary" onClick={() => router.push('/')}>INDETONOS</h1>
        </NavbarBrand>
      </NavbarContent>


      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={`/${item.keyword}`}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
