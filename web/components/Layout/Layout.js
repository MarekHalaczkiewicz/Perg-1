import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className="m-12 m-auto w-11/12">{props.children}</main>
    </div>
  );
}

export default Layout;
