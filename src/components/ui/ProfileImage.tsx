import Image from "next/image"

type Props = {
  image: string
  name: string
}

export const ProfileImage = (props: Props) => {
  const {image, name} = props;
  return (
    <>
      <Image
        src={image}
        alt={name}
        fill
        className="rounded-full object-cover"
      />
    </>
  )
}