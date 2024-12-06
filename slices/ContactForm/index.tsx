'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css";

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
  const filloutId = slice.primary.fillout_form_id?.split("/").at(-1)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full"
    >
      <div className="container mx-auto text-lg max-w-5xl w-full h-[80vh] min-height-32">
        {filloutId ? <FilloutStandardEmbed filloutId={filloutId} inheritParameters /> : null}
      </div>
    </section>
  );
};

export default ContactForm;
