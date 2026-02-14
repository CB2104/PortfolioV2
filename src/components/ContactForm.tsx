import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const serviceID: string = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const templateID: string = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const publicKey: string = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

const toastStyles = {
  toast: "!rounded-none",
  title:
    "!text-black dark:!text-foreground font-serif uppercase tracking-wider",
  description: "!text-black dark:!text-foreground font-mono text-sm",
  icon: "!text-black dark:!text-accent",
  closeButton:
    "!border-2 !border-black dark:!border-accent hover:!bg-black hover:!text-white",
};

function ContactForm() {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    setIsSubmitting(true);

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success(t("contact.submit.success.title"), {
            description: t("contact.submit.success.descrip"),
            classNames: toastStyles,
            style: {
              border: "4px solid",
              borderColor: document.documentElement.classList.contains("dark")
                ? "var(--accent)"
                : "black",
              borderRadius: "0",
              background: document.documentElement.classList.contains("dark")
                ? "var(--background)"
                : "white",
            },
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          toast.error(t("contact.submit.error.title"), {
            description: t("contact.submit.error.descrip"),
            classNames: toastStyles,
            style: {
              border: "4px solid",
              borderColor: document.documentElement.classList.contains("dark")
                ? "var(--chart-5)"
                : "red",
              borderRadius: "0",
              background: document.documentElement.classList.contains("dark")
                ? "var(--background)"
                : "white",
            },
          });
          console.log("Error", error.text);
        },
      );
    setIsSubmitting(false);
  };

  return (
    <div className="py-20 border-t-4 border-double border-border" id="contacto">
      <section className="min-h-screen px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="border-4 border-black dark:border-accent p-6 mb-8">
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-center border-b-2 border-black dark:border-accent pb-4 mb-4">
              {t("contact.title")}
            </h2>
            <p className="font-serif italic text-center">
              {t("contact.subtitle")}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <article className="border-4 border-black bg-white dark:bg-background dark:border-accent ">
                <div className="border-b-2 border-black p-4 bg-black text-white dark:border-accent dark:bg-accent dark:text-accent-foreground">
                  <h3 className="font-serif uppercase text-sm tracking-wider">
                    {t("contact.info.title")}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3 border-b-2 border-black pb-4 dark:border-accent">
                    <div className="p-2 border-2 border-black dark:border-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif uppercase text-xs tracking-widest mb-1">
                        {t("contact.info.mail")}
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
                        {t("contact.info.phone")}
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
                        {t("contact.info.phone")}
                      </h4>
                      <p className="font-mono text-sm">Buenos Aires, BA</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="border-4 border-black bg-white p-6 dark:border-accent dark:bg-background dark:text-foreground">
                <h3 className="font-serif uppercase text-xs tracking-widest mb-3 border-b-2 border-black pb-2 dark:border-accent">
                  {t("contact.hour.title")}
                </h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between">
                    <span>{t("contact.hour.days")}</span>
                    <span>9AM - 8PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.hour.day")}</span>
                    <span>10AM - 2PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.hour.rest")}</span>
                    <span>{t("contact.hour.text")}</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <article className="border-4 border-black bg-white dark:border-accent dark:bg-accent-foreground">
                <div className="border-b-2 border-black p-4 bg-black text-white dark:border-accent dark:bg-accent dark:text-accent-foreground">
                  <h3 className="font-serif text-xl uppercase tracking-wide">
                    {t("contact.formContact.title")}
                  </h3>
                </div>
                <form
                  onSubmit={sendEmail}
                  ref={formRef}
                  className="p-6 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block font-serif uppercase text-xs tracking-widest mb-2 dark:text-accent"
                      >
                        {t("contact.formContact.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                        className="w-full px-4 py-3 border-2 focus:bg-neutral-200 border-black dark:bg-ring focus:outline-none focus:ring-2 focus:ring-black font-mono dark:border-accent dark:focus:bg-accent dark:text-accent-foreground"
                        placeholder={t("contact.formContact.inputName")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-serif uppercase text-xs tracking-widest mb-2 dark:text-accent"
                      >
                        {t("contact.formContact.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                        className="w-full px-4 py-3 border-2 focus:bg-neutral-200 border-black focus:outline-none dark:bg-ring focus:ring-2 focus:ring-black font-mono dark:border-accent dark:focus:bg-accent dark:text-accent-foreground"
                        placeholder="12345@google.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-serif uppercase text-xs tracking-widest mb-2 dark:text-accent"
                    >
                      {t("contact.formContact.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      disabled={isSubmitting}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 focus:bg-neutral-200 border-black focus:outline-none dark:bg-ring focus:ring-2 focus:ring-black font-mono dark:border-accent dark:focus:bg-accent dark:text-accent-foreground"
                      placeholder={t("contact.formContact.inputSubject")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-serif uppercase text-xs tracking-widest mb-2 dark:text-accent"
                    >
                      {t("contact.formContact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      disabled={isSubmitting}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 focus:bg-neutral-200 border-black focus:outline-none focus:ring-2 focus:ring-black font-mono resize-none dark:bg-ring dark:border-accent dark:focus:bg-accent dark:text-accent-foreground"
                      placeholder={t("contact.formContact.inputMessage")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 dark:border-accent dark:bg-accent dark:text-accent-foreground dark:hover:bg-background bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 font-serif uppercase tracking-wider "
                  >
                    <Send size={20} />
                    {isSubmitting
                      ? t("contact.formContact.sending")
                      : t("contact.formContact.send")}
                  </button>
                </form>
              </article>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
