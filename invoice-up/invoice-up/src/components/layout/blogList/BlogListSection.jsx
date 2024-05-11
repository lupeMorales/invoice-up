import { Heading } from "../../molecules/Heading";
import { BlogCard } from "../../molecules/blog/BlogCard";
//import { BlogCard } from "../../molecules/blog/BlogCard";
//import BlogListSectionStyled from "./BlogListSectionStyled";

export const BlogListSection = () => {
  return (
    // <Wrapper>
    <>
      <Heading
        title="Últimas noticias"
        subtitle="Mantente siempre informado con InvoiceUp. Accede a las noticias más importantes"
      ></Heading>
      <BlogCard></BlogCard>
    </>

    //  <ul>
    //  <BlogCard></BlogCard>
    //</ul>
    //</Wrapper>
  );
};
