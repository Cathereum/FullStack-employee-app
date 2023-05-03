import { Layout as AntLayout } from "antd";
import { Header } from "../header/Header";
import styles from "./layout.module.css";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <div className={styles.main}>
      <Header />
      <AntLayout.Content style={{ height: "100%" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};
