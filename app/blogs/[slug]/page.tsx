import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import { RiCalendarLine, RiTimeLine, RiUser3Line } from "react-icons/ri";
import Link from "next/link";
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

// This is the replacement for getStaticPaths (App Router version)
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Fetch and render the blog content dynamically (server-side)
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

// Custom function to process markdown
const renderMarkdown = async (content: string) => {
  const result = await unified()
    .use(remarkParse) // Parses the markdown
    .use(remarkRehype) // Converts remark (markdown) to rehype (HTML)
    .use(rehypePrettyCode, {
      // Pretty code options for syntax highlighting
      theme: "dracula", // You can change the theme
    })
    .use(rehypeStringify) // Converts rehype tree (HTML) back to string
    .process(content); // Processes the markdown content

  return result.toString(); // Returns the rendered HTML string
};

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const { frontMatter, content, suggestedPosts } = getBlogPost(params.slug);

  // Process the markdown content to HTML
  const renderedContent = await renderMarkdown(content);

  return (
    <div className="max-w-[50%] mx-auto p-4">
      <header className="my-4">
        <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
        <p className="text-gray-500 my-2 text-sm">{frontMatter.description}</p>
        <div className="flex space-x-4 my-4  text-xs text-gray-500">
          <div className="flex items-center">
            <RiCalendarLine className="mr-1" /> {frontMatter.publishedDate}
          </div>
          <div className="flex items-center">
            <RiTimeLine className="mr-1" /> {frontMatter.readTime}
          </div>
          <div className="flex items-center">
            <RiUser3Line className="mr-1" /> {frontMatter.author}
          </div>
        </div>
      </header>

      <article
        className="prose dark:prose-dark mt-5"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      ></article>

      <footer className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Suggested Blogs</h2>
        <ul>
          {suggestedPosts.map((post) => (
            <li key={post.title} className="mb-2">
              <Link href={`/blogs/${post.slug}`}>
                <p className="text-blue-600 hover:underline">{post.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default BlogPage;
