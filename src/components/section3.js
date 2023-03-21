import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";

function section3({ data }) {
  return (
    <section className="container mx-auto md:px-15 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* swiper */}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data?.map((value, index) => (
          <SwiperSlide key={index}>
            <Post data={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, description, author } = data;

  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} width={600} height={400} alt="image" />
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
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "No Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || "No description"}</p>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}

export default section3;
