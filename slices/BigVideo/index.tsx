import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
/**
 * Props for `BigVideo`.
 */
export type BigVideoProps = SliceComponentProps<Content.BigVideoSlice>;

/**
 * Component for "BigVideo" Slices.
 */
const BigVideo = ({ slice }: BigVideoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full"
    >
      { slice.primary.label ? <a id={slice.primary.label}></a> : null }
      <div className="container mx-auto text-lg max-w-5xl  py-20">

        <div className="px-6">
          <div className="eyebrow uppercase mb-3 text-sm">{slice.primary.eyebrow}</div>
          <h1 className="text-4xl font-light leading-[0.85em] -ml-[0.05em] mb-4">{slice.primary.title}</h1>
          <div className="text-lg"> 
            <PrismicRichText field={slice.primary.description}/>
          </div>
        </div>
        


        {isFilled.linkToMedia(slice.primary.video_hosted) 
          ? <video autoPlay={true} controls loop className="mt-6 rounded-xl border-4 border-gray-50/20">
              <source src={slice.primary.video_hosted.url} type="video/mp4" />
            </video>
          : <div>No video</div>}
        {/* <pre>{JSON.stringify(slice.primary,null,2)}</pre> */}

      </div>

    </section>
  );
};

export default BigVideo;
