import { Cpu, Scissors, Sprout, Coffee } from "lucide-react";
import { ClientLayout } from "@/components/layout/ClientLayout";

export const metadata = {
  title: "Formación Técnica | I.E. Ricardo Palma Soriano",
};

export default function TalleresPage() {
  return (
    <ClientLayout>
      <main className="flex-1 bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-rp-navy mb-4">
              Formación Técnica (EPT)
            </h1>
            <p className="text-lg text-rp-navy/70 max-w-2xl mx-auto">
              Nuestra Institución Educativa brinda una formación técnica integral. Desde el 1er año de secundaria, los estudiantes se preparan para el mundo laboral y el emprendimiento en 4 especialidades.
            </p>
          </div>

          <div className="space-y-16">
            {/* Especialidad 1: Alimentarias */}
            <TallerSection 
              title="Industrias Alimentarias"
              icon={<Coffee className="w-10 h-10 text-amber-600" />}
              color="bg-amber-50"
              borderColor="border-amber-200"
              description="Especialidad orientada al procesamiento, conservación y comercialización de productos alimenticios propios de la Selva Central (café, cacao, cítricos). Los estudiantes aprenden normas de calidad, manipulación de alimentos y emprendimiento gastronómico."
              imgUrl="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
              align="left"
            />

            {/* Especialidad 2: Computación */}
            <TallerSection 
              title="Computación e Informática"
              icon={<Cpu className="w-10 h-10 text-blue-600" />}
              color="bg-blue-50"
              borderColor="border-blue-200"
              description="Formación en tecnologías de la información, abarcando ofimática avanzada, diseño gráfico, mantenimiento y ensamblaje de computadoras, y fundamentos de programación web. Preparamos a los estudiantes para la era digital."
              imgUrl="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
              align="right"
            />

            {/* Especialidad 3: Vestido */}
            <TallerSection 
              title="Industria del Vestido (Textil)"
              icon={<Scissors className="w-10 h-10 text-purple-600" />}
              color="bg-purple-50"
              borderColor="border-purple-200"
              description="Desarrollo de competencias en diseño, patronaje, corte y confección textil. Operatividad de máquinas de coser industriales y elaboración de prendas de vestir, fomentando la creación de pequeñas empresas textiles."
              imgUrl="https://images.unsplash.com/photo-1558097926-bd8b88eb3461?q=80&w=800&auto=format&fit=crop"
              align="left"
            />

            {/* Especialidad 4: Agropecuaria */}
            <TallerSection 
              title="Agropecuaria"
              icon={<Sprout className="w-10 h-10 text-green-600" />}
              color="bg-green-50"
              borderColor="border-green-200"
              description="Enseñanza práctica sobre el cultivo de plantas, manejo de biohuertos, crianza de animales menores y gestión ambiental sostenible, aprovechando la riqueza natural de Unión Perené."
              imgUrl="https://images.unsplash.com/photo-1592982537447-6f23b7de1886?q=80&w=800&auto=format&fit=crop"
              align="right"
            />
          </div>

        </div>
      </main>
    </ClientLayout>
  );
}

function TallerSection({ title, icon, color, borderColor, description, imgUrl, align }: any) {
  const isLeft = align === "left";
  
  return (
    <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100`}>
      <div className="w-full md:w-1/2">
        <div className={`w-full h-64 md:h-80 rounded-2xl bg-cover bg-center shadow-inner`} style={{ backgroundImage: `url('${imgUrl}')` }} />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <div className={`inline-flex p-3 rounded-2xl ${color} ${borderColor} border`}>
          {icon}
        </div>
        <h2 className="text-3xl font-bold font-serif text-rp-navy">{title}</h2>
        <p className="text-rp-navy/70 text-lg leading-relaxed">{description}</p>
        <ul className="space-y-2 mt-4 text-sm font-medium text-rp-navy/80">
          <li className="flex items-center gap-2">✓ Certificación progresiva</li>
          <li className="flex items-center gap-2">✓ Talleres 100% prácticos</li>
          <li className="flex items-center gap-2">✓ Orientación al emprendimiento</li>
        </ul>
      </div>
    </div>
  );
}
