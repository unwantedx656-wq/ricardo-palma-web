import { Calendar, ChevronRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Noticias y Comunicados | I.E. Ricardo Palma Soriano",
};

// Next.js App Router: Forzamos la revalidación cada 60 segundos (ISR)
export const revalidate = 60;

export default async function NoticiasPage() {
  // Consultar a Supabase
  const { data: noticias, error } = await supabase
    .from('noticias')
    .select('*')
    .order('created_at', { ascending: false });

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

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3 mb-8">
              <AlertCircle className="w-5 h-5" />
              <p>Error al cargar las noticias. Asegúrate de haber creado la tabla en Supabase.</p>
            </div>
          )}

          {noticias?.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-rp-navy mb-2">Aún no hay comunicados</h3>
              <p className="text-gray-500">Las noticias publicadas desde el panel de administración aparecerán aquí.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticias?.map((noticia: any) => (
                <article key={noticia.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                  <div 
                    className="h-48 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${noticia.img_url || 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800'}')` }}
                  />
                  <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-rp-ivory text-rp-blue text-xs font-bold rounded-full uppercase tracking-wider">
                        {noticia.category || "Comunicado"}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                        <Calendar className="w-3 h-3" />
                        {new Date(noticia.created_at).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' })}
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
          )}
        </div>
      </main>
    </ClientLayout>
  );
}
