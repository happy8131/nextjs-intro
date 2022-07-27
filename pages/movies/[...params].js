import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  const [title, id] = router.query.params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ query: { params } }) {
  return {
    props: { params },
  };
}
//id url을 받을 주소 [] <-대괄호 안에 마음대로 넣을 수 있다. Dynamic Route 이다
//catch-all url은 무한대로 캐치가 가능하다 a/b/c/d/ 이런식으로 주소를 받을려면 [...params] 로 해준다
//로딩 단계를 만들고 싶지않으면 getServerSideProps 를 사용하면 된다., props로 {params} 넣어주면 된다
