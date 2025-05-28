const HeroSection = () => {
  return (
    <section
      className="bg-blue-50 py-[80px] rounded-lg"
      aria-label="Privacy Policy Hero Section"
    >
      <div className=" max-w-7xl mx-auto max-sm:w-full max-sm:px-10 flex flex-col gap-2">
        <h1 className="text-[44px] text-black mb-4">Privacy Policy</h1>
        <p
          className="text-text font-medium leading-relaxed max-w-[500px]"
          aria-label="Privacy policy description"
        >
          Details the methods we use to collect, handle, and safeguard your
          personal information, ensuring your privacy and data security while
          using our website.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
