"use client";

import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { PlusCircle, Loader2, CheckCircle2, AlertCircle, Upload } from "lucide-react";

export default function AdminNoticiasPage() {
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "Comunicado",
    img_url: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadingImage(true);
      setError(null);

      if (!e.target.files || e.target.files.length === 0) {
        throw new Error('Debes seleccionar una imagen.');
      }

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `noticia-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('imagenes')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('imagenes')
        .getPublicUrl(filePath);

      setFormData({ ...formData, img_url: publicUrl });

    } catch (err: any) {
      setError(err.message || 'Error al subir la imagen');
    } finally {
      setUploadingImage(false);
    }
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
              <label className="block text-sm font-bold text-rp-navy mb-2">Imagen Adjunta</label>
              
              {formData.img_url ? (
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-gray-50">
                  <div 
                    className="w-12 h-12 rounded bg-cover bg-center shrink-0" 
                    style={{ backgroundImage: `url(${formData.img_url})` }}
                  />
                  <div className="flex-1 truncate text-sm text-gray-500">Imagen cargada</div>
                  <button 
                    type="button" 
                    onClick={() => setFormData({...formData, img_url: ""})}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors text-xs font-bold"
                  >
                    Quitar
                  </button>
                </div>
              ) : (
                <>
                  <input 
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleUploadImage}
                  />
                  <button
                    type="button"
                    disabled={uploadingImage}
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full bg-gray-50 hover:bg-gray-100 text-rp-navy font-semibold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 border border-dashed border-gray-300 disabled:opacity-50"
                  >
                    {uploadingImage ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5 text-gray-400" />}
                    {uploadingImage ? "Subiendo..." : "Subir Foto desde PC"}
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button 
              type="submit" 
              disabled={loading || uploadingImage}
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
