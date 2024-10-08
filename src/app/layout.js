import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Footer from "./components/footer";
import "./media.css";

const manname = localFont({
  src: "./fonts/Maname-Regular.ttf",
  variable: "--font-maname-reg",
  weight: "400",
});

const marcellus = localFont({
  src: "./fonts/Marcellus-Regular.ttf",
  variable: "--font-marcellus-reg",
  weight: "400",
});

export const metadata = {
  title: "Quick Think",
  description: "a fun family friendly free quiz built with Next.js",
  openGraph: {title: "Quick Think",
  description: "a fun family friendly free quiz",
  type: "website",url: "https://quickthinkquizz.vercel.app/",
  image: "https://quickthinkquizz.vercel.app/public/thinks.png",
             },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${marcellus.variable} ${manname.variable} antialiased flex flex-col items-center w-screen h-screen`}
        >
          <header>
            <h1>Quick Think</h1>
          </header>
          <nav>
            <Link className="home" title="Home" tabIndex={0} href="/">
              Home
            </Link>
            <Link className="about" title="About" tabIndex={0} href="/About">
              About
            </Link>
            <SignedIn>
              <Link
                className="profile"
                title="Profile"
                tabIndex={0}
                href="/UserProfile"
              >
                User Profile
              </Link>
              <Link className="play" title="Play" tabIndex={0} href="/Play">
                Play
              </Link>
            </SignedIn>
          </nav>
          <br />
          {children}
          <footer className="footer">
            <Footer />
            <SignedOut>
              <SignInButton
                title="Sign In"
                className={`${marcellus.variable} signIn`}
              />
            </SignedOut>
            <UserButton className="signIn" />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
