const HostingSection = () => {
  return (
    <section className="mb-12" aria-label="Hosting Information Section">
      <h2 className="text-[44px] mb-6">2. Hosting</h2>
      <p className="text-text leading-relaxed mb-6 font-medium">
        We host the contents of our website with the following provider:
      </p>

      <div className="mb-8 pl-12" aria-label="External hosting details">
        <h3 className="text-2xl mb-4">External hosting</h3>
        <p className="text-text leading-relaxed mb-4 font-medium">
          This website is hosted externally. The personal data collected on this
          website is stored on the servers of the hoster / hoster. These can
          include IP addresses, contact requests, meta and communication data,
          contract data, contact data, names, website access and other data
          generated via a website.
        </p>
        <p className="text-text leading-relaxed mb-4 font-medium">
          The external hosting is carried out for the purpose of fulfilling the
          contract with our potential and existing customers (Art. 6 para. 1
          lit. b DSGVO) and in the interest of a secure, fast and efficient
          provision of our online offer by a professional provider (Art. 6 para.
          1 lit. f DSGVO). If a corresponding consent has been requested, the
          processing is carried out exclusively on the basis of Art. 6 para. 1
          lit. a DSGVO and § 25 para. 1 TTDSG, insofar the consent includes the
          storage of cookies or access to information in the user's terminal
          device (e.g. device fingerprinting) within the meaning of the TTDSG.
          The consent can be revoked at any time.
        </p>
        <p className="text-text leading-relaxed mb-4 font-medium">
          Our hoster will only process your data to the extent necessary to
          fulfill its performance obligations and follow our instructions
          regarding this data.
        </p>
        <p className="text-text leading-relaxed mb-4">
          We use the following hoster(s):
        </p>
        <div
          className="text-text leading-relaxed"
          aria-label="Hosting provider contact information"
        >
          <p>Veit Frankfurt</p>
          <p>318 Elmhurst Street - Suite 800</p>
          <p>West Palm Beach, FL 33401</p>
        </div>
      </div>
    </section>
  );
};

export default HostingSection;
