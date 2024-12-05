import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  return (
    <header
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full"
    >
      <div className="container mx-auto max-w-5xl p-6 flex justify-between items-center">
        <PrismicNextImage
          className="es-call-to-action__image w-[300px]"
          field={slice.primary.logo} 
        /> 
        {/* variation: {slice.variation}   */}
        {/* <pre>{JSON.stringify(slice.primary,null,2)}</pre> */}
        <nav className="flex text-lg gap-6">
        {slice.primary.jump_links.map((jump_link,index) => {
            return <PrismicNextLink key={`jump_link-${index}`} field={jump_link.anchor}>{jump_link.anchor.text}</PrismicNextLink>
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
