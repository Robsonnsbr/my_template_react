import { Main } from "./commons/Main";
import { Navbar } from "./commons/layout/navbar/Navbar";
import { Footer } from "./commons/layout/footer/Footer";
import { Slider } from "./commons/layout/slider/Slider";

import { User } from "./commons/user/User";
import { Search } from "./commons/user/Search";
import { Error } from "./commons/user/Error";

import { Form } from "./commons/inputs/Form";
import { Button } from "./commons/inputs/Button";

export const routesComponents = { Main, Navbar, Footer, Slider, Form, Button };

export const routesComponentsUser = { User, Search, Error };
