import {lazy, LazyExoticComponent} from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { Lazyload1, Lazyload2, Lazyload3 } from "../01-lazyload/pages";

type JSXComponent =() => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage" */ '../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazyl-1",
  },

  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "no-lazy",
  },
];
