import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  //you can import with this whatever font you want
  //add whatever property you want and than call it and use it in tsx
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
