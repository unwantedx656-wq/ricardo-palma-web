import Link from "next/link";
import { ArrowRight, BookOpen, Users, Calendar, GraduationCap } from "lucide-react";
import { ClientLayout } from "@/components/layout/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-rp-navy text-rp-ivory">
          {/* Background Overlay Simulation */}
          <div className="absolute inset-0 bg-gradient-to-br from-rp-navy/90 to-rp-blue/80 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')" }}
          />
          
          <div className="relative z-20 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-rp-gold font-bold text-sm tracking-wide mb-2">
                <span className="w-2 h-2 rounded-full bg-rp-gold animate-pulse" />
                Matrícula Abierta 2026
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
                I.E. Pública <br />
                <span className="text-gradient-gold">
                  Ricardo Palma Soriano
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-rp-ivory/80 max-w-2xl font-light">
                Educación Inicial, Primaria y Secundaria con Formación Técnica en el corazón de la Selva Central. Formando líderes con valores y excelencia académica en Unión Perené.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link 
                  href="/matricula" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rp-gold text-rp-navy font-bold rounded-xl hover:bg-rp-amber hover:-translate-y-1 transition-all premium-shadow-hover"
                >
                  Requisitos de Matrícula
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/noticias" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  Últimos Comunicados
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:flex flex-1 justify-end">
              <div className="grid grid-cols-2 gap-4">
                <StatCard icon={<Users />} count="1,200+" label="Estudiantes Activos" />
                <StatCard icon={<GraduationCap />} count="4" label="Talleres Técnicos" />
                <StatCard icon={<BookOpen />} count="3" label="Niveles Educativos" />
                <StatCard icon={<Calendar />} count="1980" label="Año de Fundación" />
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades Técnicas Section */}
        <section className="py-24 bg-rp-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-rp-navy">Nuestra Oferta Educativa Técnica</h2>
              <p className="text-rp-navy/70 text-lg">
                Preparamos a nuestros estudiantes de Secundaria para el mundo laboral y el emprendimiento a través de 4 especialidades técnicas clave para la región Chanchamayo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TechnicalCard 
                title="Industrias Alimentarias" 
                desc="Procesamiento de café, cacao, cítricos y frutas de la región."
                color="border-amber-500"
              />
              <TechnicalCard 
                title="Computación e Informática" 
                desc="Desarrollo de software, ofimática y ensamblaje de equipos."
                color="border-blue-500"
              />
              <TechnicalCard 
                title="Industria del Vestido" 
                desc="Diseño, patronaje, corte y confección textil."
                color="border-purple-500"
              />
              <TechnicalCard 
                title="Agropecuaria" 
                desc="Gestión de cultivos, cuidado ambiental y técnicas de cultivo sostenible."
                color="border-rp-green"
              />
            </div>
          </div>
        </section>
      </main>
    </ClientLayout>
  );
}

function StatCard({ icon, count, label }: { icon: React.ReactNode, count: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
      <div className="p-3 bg-rp-gold/20 text-rp-gold rounded-xl mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{count}</div>
      <div className="text-sm text-rp-ivory/60 text-center">{label}</div>
    </div>
  );
}

function TechnicalCard({ title, desc, color }: { title: string, desc: string, color: string }) {
  return (
    <div className={`p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 ${color} group cursor-pointer`}>
      <h3 className="text-xl font-bold text-rp-navy mb-3 group-hover:text-rp-blue transition-colors">{title}</h3>
      <p className="text-rp-navy/70 mb-6 leading-relaxed">{desc}</p>
      <div className="flex items-center text-sm font-semibold text-rp-blue group-hover:text-rp-gold transition-colors">
        Leer más <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}


