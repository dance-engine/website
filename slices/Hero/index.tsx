import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Fragment } from "react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const cssId = slice.id.replace("$","")
  return (
    <Fragment>
      <style>
      {`
        #${cssId} {
          background-image: linear-gradient(125deg, oklch(from ${slice.primary.start_colour} 0.7 0.25 1) 10%, oklch(from ${slice.primary.end_colour} 0.8 0.2 h) 100%);
        }
      `}
      </style>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        id={cssId}
        className={`hero w-full text-black pt-24 pb-12`} //bg-gradient-to-br from-[${slice.primary.start_colour}] to-[${slice.primary.end_colour}]`}
      >
      <div className="container mx-auto text-lg max-w-5xl p-6">
        <div className="eyebrow uppercase mb-3 font-bold">{slice.primary.eyebrow}</div>
        <h1 className="text-6xl font-light max-w-[8em] leading-[0.85em] -ml-[0.05em] mb-8">{slice.primary.title}</h1>
        <h2 className="text-3xl">{slice.primary.subtitle}</h2>
        <div className="buttons flex gap-4 mt-12 ">
          {slice.primary.buttons.map((button,index) => {
            const buttonBg = button.default ? "bg-black text-white" : "text-black"
            return <PrismicNextLink key={`${slice.id}-hero-buttons-${index}`} className={`${buttonBg} block rounded-full border-black border-2 font-bold uppercase px-6 py-2 text-lg`} field={button.destination}>{button.destination.text}</PrismicNextLink>
          })}
        </div>
      </div>
      {/* <pre>{JSON.stringify(slice,null,2)}</pre> */}
    </section>
    </Fragment>
    
  );
};

export default Hero;