import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-background text-white"
    >
      <div className="container mx-auto max-w-5xl p-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {slice.primary.logo && (
            <PrismicNextImage
              className="footer-logo w-[200px] mb-4 lg:mb-0"
              field={slice.primary.logo}
            />
          )}
          <nav className="flex flex-wrap text-sm lg:text-base gap-x-6">
            {slice.primary.footer_links.map((footer_link, index) => (
              <PrismicNextLink
                key={`footer_link-${index}`}
                field={footer_link.link}
                className="hover:underline"
              >
                {footer_link.link.text}
              </PrismicNextLink>
            ))}
          </nav>
        </div>
        <div className="mt-6 text-center lg:text-left text-sm">
          <ul className="flex flex-wrap justify-center lg:justify-start gap-x-4">
            <li>
              <PrismicNextLink field={slice.primary.terms_of_service_link}>
                Terms of Service
              </PrismicNextLink>
            </li>
            <li>
              <PrismicNextLink field={slice.primary.privacy_policy_link}>
                Privacy Policy
              </PrismicNextLink>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-center lg:text-left text-xs">
          © {new Date().getFullYear()} {slice.primary.company_name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
