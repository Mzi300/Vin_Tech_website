import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl font-bold mb-8 text-white">Terms of Use</h1>
          <div className="text-slate-300 space-y-6 text-sm leading-relaxed">
            <p>
              Welcome to the VinTechs corporate website. By accessing or using our website, services, and software intelligence tools, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you are agreeing to be bound by these terms of use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p>
              All content on this website, including but not limited to branding, application design, logic, source code, and our flagship products (such as VinMaps), are the intellectual property of VinTechs Solutions (Pty) Ltd. Unauthorized use or duplication of materials is strictly prohibited.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Limitation of Liability</h2>
            <p>
              VinTechs provides its services &quot;as is&quot; without any warranties, expressed or implied. We are not liable for any damages arising out of the use or inability to use our systems or enterprise services, including data loss or operational interruptions.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of South Africa, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
