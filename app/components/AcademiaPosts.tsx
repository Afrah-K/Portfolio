import Link from 'next/link';
import { formatDate, getAcademiaPosts } from 'app/academia/utils'; // Make sure to implement getAcademiaPosts in your utils

export function AcademiaPosts() {
  const allAcademia = getAcademiaPosts();

  return (
    <div>
      {allAcademia
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((academia) => (
          <Link
            key={academia.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/academia/${academia.slug}`} // Adjust the link to point to the academia post
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(academia.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {academia.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
