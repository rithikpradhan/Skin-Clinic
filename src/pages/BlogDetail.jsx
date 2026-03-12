import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../lib/sanityClient";
import { urlFor } from "../lib/imageBuilder";
import { PortableText } from "@portabletext/react";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="blog" && slug.current==$slug][0]{
        title,
        mainImage,
        publishedAt,
        author,
        content
      }`,
        { slug },
      )
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, [slug]);

  if (!blog) return <p className="p-20">Loading...</p>;

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-8xl   mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold mb-4 text-slate-800">
          {blog.title}
        </h1>

        <p className="text-sm text-slate-400 mb-6">
          {new Date(blog.publishedAt).toDateString()}
        </p>

        <p className=" text-sm text-slate-400 mb-6">{blog.author}</p>

        <img
          src={urlFor(blog.mainImage).width(800).height(500).url()}
          alt={blog.title}
          className="rounded-sm mb-10 bg-green-50"
        />

        {/* Blog Content */}
        <div className="prose max-w-none">
          <PortableText value={blog.content} />
        </div>
      </div>
    </section>
  );
}
