"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, GraduationCap, Calendar, Phone, Info } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros", icon: <Info className="w-4 h-4" /> },
    { name: "Especialidades", href: "/talleres", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Matrícula", href: "/matricula", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Noticias", href: "/noticias", icon: <Calendar className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Topbar para emergencias / contactos rápidos */}
      <div className="bg-rp-navy text-white text-xs py-2 px-6 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +51 (064) 000-000</span>
            <span>Mesa de Partes Virtual: tramite@rpsoriano.edu.pe</span>
          </div>
          <div className="flex gap-4 font-semibold">
            <Link href="/admin" className="text-rp-gold hover:text-rp-amber transition-colors">Intranet / Admin</Link>
            <a href="https://siagie.minedu.gob.pe/" target="_blank" rel="noreferrer" className="hover:underline">SIAGIE</a>
          </div>
        </div>
      </div>

      {/* Main Navbar Premium */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass shadow-md py-3" : "bg-white/95 backdrop-blur-md py-5"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Premium */}
            <div className="w-10 h-10 bg-rp-navy rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl group-hover:bg-rp-gold group-hover:text-rp-navy transition-all duration-300 premium-shadow">
              RP
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-rp-navy leading-tight">I.E. Ricardo Palma Soriano</span>
              <span className="text-xs text-rp-navy/60 font-medium tracking-wide">UNIÓN PERENÉ</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-rp-navy hover:text-rp-gold flex items-center gap-1.5 transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-rp-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-rp-navy font-bold flex items-center gap-2 py-3 border-b border-gray-50"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/admin" className="text-sm font-bold text-rp-navy bg-rp-gold p-3 rounded-lg text-center premium-shadow">Acceso Intranet / Admin</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
