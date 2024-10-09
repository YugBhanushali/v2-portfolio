import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import { RiCalendarLine, RiTimeLine, RiUser3Line } from "react-icons/ri";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

// Utility function to get all blog posts metadata
const getBlogPosts = () => {
  const dir = path.join(process.cwd(), "app", "content");
  const files = fs.readdirSync(dir);

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      ...data,
    };
  });
};

// Generates static parameters (replaces getStaticPaths)
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Fetch and render a single blog post dynamically (server-side)
const getBlogPost = (slug: string) => {
  const filePath = path.join(process.cwd(), "app", "content", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const allPosts = getBlogPosts();
  const suggestedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  return { frontMatter: data, content, suggestedPosts };
};

// Custom function to process markdown into HTML
const renderMarkdown = async (content: string) => {
  const result = await unified()
    .use(remarkParse) // Parse markdown to AST
    .use(remarkRehype) // Transform markdown AST to HTML AST
    .use(rehypePrettyCode, {
      theme: "dracula", // Syntax highlighting theme
    })
    .use(rehypeStringify) // Convert HTML AST to string
    .process(content);

  return result.toString(); // Returns the final HTML string
};

// BlogPage component for rendering individual blog posts
const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const { frontMatter, content, suggestedPosts } = getBlogPost(params.slug);

  // Convert markdown content to HTML
  const renderedContent = await renderMarkdown(content);

  return (
    <div className="w-full mx-auto p-4 sm:w-full md:w-[70%] lg:w-[50%]">
      <header className="my-4">
        <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
        <p className="text-gray-500 my-2 text-sm">{frontMatter.description}</p>
        <div className="flex space-x-4 my-4 text-xs text-gray-500">
          <div className="flex items-center">
            <RiCalendarLine className="mr-1" /> {frontMatter.publishedDate}
          </div>
          <div className="flex items-center">
            <RiTimeLine className="mr-1" /> {frontMatter.readTime}
          </div>
          {/* <div className="flex items-center">
            <RiUser3Line className="mr-1" /> {frontMatter.author}
          </div> */}
        </div>
      </header>

      <article
        className="prose dark:prose-dark mt-5"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      ></article>

      {/* Suggested Posts Section */}
      {/* {suggestedPosts.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold">Related Posts</h3>
          <ul className="list-disc ml-5 mt-3">
            {suggestedPosts.map((post) => (
              <li key={post.slug}>
                <a href={`/blogs/${post.slug}`} className="text-blue-500">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default BlogPage;
