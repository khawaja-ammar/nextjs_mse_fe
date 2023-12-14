import Image from "next/image";

type Props = {
  img_dim: number;
};
export default function LogoText({ img_dim }: Props) {
  const img_text_ratio = 5.294;
  const font_size = img_dim;
  const gap = (img_dim + img_dim * img_text_ratio) / 75;
  const tot_dim = img_dim + img_dim * img_text_ratio + gap;
  return (
    <div className="flex items-center" style={{ width: tot_dim, gap: gap }}>
      <Image
        src="/images/logo.svg"
        width={img_dim}
        height={img_dim}
        alt="Company logo"
      />
      <p style={{ fontSize: font_size, lineHeight: 1 }}>TravelMandi</p>
    </div>
  );
}
