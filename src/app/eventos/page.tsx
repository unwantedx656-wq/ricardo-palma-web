import { ClientLayout } from "@/components/layout/ClientLayout";
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight } from "lucide-react";

export default function EventosPage() {
  const eventos = [
    {
      fecha: "15 Marzo, 2026",
      hora: "08:00 AM - 12:00 PM",
      titulo: "Ceremonia de Buen Inicio del Año Escolar",
      lugar: "Patio de Honor I.E. Ricardo Palma",
      desc: "Acto protocolar con presencia de autoridades de la UGEL Pichanaki, directivos, plana docente y padres de familia para dar inicio a las actividades académicas.",
      tipo: "Institucional",
    },
    {
      fecha: "12 Mayo, 2026",
      hora: "09:00 AM - 01:00 PM",
      titulo: "Feria Tecnológica EPT",
      lugar: "Talleres y Losa Deportiva",
      desc: "Exhibición de los proyectos técnicos de nuestros estudiantes de Secundaria en las ramas de Computación, Industrias Alimentarias, Agropecuaria e Industria del Vestido.",
      tipo: "Académico",
    },
    {
      fecha: "25 Julio, 2026",
      hora: "08:00 AM - 02:00 PM",
      titulo: "Desfile Cívico Escolar por Fiestas Patrias",
      lugar: "Plaza Principal de Unión Perené",
      desc: "Participación oficial de nuestra escolta, estado mayor y batallones en el desfile central por el aniversario patrio.",
      tipo: "Cívico",
    },
    {
      fecha: "23 Septiembre, 2026",
      hora: "10:00 AM - 04:00 PM",
      titulo: "Olimpiadas Palmistinas y Día de la Juventud",
      lugar: "Estadio Municipal de Unión Perené",
      desc: "Jornada deportiva y de integración con competencias de fulbito, vóley, atletismo y gincana para los niveles primaria y secundaria.",
      tipo: "Deportivo",
    },
    {
      fecha: "10 Noviembre, 2026",
      hora: "Todo el día",
      titulo: "Día del Logro",
      lugar: "Aulas de Innovación y Patios",
      desc: "Demostración pública de los aprendizajes alcanzados por nuestros estudiantes en todas las áreas curriculares.",
      tipo: "Académico",
    }
  ];

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

          <div className="mt-16 text-center">
            <p className="text-gray-500 italic mb-4">Las fechas están sujetas a modificaciones por parte del Ministerio de Educación (MINEDU) o la UGEL Pichanaki.</p>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
}
