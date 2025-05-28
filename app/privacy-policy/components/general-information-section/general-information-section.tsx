const GeneralInformationSection = () => {
  return (
    <section
      className="mb-12"
      aria-label="General information and mandatory information section"
    >
      <h2 className="text-[44px] mb-6">
        3. General information and mandatory information
      </h2>
      <p className="text-text leading-relaxed mb-6 font-medium">
        We host the contents of our website with the following provider:
      </p>

      <div className="mb-8 pl-12" aria-label="Data privacy details">
        <h3 className="text-2xl mb-4">Data privacy</h3>
        <p className="text-text leading-relaxed mb-4 font-medium">
          The operators of these pages take the protection of your personal data
          very seriously. We treat your personal data confidentially and in
          accordance with the statutory data protection regulations and this
          data protection declaration.
        </p>
        <p className="text-text leading-relaxed mb-4 font-medium">
          When you use this website, various personal data are collected.
          Personal data is data with which you can be personally identified.
          This privacy policy explains what data we collect and what we use it
          for. She also explains how and for what purpose this is done.
        </p>
        <p className="text-text leading-relaxed mb-4 font-medium">
          We would like to point out that the data transmission on the Internet
          (e.g. when communicating by e-mail) may have security gaps. A complete
          protection of the data against access by third parties is not
          possible.
        </p>
      </div>

      <div className="mb-8" aria-label="Responsible authority information">
        <h3 className="text-2xl mb-4">Note on the responsible authority</h3>
        <p className="text-text leading-relaxed mb-4 font-medium">
          The authority responsible for data processing on this website is:
          GERMANCARD Technologies GmbH
        </p>
        <address className="text-text leading-relaxed mb-4 font-medium not-italic">
          <p>Managing Director & Managing Director Henryk Timme</p>
          <p>Ohmstr. 5</p>
          <p>50170 Kerpen</p>
          <p>Germany</p>
          <p>
            Phone:{" "}
            <a href="tel:+4922736074900" className="underline">
              022736074900
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <a href="mailto:office@germancard.de" className="underline">
              office@germancard.de
            </a>
          </p>
        </address>
        <p className="text-text leading-relaxed font-medium">
          The responsible body is the natural or legal person who alone or
          jointly with others is responsible for the purposes and means of
          processing personal data (e.g. B. Names, e-mail addresses o. Ä.)
          decides.
        </p>
      </div>
    </section>
  );
};

export default GeneralInformationSection;
