import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

type Props = {
  src: string;
  alt: string;
  widthAspect: number;
  heightAspect: number;
};
export default function MDXImage({
  src,
  alt,
  widthAspect,
  heightAspect,
}: Props) {
  return (
    <div className="px-8 py-4 md:px-12 md:py-8 lg:px-16 lg:py-10">
      <AspectRatio ratio={widthAspect / heightAspect}>
        <Image src={src} alt={alt} fill className=" object-cover" />
      </AspectRatio>
    </div>
  );
}
