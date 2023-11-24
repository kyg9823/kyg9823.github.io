import Twemoji from "./Twemoji";

const Heading = () => {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I&apos;m <span className="font-medium">Kyle Kim</span> - Software Architect in 
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-korea" />
      </span>
    </h1>
  )
}

export default Heading;