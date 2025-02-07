import { ProjectPosts } from 'app/components/ProjectPosts'

export const metadata = {
  title: 'Projects',
  description: 'Explore my projects.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <ProjectPosts />
    </section>
  );
}
