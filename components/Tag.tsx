import Link from "next/link";

const Tag = ({ text }: { text: string }) => {
  return (
    <Link href={`/`} className="mr-3 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 md:text-base">
      <span>#{text.split(' ').join('-')}</span>
    </Link>
  )
}

export default Tag;