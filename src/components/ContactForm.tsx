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
                        {t("contact.info.location")}
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
              <div className="mt-6 md:mt-[30px]">
                <a
                  className="no-underline text-[30px] mr-[15px] text-[var(--terciary-color)] inline-block transition-transform duration-500 hover:text-destructive hover:-translate-y-[5px] hover:drop-shadow-lg"
                  href="https://wa.me/+5491132871814"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
                </a>
                <a
                  className="no-underline text-[30px] mr-[15px] text-[var(--terciary-color)] inline-block transition-transform duration-500 hover:text-destructive hover:-translate-y-[5px] hover:drop-shadow-lg"
                  href="https://github.com/CB2104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
                <a
                  className="no-underline text-[30px] mr-[15px] text-[var(--terciary-color)] inline-block transition-transform duration-500 hover:text-destructive hover:-translate-y-[5px] hover:drop-shadow-lg"
                  href="https://www.linkedin.com/in/cesarbastidas-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2-66.4 0z" />
                  </svg>
                </a>
              </div>
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
