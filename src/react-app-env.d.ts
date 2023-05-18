// / <reference types="react-scripts" />
declare module '*.png'
declare module "*.svg" {
    const content: any;
    export default content;
}