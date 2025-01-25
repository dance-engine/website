import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `GenericText`.
 */
export type GenericTextProps = SliceComponentProps<Content.GenericTextSlice>;

/**
 * Component for "GenericText" Slices.
 */
const GenericText = ({ slice }: GenericTextProps): JSX.Element => {
  return (
    <section className="flex-1 relative transition duration-150 ease-out body-font overflow-hidden ">
      <div className="prose prose-invert max-w-5xl mx-auto px-4 md:px-8 container-large my-12 md:my-24">
        {slice.primary.last_updated && (
          <p className="text-sm text-gray-400 mb-6">
            Last Updated: {new Date(slice.primary.last_updated).toLocaleDateString()}
          </p>
        )}
          <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default GenericText;
