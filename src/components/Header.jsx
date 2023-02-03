import cx from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={cx.container}>
      <h1 className={cx.title}>Finance</h1>
    </header>
  );
};
