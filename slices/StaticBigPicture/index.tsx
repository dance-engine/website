import { Fragment } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps, PrismicImage  } from "@prismicio/react";

/**
 * Props for `StaticBigPicture`.
 */
export type StaticBigPictureProps =
  SliceComponentProps<Content.StaticBigPictureSlice>;

/**
 * Component for "StaticBigPicture" Slices.
 */
const StaticBigPicture = ({ slice }: StaticBigPictureProps): JSX.Element => {
  const cssId = slice.id.replace("$","")

  return (
    <Fragment>
    { slice?.primary?.start_colour && slice?.primary?.end_colour ?
    <style>
    {`
      #${cssId} {
        background-image: linear-gradient(125deg, oklch(from ${slice?.primary?.start_colour} 0.5 0.2 h) 40%, oklch(from ${slice?.primary?.end_colour} 0.7 0.2 h) 100%);
      }
    `}
    </style> : null }
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full mt-8 mb-24"
      id={cssId}
    >
      { slice?.primary?.label ? <a id={slice.primary.label}></a> : null }
      <div className={`container mx-auto text-lg max-w-5xl flex flex-col items-stretch`}>

        <div className="px-6 py-12 w-full">
          <div className="eyebrow uppercase mb-3 text-sm">{slice?.primary?.eyebrow}</div>
          <h1 className="text-4xl font-light leading-tight -ml-[0.05em] mb-4">{slice?.primary?.title}</h1>
          <div className="text-justify prose-2xl"> 
            <PrismicRichText field={slice?.primary?.description}/>
          </div>
        </div>
        
        {slice?.primary?.image 
          ? <PrismicImage field={slice.primary.image} className="relative top-8 -mt-20"/>
          : null 
        }
      </div>

    </section>
    </Fragment>
  );
};

export default StaticBigPicture;
