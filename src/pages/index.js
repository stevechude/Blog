// import Image from "next/image";
import Format from "../layout/format";

// components
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";

export default function Home(props) {
  const { Trending, Posts, Popular } = props.data;

  return (
    <Format>
      <Section1 data={Trending} />
      <Section2 data={Posts} />
      <Section3 data={Popular} />
      <Section4 data={Popular} />
    </Format>
  );
}

export async function getServerSideProps() {
  const { Trending, Posts, Popular } = await import("/data/data.json");

  const data = { Trending, Posts, Popular };

  return {
    props: {
      data,
    },
  };
}
