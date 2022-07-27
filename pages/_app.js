import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log(Component, pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
//getServerSideProps 함수를 실행시켜 ...pageProps에 넣어준다 그러면 Component 자식에에 props(results) 가 들어오게 된다

//next.js의 가장 좋은 기능 중 하나는 엡에 있는 페이지들이 미리 렌더링 된다는 거다.(정적으로 생성 된다.)
//CSR 브라우저가 html을 가져올 떄 비어있는 <div id="root">로 가져온다는 걸 의미한다. 그 후에 브러우저가 모든 js를 요청해서
//브라우저가 js와 react.js를 실행시키고 그 후에서야 앱이 유저에게 보이게 될거다 ui가 만들어 지는 것이다

//SSR 은 페이지 HTML 미리생성 해준다 웹의 초기 상태를 활용해서 미리 렌더링 되어서 온다 이게 pre-rendering이다
//react.js를 프론트 엔드 안에서 실행하는 이런 걸 hydration(하이드레이션)이라고 부른다.

//next.js는 react.js를 백엔드에서 동작시켜서 페이지를 미리 만들고 렌더링끝나고 html이 되고 html을 페이지의 소스코드에 넣어준다.
//그럼유저는 js와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있게 된다.

// _app.js는 Next.js가 모든 페이지를 렌더링할 수 있게 하는 기본 프레임워크에 포함되어있다
//next.js는  about,index.js 렌더링이 되기 전에 _app를 보기 때문이다 (무조건 파일명은 _app.js 여야 한다)
//_app.js를 확인 할거고 그 다음 about나 index.js의 내용물을 렌더링 할 거다

//Next는 _app.js에 App 함수와 두 개의prop과 함께 부른다 그리고 about 패아지를 렌더링하길 원한다면
//about.js 파일로 가서 next.js는 컴포넌트를 가져다가 _app의 prop인 Component로 넣어줄거다
//그리고 app함수는 페이지를 렌더링한다

//Layout 컴포넌트는 children이라는 자식 prop이 있는데  <Component {...pageProps} /> 를 얘기 한다
