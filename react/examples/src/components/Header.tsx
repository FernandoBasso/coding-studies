type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return <h2>{title}</h2>;
}
