import SVGIcon from "../svg-icon";

const PartnersSection = () => {
  return (
    <section className="mb-12 border-t pt-8">
      <div className="text-center">
        <h3 className="text-xs font-bold text-black mt-2 mb-10">
          WE ARE OFFICIAL PARTNERS FOR
        </h3>
        <div className="w-full flex justify-center gap-10 mix-blend-luminosity items-center flex-wrap space-x-12 opacity-70">
          <SVGIcon icon="card-presso" />
          <SVGIcon icon="dascom" />
          <SVGIcon icon="matica" />
          <SVGIcon icon="evolis" />
          <SVGIcon icon="zebra" />
        </div>
      </div>
    </section>
  );
};
export default PartnersSection;
