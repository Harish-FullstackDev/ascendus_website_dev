// CSS module type declarations for Next.js production build
// Required when TypeScript cannot resolve CSS side-effect imports via next-env.d.ts

declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

// Global CSS side-effect imports (e.g. import './globals.css') produce no exports
declare module '*/globals.css';
declare module '*/font.css';
declare module '*/globals.scss';
