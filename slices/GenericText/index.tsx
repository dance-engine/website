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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.text} />
    </section>
  );
};

export default GenericText;
