import Navbar from "@/components/nav";
import { Fragment, ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
}
