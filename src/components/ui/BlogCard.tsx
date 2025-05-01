import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { BlogPost } from "@/data/blog"

type Props = {
  post: BlogPost;
  index: number;
}
const BlogCard = (props: Props) => {
  const {post, index} = props;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="aspect-video relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <time className="text-sm text-gray-500">{formatDate(post.date)}</time>
        <h3 className="mt-2 text-xl font-bold">
          <Link href={post.url} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 text-gray-600">{post.excerpt}</p>
      </div>
    </motion.article>
  );
}

export default BlogCard;