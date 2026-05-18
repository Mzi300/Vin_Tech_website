import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
          <div className="text-slate-300 space-y-6 text-sm leading-relaxed">
            <p>
              At VinTechs, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information when you use our website, products, and services.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you manually provide to us when contacting us, requesting demonstrations, or using our products. This includes your name, email address, company details, and communication history.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">2. How We Use Information</h2>
            <p>
              The data we collect is solely used to deliver enterprise-level software, provide customer support, optimize your experience, and inform you of critical infrastructure updates or new tools from VinTechs.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Data Security and Protection</h2>
            <p>
              As a company specializing in intelligent systems and cybersecurity, data protection is paramount. We employ state-of-the-art encryption and strictly adhere to data protection regulations relevant in South Africa and globally. We do not sell your personal data to third parties.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Updates to this Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
