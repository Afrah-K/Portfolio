import Link from 'next/link';
import { formatDate, getProjectPosts } from 'app/projects/utils'; // Make sure to implement getProjectPosts in your utils

export function ProjectPosts() {
  const allProjects = getProjectPosts();

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${project.slug}`} // Adjust the link to point to the project post
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {project.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
