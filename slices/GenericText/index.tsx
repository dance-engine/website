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
    <section className="p-4 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        {slice.primary.last_updated && (
          <p className="text-sm text-gray-500 mb-6">
            Last Updated: {new Date(slice.primary.last_updated).toLocaleDateString()}
          </p>
        )}
        <div className="prose">
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default GenericText;
