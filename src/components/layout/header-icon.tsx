import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  selected?: boolean;
  srcSelected?: string;
};
{
  /* o ? representa opcional*/
}
export const HeaderIcon = ({ src, alt, selected, srcSelected }: Props) => {
  return (
    /* size 12 equivale ao tamanho 48px */
    <div
      className={`size-12 border border-gray-200 rounded-sm flex items-center justify-center ${
        selected ? 'bg-blue-600' : ' hover:bg-gray-100'
      }`}
    >
      {!selected && (
        <Image src={src} alt={alt} width={24} height={24} className="size-6" />
      )}
      {selected && srcSelected && (
        <Image
          src={srcSelected}
          alt={alt}
          width={24}
          height={24}
          className="size-6"
        />
      )}
    </div>
  );
};
