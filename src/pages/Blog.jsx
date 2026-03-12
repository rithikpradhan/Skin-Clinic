import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { urlFor } from "../lib/imageBuilder";
import Reveal from "../hooks/Reveal";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type=="blog"] | order(publishedAt desc){
        title,
        "slug": slug.current,
        excerpt,
        mainImage,
        publishedAt
      }
    `,
      )

      .then(setBlogs);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h1 className="text-4xl font-extrabold mb-4 text-slate-800">
            Skin Care Blog
          </h1>

          <p className="text-slate-500 mb-12">
            Expert insights, treatment guides, and skincare advice from our
            dermatologists.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <img
                  src={urlFor(blog.mainImage).width(600).url()}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <p className="text-xs text-slate-400 mb-2">
                    {new Date(blog.publishedAt).toDateString()}
                  </p>

                  <h3 className="font-bold text-lg mb-2 text-slate-800">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-slate-500 mb-4">{blog.excerpt}</p>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="text-cyan-600 font-semibold text-sm hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
