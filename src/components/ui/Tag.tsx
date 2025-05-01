
type Props = {
  tech: string
}

export const Tag = (props: Props) => {
  const { tech } = props;

  return (
    <span
      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
    >
      {tech}
    </span>
  )
}