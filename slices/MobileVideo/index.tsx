import { Fragment } from "react";
import { isFilled, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MobileVideo`.
 */
export type MobileVideoProps = SliceComponentProps<Content.MobileVideoSlice>;

/**
 * Component for "MobileVideo" Slices.
 */
const MobileVideo = ({ slice }: MobileVideoProps): JSX.Element => {
  const cssId = slice.id.replace("$","")
  const flexDirection = slice?.primary?.video_placement == 'Right' ? "flex-row" :  "flex-row-reverse"
  return (
    <Fragment>
    {slice.variation != "noBar" ?
    <style>
    {`
      #${cssId} {
        background-image: linear-gradient(125deg, oklch(from ${slice?.primary?.start_colour} 0.5 0.1 h) 40%, oklch(from ${slice?.primary?.end_colour} 0.7 0.2 h) 100%);
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
      <div className={`container mx-auto text-lg max-w-5xl flex ${flexDirection} items-stretch gap-12`}>

        <div className="px-6 py-12 w-full">
          <div className="eyebrow uppercase mb-3 text-sm">{slice?.primary?.eyebrow} - {JSON.stringify(slice.variation,null,2)}</div>
          <h1 className="text-4xl font-light leading-tight -ml-[0.05em] mb-4">{slice?.primary?.title}</h1>
          <div className="text-justify prose-2xl"> 
            <PrismicRichText field={slice?.primary?.description}/>
          </div>
        </div>
        
        {isFilled.linkToMedia(slice?.primary?.video_hosted) 
          ? <div className="bg-gradient-to-br from-black to-gray-600 rounded-3xl flex p-6 items-center justify-center scale-110">
              <video autoPlay={true} controls loop className="w-[600px] aspect-[7/15] ">
                <source src={slice.primary.video_hosted.url} type="video/mp4" />
              </video>
            </div> 
          : null 
        }
      </div>

    </section>
    </Fragment>
  );
};

export default MobileVideo;
