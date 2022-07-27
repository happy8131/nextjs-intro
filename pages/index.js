import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home"></Seo>

      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <a>{movie.original_title}</a>{" "}
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  //html 페이지에  데이터가 포함이 된다
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
/**
 * next.js는 자동적으로 우리가 pages 안에 about이라는 페이지를 만들면,
 * about에 갔을 때 그 component를 보여주는 거다.
 *framework는, 코드를 어떤 곳에 넣으면, framework가 그 코드를 부르는 형태이다.
 원할 때 부르고 원할 때 사용하는게 library다
 
 index.js는 / 경로 이다  
*/

//getServerSideProps 서버에서 실행 될거다
//data관련된 작업을 모두 한 다음에 api가 완료 되었을 때 page를 렌더할려고 한다.
//api 요청이 느리면 흰화면이 보이고 모든 처리가 완료되면, 그때 전체가 한방에 뜰거다

//Next.js는 페이지를 미리 html로 export 해준다.
