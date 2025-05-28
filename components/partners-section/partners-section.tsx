import SVGIcon from "../svg-icon";

const PartnersSection = () => {
  return (
    <section
      className="mb-12 border-t pt-8"
      aria-label="Official partners section"
    >
      <div className="text-center">
        <h3 className="text-xs font-bold text-black mt-2 mb-10" aria-level={3}>
          WE ARE OFFICIAL PARTNERS FOR
        </h3>
        <div
          className="w-full flex justify-center gap-10 mix-blend-luminosity items-center flex-wrap space-x-12 opacity-70"
          role="list"
          aria-label="Partner logos"
        >
          <SVGIcon icon="card-presso" aria-label="Card Presso logo" />
          <SVGIcon icon="dascom" aria-label="Dascom logo" />
          <SVGIcon icon="matica" aria-label="Matica logo" />
          <SVGIcon icon="evolis" aria-label="Evolis logo" />
          <SVGIcon icon="zebra" aria-label="Zebra logo" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
