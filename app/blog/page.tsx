import { Suspense } from "react";
import BlogPageContent from "./BlogPageContent";

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-500">Loading blog...</p>
        </div>
      }
    >
      <BlogPageContent />
    </Suspense>
  );
}
