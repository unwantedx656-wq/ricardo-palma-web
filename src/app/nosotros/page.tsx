import { History, Shield, Target } from "lucide-react";
import { ClientLayout } from "@/components/layout/ClientLayout";

export const metadata = {
  title: "Nuestra Institución | I.E. Ricardo Palma Soriano",
};

export default function NosotrosPage() {
  return (
    <ClientLayout>
      <main className="flex-1 bg-white">
        {/* Banner */}
        <section className="bg-rp-navy text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nuestra Institución</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Conoce nuestra historia, misión, visión y los valores que nos guían en la formación de la juventud de Unión Perené.
          </p>
        </section>

        <div className="container mx-auto px-6 py-16 max-w-5xl">
          
          {/* Misión y Visión */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-rp-ivory p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-rp-navy">
                <Target className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold font-serif text-rp-navy mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-rp-gold" /> Misión
                </h2>
                <p className="text-rp-navy/80 leading-relaxed">
                  Somos una institución educativa pública que brinda una educación integral y formación técnica a los estudiantes de la Selva Central, 
                  promoviendo el desarrollo de competencias, valores éticos e identidad cultural, con el compromiso de directivos, docentes y padres de familia.
                </p>
              </div>
            </div>
            
            <div className="bg-rp-navy p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-white">
                <Shield className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold font-serif text-rp-gold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" /> Visión al 2026
                </h2>
                <p className="text-white/90 leading-relaxed">
                  Ser reconocidos como una Institución Educativa Técnica líder en la provincia de Chanchamayo, 
                  que forma ciudadanos emprendedores, innovadores, con conciencia ambiental y preparados para afrontar los retos tecnológicos y laborales de la sociedad actual.
                </p>
              </div>
            </div>
          </section>

          {/* Reseña Histórica */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <History className="w-8 h-8 text-rp-blue" />
              <h2 className="text-3xl font-bold text-rp-navy font-serif">Reseña Histórica</h2>
            </div>
            <div className="prose prose-lg prose-blue max-w-none text-rp-navy/80">
              <p>
                La Institución Educativa Pública "Ricardo Palma Soriano", ubicada en la calle Los Ingenieros del sector Santa Rosa, 
                Centro Poblado de Unión Perené, se fundó ante la imperiosa necesidad de brindar educación secundaria a los jóvenes colonos y nativos de esta fructífera tierra cafetalera.
              </p>
              <p>
                Inició sus labores con gran esfuerzo de los padres de familia (APAFA) y la comunidad, quienes mediante faenas construyeron las primeras aulas. 
                Con el tiempo, el Ministerio de Educación reconoció oficialmente a la institución, asignándole el <strong>Código Modular 1214451</strong>.
              </p>
              <p>
                Al identificar que gran parte de los egresados se insertaban directamente en el mercado laboral local o apoyaban en las labores agrícolas de sus familias, 
                el colegio adaptó su currículo para convertirse en una <strong>Institución Educativa con Formación Técnica (Variante Técnica)</strong>. 
                De esta forma, se implementaron talleres especializados en Industrias Alimentarias, Computación, Industria del Vestido y Agropecuaria, 
                permitiendo a los estudiantes egresar con competencias técnicas certificadas.
              </p>
            </div>
          </section>

          {/* Símbolos Institucionales */}
          <section className="bg-rp-ivory rounded-3xl p-10 text-center border border-gray-100">
            <h2 className="text-3xl font-bold text-rp-navy font-serif mb-8">Símbolos y Valores Institucionales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-rp-blue mb-2">Identidad</h3>
                <p className="text-sm text-rp-navy/70">Profundo amor y respeto por nuestra diversidad cultural, revalorando nuestras raíces andinas y amazónicas (Asháninka).</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-rp-gold mb-2">Trabajo</h3>
                <p className="text-sm text-rp-navy/70">Fomento de la cultura del emprendimiento y el esfuerzo a través de nuestros talleres de formación técnica productiva.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-rp-green mb-2">Superación</h3>
                <p className="text-sm text-rp-navy/70">Búsqueda constante de la excelencia académica y personal, formando ciudadanos íntegros y resilientes.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </ClientLayout>
  );
}
