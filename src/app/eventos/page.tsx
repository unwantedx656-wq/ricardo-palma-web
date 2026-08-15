"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Loader2 } from "lucide-react";

export default function EventosPage() {
  const [eventos, setEventos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEventos() {
      // Ordenamos por id o fecha, aquí por id ascendente para mantener el orden de inserción
      const { data, error } = await supabase
        .from('eventos')
        .select('*')
        .order('id', { ascending: true });
      
      if (!error && data) {
        setEventos(data);
      }
      setLoading(false);
    }
    fetchEventos();
  }, []);

  return (
    <ClientLayout>
      <main className="flex-1 bg-rp-ivory py-16 relative overflow-hidden">
        {/* Background decorators */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rp-blue/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rp-gold/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-rp-gold font-bold text-sm tracking-wide mb-4">
              <CalendarIcon className="w-4 h-4" />
              Cronograma 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-rp-navy mb-4">
              Eventos <span className="text-gradient-gold">Institucionales</span>
            </h1>
            <p className="text-lg text-rp-navy/70 max-w-2xl mx-auto font-light">
              Mantente informado sobre las fechas clave, actividades cívicas, académicas y deportivas de nuestra comunidad Palmistina.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 text-rp-gold animate-spin" />
            </div>
          ) : eventos.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl premium-shadow border border-gray-100">
              <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-rp-navy mb-2">No hay eventos programados</h3>
              <p className="text-gray-500">Aún no se ha publicado el cronograma oficial de actividades.</p>
            </div>
          ) : (

          <div className="relative border-l-4 border-rp-gold/30 ml-4 md:ml-8 space-y-12 pb-12">
            {eventos.map((evento, idx) => (
              <div 
                key={idx} 
                className="relative pl-8 md:pl-12 animate-in fade-in slide-in-from-left-8"
                style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "both" }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[18px] top-6 w-8 h-8 rounded-full bg-white border-4 border-rp-gold shadow-md flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-rp-navy" />
                </div>

                <div className="bg-white rounded-3xl p-6 md:p-8 premium-shadow hover:premium-shadow-hover transition-shadow border border-gray-100 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <span className="inline-flex px-3 py-1 bg-rp-navy/5 text-rp-navy font-bold text-xs uppercase tracking-wider rounded-lg w-fit">
                      {evento.tipo}
                    </span>
                    <div className="flex items-center gap-4 text-sm font-semibold text-rp-gold">
                      <span className="flex items-center gap-1.5 bg-rp-gold/10 px-3 py-1.5 rounded-lg">
                        <CalendarIcon className="w-4 h-4" /> {evento.fecha}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-rp-navy mb-3 group-hover:text-rp-blue transition-colors">
                    {evento.titulo}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {evento.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100 text-sm font-medium text-gray-500">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-rp-gold" /> {evento.hora}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-rp-gold" /> {evento.lugar}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-gray-500 italic mb-4">Las fechas están sujetas a modificaciones por parte del Ministerio de Educación (MINEDU) o la UGEL Pichanaki.</p>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
}
