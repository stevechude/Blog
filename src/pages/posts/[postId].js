import Format from "@/layout/format";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";

function Page({ data }) {
  return (
    <>
      <Article data={data} />
    </>
  );
}

function Article({ data }) {
  const post = data[0];

  const { title, img, subtitle, author, description } = post;
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          {author ? <Author {...author} /> : <></>}
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            {title || "No Title"}
          </h1>

          <p className="text-gray-500 text-xl text-center">
            {subtitle || "No Title"}
          </p>

          <div className="py-10">
            <Image src={img || "/"} width={900} height={600} alt="image" />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description || "No description"}
          </div>
        </div>
        <Related data={data} />
      </section>
    </Format>
  );
}

export default Page;

export async function getStaticProps(context) {
  const id = context?.params.postId;
  const { Posts } = await import("/data/data.json");

  const data = Posts.filter((post) => post.id == id);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const { Posts } = await import("/data/data.json");
  // console.log(Posts);

  const paths = Posts.map((val) => {
    return {
      params: {
        postId: val.id.toString(),
      },
    };
  });
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
