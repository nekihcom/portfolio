import { ProfileImage } from "./ProfileImage";

type Props = {
  image: string
  name: string
  fullName: string
  title: string
}

export const ProfileBlock = (props: Props) => {
  const {image, name, fullName, title} = props;
  return (
    <>
      <div className="relative w-52 h-52 mx-auto mb-4">
        <ProfileImage image={image} name={name} />
      </div>
      <h3 className="text-2xl font-bold mb-1">{name}</h3>
      <p className="text-gray-600 mb-1">{fullName}</p>
      <p className="text-teal-600 font-medium">{title}</p>
    </>
  )
}