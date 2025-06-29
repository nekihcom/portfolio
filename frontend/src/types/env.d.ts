declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_FORM_URL: string;
      NEXT_PUBLIC_MICROCMS_API_KEY: string;
      NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN: string;
      NEXT_PUBLIC_MICROCMS_BLOG_ENDPOINT: string;
      NEXT_PUBLIC_MICROCMS_WORK_ENDPOINT: string;
    }
  }
}

export {}; 