"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { PlusCircle, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminNoticiasPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "Comunicado",
    img_url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { error: supabaseError } = await supabase
        .from('noticias')
        .insert([formData]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setFormData({ title: "", excerpt: "", category: "Comunicado", img_url: "" }); // Limpiar formulario
    } catch (err: any) {
      setError(err.message || "Error al guardar la noticia.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000); // Ocultar mensaje después de 5s
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-rp-navy">Gestor de Noticias</h1>
        <p className="text-gray-500 mt-1">Publica nuevos comunicados directamente en la web de la I.E. Ricardo Palma.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl">
        <h2 className="text-xl font-bold text-rp-navy mb-6 flex items-center gap-2 border-b pb-4">
          <PlusCircle className="w-5 h-5 text-rp-gold" />
          Crear Nueva Noticia
        </h2>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5" />
            <p className="font-medium">¡Noticia publicada con éxito en el portal!</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-rp-navy mb-2">Título de la Noticia</label>
            <input 
              required
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ej: Inicio de Matrículas 2026"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-rp-navy mb-2">Extracto / Resumen Corto</label>
            <textarea 
              required
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
              placeholder="Escribe un breve resumen de lo que trata la noticia..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-rp-navy mb-2">Categoría</label>
              <select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all bg-white"
              >
                <option value="Comunicado">Comunicado Oficial</option>
                <option value="Académico">Académico</option>
                <option value="Eventos">Eventos</option>
                <option value="Logros">Logros Institucionales</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-rp-navy mb-2">URL de la Imagen (Opcional)</label>
              <input 
                type="url" 
                name="img_url"
                value={formData.img_url}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-rp-navy hover:bg-rp-blue text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <PlusCircle className="w-5 h-5" />}
              {loading ? "Publicando..." : "Publicar Noticia"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
