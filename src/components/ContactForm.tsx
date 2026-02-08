import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20 border-t-4 border-double border-border" id="contacto">
      <section className="min-h-screen px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="border-4 border-black dark:border-accent p-6 mb-8">
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-center border-b-2 border-black dark:border-accent pb-4 mb-4">
              Estemos En Contacto
            </h2>
            <p className="font-serif italic text-center">
              Envía tu consulta - respuesta garantizada en las próximas 24
              horas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <article className="border-4 border-black bg-white dark:bg-background dark:border-accent ">
                <div className="border-b-2 border-black p-4 bg-black text-white dark:border-accent dark:bg-accent dark:text-accent-foreground">
                  <h3 className="font-serif uppercase text-sm tracking-wider">
                    Contact Information
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3 border-b-2 border-black pb-4 dark:border-accent">
                    <div className="p-2 border-2 border-black dark:border-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        Email
                      </h4>
                      <p className="font-mono text-sm">
                        cesar.dbastidas@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-b-2 border-black pb-4 dark:border-accent">
                    <div className="p-2 border-2 border-black dark:border-accent">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        Phone
                      </h4>
                      <p className="font-mono text-sm">+54 (911) 32871814</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 border-2 border-black dark:border-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        Ubicación
                      </h4>
                      <p className="font-mono text-sm">Buenos Aires, BA</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="border-4 border-black bg-white p-6 dark:border-accent dark:bg-background dark:text-foreground">
                <h3 className="font-serif uppercase text-xs tracking-widest mb-3 border-b-2 border-black pb-2 dark:border-accent">
                  Horas Activo
                </h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between">
                    <span>Lun - Vie</span>
                    <span>9AM - 8PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabado</span>
                    <span>10AM - 2PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Solo mensajes</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <article className="border-4 border-black bg-white dark:border-accent dark:bg-accent-foreground">
                <div className="border-b-2 border-black p-4 bg-white dark:border-accent dark:bg-accent">
                  <h3 className="font-serif text-xl uppercase tracking-wide">
                    Enviar un Mensaje
                  </h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block font-serif uppercase text-xs tracking-widest mb-2"
                      >
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-black dark:bg-ring focus:outline-none focus:ring-2 focus:ring-black font-mono dark:border-accent dark:focus:bg-accent dark:text-accent-foreground"
                        placeholder="Nombre Completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-serif uppercase text-xs tracking-widest mb-2"
                      >
                        Dirección de Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-black focus:outline-none dark:bg-ring focus:ring-2 focus:ring-black font-mono dark:border-accent dark:focus:bg-accent dark:text-accent-foreground"
                        placeholder="nombre@google.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-serif uppercase text-xs tracking-widest mb-2"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none dark:bg-ring focus:ring-2 focus:ring-black font-mono dark:border-accent dark:focus:bg-accent dark:text-accent-foreground"
                      placeholder="Consulta de proyecto"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-serif uppercase text-xs tracking-widest mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black font-mono resize-none dark:bg-ring dark:border-accent dark:focus:bg-accent dark:text-accent-foreground"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 dark:border-accent dark:bg-accent dark:text-accent-foreground dark:hover:bg-background bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 font-serif uppercase tracking-wider "
                  >
                    <Send size={20} />
                    Contáctame
                  </button>
                </form>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
