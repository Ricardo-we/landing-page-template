"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState } from "react";

export default function LandingPage() {
  const t = useTranslations("LandingPage");
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const testimonials = [
    {
      name: "Nombre del Cliente 1",
      feedback: "Este es un testimonio increíble sobre tu producto o servicio.",
    },
    {
      name: "Nombre del Cliente 2",
      feedback:
        "La calidad es fantástica, y el servicio al cliente es excelente.",
    },
    {
      name: "Nombre del Cliente 3",
      feedback: "Realmente recomendaría este servicio a cualquiera.",
    },
    {
      name: "Nombre del Cliente 3",
      feedback: "Realmente recomendaría este servicio a cualquiera.",
    },
    {
      name: "Nombre del Cliente 3",
      feedback: "Realmente recomendaría este servicio a cualquiera.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {t("header.title")}
          </h1>
          <nav className="space-x-4 hidden md:flex">
            <Link
              href="/features"
              className="text-gray-600 hover:text-blue-500"
            >
              {t("header.features")}
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-500">
              {t("header.pricing")}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500">
              {t("header.contact")}
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-gray-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden bg-gray-100 shadow-lg p-4">
            <nav className="space-y-2">
              <Link
                href="/features"
                className="block text-gray-600 hover:text-blue-500"
              >
                {t("header.features")}
              </Link>
              <Link
                href="/pricing"
                className="block text-gray-600 hover:text-blue-500"
              >
                {t("header.pricing")}
              </Link>
              <Link
                href="/contact"
                className="block text-gray-600 hover:text-blue-500"
              >
                {t("header.contact")}
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-[url('/assets/hero-image.jpg')] min-h-96 bg-cover bg-center text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t("hero.title")}</h2>
          <p className="text-lg mb-6">{t("hero.subtitle")}</p>
          <Link
            href="/get-started"
            className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow hover:bg-gray-100"
          >
            {t("hero.cta")}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl lato-regular font-bold text-gray-800 text-center mb-8">
            {t("features.title")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((feature) => (
              <div key={feature} className="p-6 bg-white rounded-lg shadow">
                <h4 className="text-xl font-bold text-gray-700">
                  {t(`features.feature${feature}.title`)}
                </h4>
                <p className="text-gray-600 mt-2">
                  {t(`features.feature${feature}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-3xl lato-regular font-bold text-gray-800 text-center mb-8">
            {t("testimonials.title")}
          </h3>
          <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[300px] p-6 bg-white rounded-lg shadow flex-shrink-0"
              >
                <img
                  src={`https://via.placeholder.com/150`}
                  alt={`Testimonial ${testimonial?.name}`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-gray-700 text-center">
                  {testimonial?.name}
                </h4>
                <p className="text-gray-600 mt-2 text-center">
                  {testimonial?.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <p>{t("footer.text", { year: new Date().getFullYear() + 1 })}</p>
        </div>
      </footer>
    </div>
  );
}
