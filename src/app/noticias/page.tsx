import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ClientLayout } from "@/components/layout/ClientLayout";

export const metadata = {
  title: "Noticias y Comunicados | I.E. Ricardo Palma Soriano",
};

// Datos simulados (En el futuro provendrán de Supabase/CMS)
const noticias = [
  {
    id: 1,
    title: "Inicio del Año Escolar 2026",
    excerpt: "Estimada comunidad educativa, les damos la bienvenida al nuevo año escolar. Conoce los horarios de ingreso para la primera semana.",
    date: "12 de Febrero, 2026",
    category: "Académico",
    imgUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Convocatoria: Feria de Ciencias EUREKA",
    excerpt: "Invitamos a todos los estudiantes de secundaria a inscribir sus proyectos de ciencia y tecnología. Habrá grandes premios.",
    date: "05 de Marzo, 2026",
    category: "Eventos",
    imgUrl: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Entrega de Qali Warma - Primera Remesa",
    excerpt: "Comunicado para los padres de familia del nivel primaria. La entrega de alimentos se realizará este viernes en el patio principal.",
    date: "28 de Febrero, 2026",
    category: "Comunicado UGEL",
    imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
  }
];

export default function NoticiasPage() {
  return (
    <ClientLayout>
      <main className="flex-1 bg-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-rp-navy mb-4">Noticias y Comunicados</h1>
              <p className="text-lg text-rp-navy/70">Mantente informado sobre las últimas actividades de nuestra institución.</p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-2">
              <span className="px-4 py-2 bg-rp-navy text-white rounded-full text-sm font-medium cursor-pointer">Todos</span>
              <span className="px-4 py-2 bg-gray-100 text-rp-navy rounded-full text-sm font-medium cursor-pointer hover:bg-gray-200 transition-colors">Académico</span>
              <span className="px-4 py-2 bg-gray-100 text-rp-navy rounded-full text-sm font-medium cursor-pointer hover:bg-gray-200 transition-colors">Eventos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <article key={noticia.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                <div 
                  className="h-48 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${noticia.imgUrl}')` }}
                />
                <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-rp-ivory text-rp-blue text-xs font-bold rounded-full uppercase tracking-wider">
                      {noticia.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                      <Calendar className="w-3 h-3" />
                      {noticia.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-rp-navy mb-3 line-clamp-2 group-hover:text-rp-blue transition-colors">
                    {noticia.title}
                  </h2>
                  <p className="text-rp-navy/70 text-sm mb-6 line-clamp-3 flex-1">
                    {noticia.excerpt}
                  </p>
                  <Link href={`/noticias/${noticia.id}`} className="inline-flex items-center text-sm font-bold text-rp-gold hover:text-rp-amber transition-colors mt-auto">
                    Leer comunicado completo <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </ClientLayout>
  );
}
