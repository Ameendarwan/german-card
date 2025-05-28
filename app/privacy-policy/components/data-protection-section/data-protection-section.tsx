const DataProtectionSection = () => {
  return (
    <section
      className="mb-12 mt-6"
      aria-label="Data Protection Overview Section"
    >
      <h2 className="text-[44px] mb-6">1. Data protection at a glance</h2>

      <div
        className="mb-8"
        aria-label="General information about data protection"
      >
        <h3 className="text-[32px] mb-4">General information</h3>
        <p className="text-text leading-relaxed mb-4 font-medium">
          The following notes provide a simple overview of what happens to your
          personal data when you visit this website. Personal data is all data
          with which you can be personally identified. Detailed information on
          the subject of data protection can be found in our privacy policy
          listed under this text.
        </p>
      </div>

      <div className="mb-8" aria-label="Data collection on this website">
        <h3 className="text-[32px] mb-4">Data collection on this website</h3>

        <div className="pl-6">
          <h4 className="text-2xl font-medium mb-3">
            Who is responsible for the data collection on this website?
          </h4>
          <p className="text-text leading-relaxed mb-4 font-medium">
            The data processing on this website is carried out by the website
            operator. His contact details can be found in the section "Note on
            the responsible body" in this privacy policy.
          </p>

          <h4 className="text-2xl font-medium mb-3">
            How do we gather your data?
          </h4>
          <p className="text-text leading-relaxed mb-4 font-medium">
            On the one hand, your data is collected by the fact that you provide
            it to us. Here it can be e.g. B. data that you enter in a contact
            form. Other data is collected automatically or after your consent
            when you visit the website by our IT systems. These are mainly
            technical data (e.g. Internet browser, operating system or time of
            page view). This data is collected automatically as soon as you
            enter this website.
          </p>

          <h4 className="text-2xl font-medium mb-3">
            For what purposes do we use your data?
          </h4>
          <p className="text-text leading-relaxed mb-4 font-medium">
            Part of the data is collected to ensure the error-free provision of
            the website. Other data can be used to analyze your user behavior.
          </p>

          <h4 className="text-2xl font-medium mb-3">
            What rights do you have with regard to your data?
          </h4>
          <p className="text-text leading-relaxed mb-4 font-medium">
            You have the right at any time to receive information free of charge
            about the origin, recipient and purpose of your stored personal
            data. You also have the right to request the correction or deletion
            of this data. If you have given your consent to data processing, you
            can revoke this consent at any time for the future. You also have
            the right to request the restriction of the processing of your
            personal data under certain circumstances. Furthermore, you have a
            right of appeal to the competent supervisory authority.
          </p>
          <p className="text-text leading-relaxed font-medium">
            For this and for further questions about data protection, you can
            contact us at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataProtectionSection;
