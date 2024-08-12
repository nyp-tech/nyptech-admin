import AppContainer from "@/components/app-container";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NYP Technopreneurship Club",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={font.className}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <SignedIn>
            <AppContainer>{props.children}</AppContainer>
          </SignedIn>
          <SignedOut>
            <main className={"grid place-items-center"}>
              <SignIn routing={"hash"} />
            </main>
          </SignedOut>
        </ClerkProvider>
      </body>
    </html>
  );
}