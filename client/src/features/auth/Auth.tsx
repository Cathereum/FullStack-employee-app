import { useCurrentQuery } from "../../app/services/auth";

interface IAuth {
  children: JSX.Element;
}

export const Auth = ({ children }: IAuth) => {
  const { isLoading } = useCurrentQuery();
  if (isLoading) {
    return <span>Загрузка</span>;
  }

  return children;
};
