import { getBooks } from "@/lib/notion";
import BooksPageClient from "./client";

export const revalidate = 60;
export const metadata = { title: "Books — Brian Nyambego" };

export default async function BooksPage() {
  const books = await getBooks();
  return <BooksPageClient books={books} />;
}
