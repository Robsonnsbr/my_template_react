import { routesComponents } from "./components/exportRoutesComponents";

const { Main, Navbar, Footer } = routesComponents;

export const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};
