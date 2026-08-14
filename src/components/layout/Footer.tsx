import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-rp-navy text-white pt-16 pb-8 border-t-[6px] border-rp-gold">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Identidad */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rp-navy font-serif font-bold text-xl">
              RP
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">I.E. Ricardo Palma</h3>
              <p className="text-rp-gold text-sm font-medium">Unión Perené</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Formando líderes con excelencia académica y formación técnica en el corazón de la Selva Central. 
            Colegio Público de Gestión Directa - UGEL Pichanaki.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Enlaces Rápidos</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/nosotros" className="hover:text-rp-gold transition-colors">Nuestra Historia</Link></li>
            <li><Link href="/talleres" className="hover:text-rp-gold transition-colors">Especialidades Técnicas</Link></li>
            <li><Link href="/matricula" className="hover:text-rp-gold transition-colors">Proceso de Matrícula 2026</Link></li>
            <li><Link href="/noticias" className="hover:text-rp-gold transition-colors">Comunicados</Link></li>
            <li><Link href="/transparencia" className="hover:text-rp-gold transition-colors">Transparencia y Documentos</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Contáctanos</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rp-gold shrink-0 mt-0.5" />
              <span>Calle Los Ingenieros S/N, Mz. P, Lote 01.<br/>Centro Poblado Unión Perené,<br/>Chanchamayo, Junín.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-rp-gold shrink-0" />
              <span>+51 (064) 000-000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-rp-gold shrink-0" />
              <span>informes@rpsoriano.edu.pe</span>
            </li>
          </ul>
        </div>

        {/* Horario y Redes */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Atención y Redes</h4>
          <ul className="space-y-4 text-sm text-gray-300 mb-6">
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-rp-gold shrink-0 mt-0.5" />
              <span>Lunes a Viernes<br/>08:00 AM - 03:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 I.E. Ricardo Palma Soriano. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0">
          Diseñado y donado con fines educativos | Código Modular: 1214451
        </p>
      </div>
    </footer>
  );
}
