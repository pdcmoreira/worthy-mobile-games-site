/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_ATLAS_APP: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
