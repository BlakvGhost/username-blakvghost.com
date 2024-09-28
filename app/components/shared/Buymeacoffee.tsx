/* eslint-disable @next/next/no-img-element */
export default function Buymeacoffee() {
  return (
    <a
      href="https://www.buymeacoffee.com/kabiroualassane"
      className="flex items-center lg:flex-row flex-col lg:justify-around justify-center lg:text-start text-center gap-2 min-h-[110px] dark:bg-primary-bg bg-secondary-bg hover:dark:bg-[#2e290e44] rounded-lg border dark:border-zinc-800 border-zinc-200 hover:dark:border-[#ffdd0060] hover:border-[#e6d14fe7] duration-300 p-6 group"
      target="_blank"
      rel="noreferrer noopener"
    >
      Avez-vous envie de soutenir mon travail ? 🙂
      <img
        className="grayscale group-hover:grayscale-0 duration-300"
        alt="Buymeacoffee button"
        loading="lazy"
        src="https://img.buymeacoffee.com/button-api/?text=Offre-moi un café&emoji=&slug=BlakvGhost&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
      />
    </a>
  );
}
