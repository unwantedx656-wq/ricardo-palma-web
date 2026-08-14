import { Calendar, Clock, MapPin } from "lucide-react";
import { ClientLayout } from "@/components/layout/ClientLayout";

export const metadata = {
  title: "Calendario y Cronograma | I.E. Ricardo Palma Soriano",
};

const eventos = [
  {
    id: 1,
    title: "Inicio de Clases - Año Escolar 2026",
    date: "16 de Marzo, 2026",
    time: "07:30 AM",
    location: "Patio Principal",
    type: "Académico",
  },
  {
    id: 2,
    title: "Aniversario del Colegio",
    date: "23 de Mayo, 2026",
    time: "09:00 AM",
    location: "Instalaciones de la I.E.",
    type: "Cívico / Festivo",
  },
  {
    id: 3,
    title: "Desfile Cívico por Fiestas Patrias",
    date: "27 de Julio, 2026",
    time: "08:00 AM",
    location: "Plaza Principal de Unión Perené",
    type: "Cívico",
  },
  {
    id: 4,
    title: "Feria de Ciencias y Tecnología EUREKA",
    date: "15 de Agosto, 2026",
    time: "10:00 AM",
    location: "Auditorio de la I.E.",
    type: "Académico",
  },
];

export default function EventosPage() {
  return (
    <ClientLayout>
      <main className="flex-1 bg-rp-ivory py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-rp-navy mb-4">
              Calendario Escolar
            </h1>
            <p className="text-lg text-rp-navy/70 max-w-2xl mx-auto">
              Revisa nuestro cronograma de actividades académicas, fechas cívicas y eventos institucionales del año.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="space-y-6">
              {eventos.map((evento) => (
                <div key={evento.id} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-gray-100 hover:border-rp-gold/50 hover:shadow-md transition-all group">
                  <div className="md:w-48 shrink-0 flex flex-col justify-center items-center p-4 bg-rp-navy rounded-xl text-white">
                    <span className="text-sm font-bold uppercase tracking-wider text-rp-gold">{evento.date.split(' de ')[1]?.split(',')[0] || 'Mes'}</span>
                    <span className="text-4xl font-bold font-serif">{evento.date.split(' de ')[0]}</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-rp-ivory text-rp-blue text-xs font-bold rounded-full uppercase tracking-wider">
                        {evento.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-rp-navy mb-3 group-hover:text-rp-blue transition-colors">{evento.title}</h3>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-rp-navy/70">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-rp-gold" />
                        <span>{evento.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-rp-gold" />
                        <span>{evento.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
}
