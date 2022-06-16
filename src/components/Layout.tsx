import ActiveLink from "./ActiveLink";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title = "Gyre" }: Props) => {
  console.log({ title });
  return (
    <>
      <div className="sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <nav>
              <ul className="flex flex-row h-full font-sans  text-coolGray-800 ">
                <li className="my-auto p-2  text-coolGray-800 ">
                  <ActiveLink
                    activeClassName="px-2 mx-2 text-3xl text-coolGray-800 font-hero"
                    href="/"
                  >
                    <a className="px-2 mx-2 text-3xl text-coolGray-800 font-hero">Gyre</a>
                  </ActiveLink>
                </li>
                <li className="my-auto p-2 text-coolGray-800 ">
                  <ActiveLink activeClassName="text-brand-200" href="/sasha">
                    <a className="mx-2 text-2xl font-bold  text-coolGray-800 ">Sasha</a>
                  </ActiveLink>
                </li>
                <li className="my-auto p-2">
                  <ActiveLink activeClassName="text-brand-200" href="/projects">
                    <a className="mx-2 text-2xl font-bold  text-coolGray-800 ">Projects</a>
                  </ActiveLink>
                </li>
                <li className="my-auto p-2">
                  <ActiveLink activeClassName="text-brand-200" href="/blog">
                    <a className="mx-2 text-2xl font-bold">Blog</a>
                  </ActiveLink>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>

      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
