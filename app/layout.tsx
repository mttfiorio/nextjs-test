import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "NextJS test",
  description: "Some SEO description",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
