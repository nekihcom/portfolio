import Link from "next/link"

type Props = {
  href: string
  text: string
  style?: string
}

export const BgLink = (props: Props) => {
  const { href, text, style='bg-teal-600 text-white hover:bg-teal-700 ' } = props;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-8 py-3 rounded-lg transition-colors ${style}`}
    >
      {text}
    </Link>
  )
}