import getPost from "../../lib/helper";
import Fetcher from "../../lib/Fetcher";
import Spinner from "@/components/_child/spinner";
import Error from "@/components/_child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
// import data from "../../../public/data.json";

// const router = useRouter();
// const { postId } = router.query;
// const { data, isLoading, isError } = Fetcher(`api/posts/${postId}`);

// if (isLoading) return <Spinner />;
// if (isError) return <Error />;

// <SWRConfig value={{ fallback }}>
// </SWRConfig>

// below export Page

// export async function getStaticProps({ params }) {
//   const posts = await getPost(params.postId);

//   return {
//     props: {
//       fallback: {
//         "api/posts": posts,
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getPost();

//   const paths = posts.map((value) => {
//     return {
//       params: {
//         postId: value.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
