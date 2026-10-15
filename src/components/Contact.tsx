import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  AlertCircle,
  Shield,
  Clock
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Anti-bot trap field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Por favor ingresa tu nombre o empresa.';
    if (!formData.email.trim()) {
      errs.email = 'El correo electrónico es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Ingresa un correo electrónico válido.';
    }
    if (!formData.subject.trim()) errs.subject = 'Indica el asunto del mensaje.';
    if (!formData.message.trim()) {
      errs.message = 'El mensaje no puede estar vacío.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'El mensaje debe tener al menos 10 caracteres.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot anti-spam verification: if filled by a bot, silently discard
    if (formData.honeypot) {
      console.warn('Bot detected via honeypot.');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Formatted mailto link for direct real email delivery
    const mailtoSubject = encodeURIComponent(`[Portafolio] ${formData.subject} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hola Joel,\n\nMi nombre es ${formData.name} (${formData.email}).\n\nMensaje:\n${formData.message}\n\n---\nEnviado desde el portafolio web.`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleCopyMessage = () => {
    const textToCopy = `De: ${formData.name} (${formData.email})\nAsunto: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-blue-600 font-bold">
          <span>06 // COMUNICACIÓN DIRECTA</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display-title">
          Iniciemos una conversación profesional
        </h2>
        <p className="text-slate-600 max-w-2xl text-base">
          Abierto a oportunidades de pasantías, proyectos colaborativos y vacantes junior en ingeniería de software.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 font-display-title">
              Canales Oficiales
            </h3>

            <div className="space-y-3 text-sm">
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-mono-code">Correo Electrónico</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {CONTACT_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-600">Clic para redactar correo</div>
                </div>
              </a>

              <a 
                href={CONTACT_INFO.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/80 hover:border-indigo-300 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-mono-code">LinkedIn</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Perfil Profesional
                  </div>
                  <div className="text-[11px] text-slate-600">Conectemos en red profesional</div>
                </div>
              </a>

              <a 
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-slate-200 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-mono-code">GitHub</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Repositorios & Código
                  </div>
                  <div className="text-[11px] text-slate-600">Explora proyectos en versión pública</div>
                </div>
              </a>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-mono-code">Ubicación Actual</div>
                  <div className="text-sm font-bold text-slate-900">
                    {CONTACT_INFO.location}
                  </div>
                  <div className="text-[11px] text-slate-600">Disponible para roles remotos o presenciales</div>
                </div>
              </div>
            </div>

            {/* Availability note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700 font-medium">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Tiempo estimado de respuesta: menos de 24 horas laborables.</span>
            </div>

          </div>
        </div>

        {/* Validated Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 font-display-title mb-1">
              Formulario de Mensaje
            </h3>
            <p className="text-xs text-slate-600 mb-6 font-normal">
              Completa los campos para preparar un mensaje estructurado y contactarme directamente.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-4 animate-fade-in">
                <div className="flex items-center gap-3 text-emerald-900 font-bold text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>¡Mensaje preparado correctamente!</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  Se ha generado el enlace a tu cliente de correo predeterminado. Si no se abrió automáticamente, puedes copiar el mensaje con un clic y enviarlo a <code className="text-blue-700 font-bold bg-white px-1.5 py-0.5 rounded border border-blue-200">{CONTACT_INFO.email}</code>.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={handleCopyMessage}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar mensaje preparado'}</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors border border-slate-300"
                  >
                    Redactar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Honeypot field (hidden from screen readers and real users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_nickname">Deja este campo vacío</label>
                  <input
                    type="text"
                    id="company_nickname"
                    name="company_nickname"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-bold text-slate-700">
                      Nombre o Empresa <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Carolina Gómez / Tech Corp"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-slate-900 text-xs sm:text-sm outline-none transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-600 focus:bg-white'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-xs font-bold text-slate-700">
                      Correo Electrónico <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@ejemplo.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-slate-900 text-xs sm:text-sm outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-600 focus:bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="text-xs font-bold text-slate-700">
                    Asunto <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ej. Oportunidad de pasantía / Proyecto de desarrollo"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-slate-900 text-xs sm:text-sm outline-none transition-colors ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-600 focus:bg-white'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-bold text-slate-700">
                    Mensaje Detallado <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe los requerimientos, el rol o el contexto del contacto..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-slate-900 text-xs sm:text-sm outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-blue-600 focus:bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje Validado</span>
                </button>

                {/* Technical Transparency Note */}
                <div className="pt-3 border-t border-slate-200 flex items-start gap-2 text-[11px] text-slate-600 leading-relaxed font-normal">
                  <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Transparencia:</strong> Protección antispam por honeypot integrada. Abre tu gestor de correo sin simular envíos ficticios.
                  </span>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};
