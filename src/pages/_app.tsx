import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../layouts/appLayout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isStudioPage = router.route.startsWith("/studio");
  return (
    <div>
      {isStudioPage ? (
        <Component {...pageProps} />
      ) : (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      )}
    </div>
  );
}
