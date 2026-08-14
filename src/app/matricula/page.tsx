import { CheckCircle2, CalendarDays, FileText, AlertTriangle } from "lucide-react";
import { ClientLayout } from "@/components/layout/ClientLayout";

export const metadata = {
  title: "Proceso de Matrícula 2026 | I.E. Ricardo Palma Soriano",
};

export default function MatriculaPage() {
  return (
    <ClientLayout>
      <main className="flex-1 bg-rp-ivory py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-rp-navy mb-4">
              Proceso de Matrícula 2026
            </h1>
            <p className="text-lg text-rp-navy/70 max-w-2xl mx-auto">
              Información oficial sobre requisitos, cronograma y vacantes para el año escolar 2026 en los niveles de Inicial, Primaria y Secundaria.
            </p>
          </div>

          {/* Cronograma MINEDU */}
          <section className="mb-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6 border-b pb-4">
              <CalendarDays className="w-8 h-8 text-rp-blue" />
              <h2 className="text-2xl font-bold text-rp-navy">Cronograma Oficial (MINEDU)</h2>
            </div>
            
            <div className="relative border-l-2 border-rp-gold/30 ml-4 space-y-8 pb-4">
              <TimelineItem 
                date="15 Dic 2025 - 29 Dic 2025" 
                title="Cálculo de Vacantes" 
                desc="La dirección publica el número de vacantes disponibles por nivel y grado."
                active={false}
              />
              <TimelineItem 
                date="02 Ene 2026 - 15 Ene 2026" 
                title="Presentación de Solicitudes" 
                desc="Recepción de documentos para estudiantes nuevos (Mesa de Partes Virtual/Presencial)."
                active={true}
              />
              <TimelineItem 
                date="16 Ene 2026 - 20 Ene 2026" 
                title="Revisión y Asignación" 
                desc="Evaluación de expedientes según los criterios de prioridad del MINEDU (hermanos, cercanía, etc.)."
                active={false}
              />
              <TimelineItem 
                date="22 Ene 2026" 
                title="Publicación de Resultados" 
                desc="Lista oficial de estudiantes admitidos."
                active={false}
              />
            </div>
          </section>

          {/* Requisitos */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-rp-navy text-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-rp-gold" />
                <h2 className="text-2xl font-bold">Requisitos Documentales</h2>
              </div>
              <ul className="space-y-4">
                <ReqItem text="Copia DNI del estudiante (actualizado)." />
                <ReqItem text="Copia DNI del padre, madre o apoderado legal." />
                <ReqItem text="Copia de la Ficha Única de Matrícula (SIAGIE) generada por el colegio de origen." />
                <ReqItem text="Certificado de Estudios (para traslados)." />
                <ReqItem text="Copia del Carné de Vacunación (obligatorio para Inicial y 1° Primaria)." />
                <ReqItem text="Constancia de Tamizaje de Hemoglobina (según normativa MINSA/MINEDU)." />
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col justify-center">
              <h3 className="text-xl font-bold text-rp-navy mb-4">Criterios de Prioridad (Estudiantes Nuevos)</h3>
              <p className="text-sm text-rp-navy/70 mb-6">En caso la demanda supere el número de vacantes, la I.E. aplicará los siguientes criterios de prelación según la Directiva del MINEDU:</p>
              <ul className="space-y-3 text-sm text-rp-navy/80">
                <li className="flex gap-2"><span className="font-bold text-rp-blue">1.</span> Tener hermanos matriculados en la Institución Educativa.</li>
                <li className="flex gap-2"><span className="font-bold text-rp-blue">2.</span> Estudiantes con Necesidades Educativas Especiales (NEE) asociadas a discapacidad (se reservan 2 vacantes por aula).</li>
                <li className="flex gap-2"><span className="font-bold text-rp-blue">3.</span> Residencia en la zona de influencia (Unión Perené / Santa Rosa).</li>
              </ul>
              
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex gap-3 text-amber-800 text-sm">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <p><strong>Recuerde:</strong> La matrícula en las instituciones educativas públicas es <strong>completamente gratuita</strong>. No está condicionada al pago de APAFA, donaciones o compra de uniformes.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </ClientLayout>
  );
}

function TimelineItem({ date, title, desc, active }: { date: string, title: string, desc: string, active: boolean }) {
  return (
    <div className="relative pl-8">
      <div className={`absolute left-[-9px] top-1 w-4 h-4 rounded-full border-4 ${active ? 'bg-rp-gold border-white shadow-[0_0_0_2px_#D4AF37]' : 'bg-gray-300 border-white shadow-[0_0_0_2px_#cbd5e1]'}`} />
      <span className={`text-sm font-bold ${active ? 'text-rp-gold' : 'text-gray-500'}`}>{date}</span>
      <h3 className="text-lg font-bold text-rp-navy mt-1">{title}</h3>
      <p className="text-rp-navy/70 text-sm mt-1">{desc}</p>
    </div>
  );
}

function ReqItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-gray-200">
      <CheckCircle2 className="w-5 h-5 text-rp-gold shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}
