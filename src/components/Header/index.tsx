import { ISkeleton } from '@/interfaces/resume';

interface IHeaderProps {
  data: ISkeleton;
}

export const Header = ({ data }: IHeaderProps) => {
  return (
    <header>
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="text-xl font-normal">{data.title}</p>
      <p className="text-lg font-normal text-neutral-500">{data.based}</p>
    </header>
  );
};
