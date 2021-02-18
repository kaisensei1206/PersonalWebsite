/// <reference types="react-scripts" />
declare module '*.scss';
declare module "*.jpg" {
    export default "" as string;
  }
  declare module "*.png" {
    export default "" as string;
  }
  declare module "react/jsx-runtime" {
    export default any;
  }