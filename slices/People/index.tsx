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
  const id = slice.id.replace("$","")

  return (
    <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="w-full mt-8 mb-24"
    id={id}
  >
    { slice?.primary?.label ? <a id={slice.primary.label}></a> : null }
    
    {
      slice.variation == 'threeColumns' 
        ? <PeopleThreeColumn people={slice} id={id}/>
        : <AlternatingPeople people={slice} id={id}/>
    }
  </section>
  )
};

export default People;

const PeopleThreeColumn = ({ people, id }: {people: Content.PeopleSlice, id?: string}): JSX.Element => {
  return (
    <div className="text-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Our team</h2>
          <p className="mt-6 text-lg/8 text-white">
            {people?.primary?.title}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.primary.people.map((person,idx) => (
            <li key={`${id}-person-${idx}`}>
              
              <PrismicImage field={person.image} className="aspect-[3/2] w-full rounded-2xl object-cover "></PrismicImage>

              <h3 className="mt-6 text-3xl font-semibold text-white">{person.name}</h3>
              <p className="text-base/7 text-white">{person.role}</p>
              <div className="mt-4 text-justify prose-lg prose-p:leading-normal text-white">
                <PrismicRichText field={person.bio} />
              </div>
              {/* <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const AlternatingPeople = ({ people, id }: {people: Content.PeopleSlice, id?: string}): JSX.Element => {
  return <div className={`container mx-auto text-lg max-w-5xl flex flex-col gap-6 items-stretch`}>

  <div className="px-6 py-0 w-full">
    <div className="eyebrow uppercase mb-3 text-sm">{people?.primary?.eyebrow}</div>
    <h1 className="text-4xl font-light leading-tight -ml-[0.05em] mb-4">{people?.primary?.title}</h1>
  </div>

  {people.primary.people.map((person,idx)=>{
    const alternator = idx % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
    return <div key={`${id}-person-${idx}`} className={`flex flex-col items-center lg:gap-12 mb-12 ${alternator}`}>
      {/* {JSON.stringify(person)} */}
      <PrismicImage field={person.image} className="w-[256px] max-w-full lg:max-w-[384px] h-auto lg:max-h-[384px] rounded-full lg:rounded-xl"></PrismicImage>
      <div className="p-6 w-full">
        <h3 className="text-4xl">{person.name}</h3>
        <div className="text-justify prose-lg prose-p:leading-normal"> 
          <PrismicRichText field={person?.bio}/>
        </div>
      </div>
      
    </div>
  })}
  
</div>
}