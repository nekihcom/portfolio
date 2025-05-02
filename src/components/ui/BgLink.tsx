import Link from "next/link"

type Props = {
  href: string
  text: string
  style: string
  target?: string
  rel?: string
}

export const BgLink = (props: Props) => {
  const { href, text, style='bg-teal-600 text-white hover:bg-teal-700 ', target='_blank', rel='noopener noreferrer' } = props;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-block px-8 py-3 ${style} transition-colors rounded-lg`}
    >
      {text}
    </Link>
  )
}