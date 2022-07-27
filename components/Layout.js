import NavBar from "./NavBar";

export default function Layout({ children }) {
  console.log(children);
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
//children은 _app.js에 <Component .../>를 말한다 그리고 밑에 <footer/>를 넣는 다고 해도 Layout의 children에 보여지게 된다.
