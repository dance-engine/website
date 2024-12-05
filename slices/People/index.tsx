import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps, PrismicImage  } from "@prismicio/react";


/**
 * Props for `People`.
 */
export type PeopleProps = SliceComponentProps<Content.PeopleSlice>;

/**
 * Component for "People" Slices.
 */
const People = ({ slice }: PeopleProps): JSX.Element => {
  const cssId = slice.id.replace("$","")

  return (
    <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="w-full mt-8 mb-24"
    id={cssId}
  >
    { slice?.primary?.label ? <a id={slice.primary.label}></a> : null }
    <div className={`container mx-auto text-lg max-w-5xl flex flex-col gap-6 items-stretch`}>

      <div className="px-6 py-0 w-full">
        <div className="eyebrow uppercase mb-3 text-sm">{slice?.primary?.eyebrow}</div>
        <h1 className="text-4xl font-light leading-tight -ml-[0.05em] mb-4">{slice?.primary?.title}</h1>
      </div>

      {slice.primary.people.map((person,idx)=>{
        const alternator = idx % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        return <div key={`${cssId}-person-${idx}`} className={`flex flex-col items-center lg:gap-12 mb-12 ${alternator}`}>
          {/* {JSON.stringify(person)} */}
          <PrismicImage field={person.image} className="w-[256px] max-w-full lg:max-w-[384px] h-auto lg:max-h-[384px] rounded-full lg:rounded-xl"></PrismicImage>
          <div className="p-6 w-full">
            <h3 className="text-4xl">{person.name}</h3>
            <div className="text-justify prose-lg prose-p:leading-normal"> 
              <PrismicRichText field={person?.description}/>
            </div>
          </div>
          
        </div>
      })}
      
    </div>
    
  </section>
  )
};

export default People;
