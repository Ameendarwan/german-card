import Header from "@/components/header";
import HeroSection from "@/app/privacy-policy/components/hero-section";
import DataProtectionSection from "@/app/privacy-policy/components/data-protection-section";
import HostingSection from "@/app/privacy-policy/components/hosting-section";
import GeneralInformationSection from "@/app/privacy-policy/components/general-information-section";
import PartnersSection from "@/components/partners-section";
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Topbar />
      <div className="bg-white md:mx-16 mx-4">
        <Header />
        <HeroSection />
        <main className="">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <DataProtectionSection />
            <HostingSection />
            <GeneralInformationSection />
          </div>
          <PartnersSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
