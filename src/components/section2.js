import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

function section2({ data }) {
  return (
    <section className="container mx-auto md:px-15 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data?.map((value, index) => (
          <Post data={value} key={index} />
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;

  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            className="rounded"
            src={img || "/"}
            width={500}
            height={350}
            alt="image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link
            href={`/posts/${id}`}
            className="text-orange-600 hover:text-orange-800"
          >
            {category || "Unknown"}{" "}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            - {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life. One day however a small line of
          blind text by the name loriem ipsum decided to leave for the far world
          of Graammar.
        </p>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}

export default section2;
