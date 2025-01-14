import { AcademiaPosts } from 'app/components/AcademiaPosts'

export const metadata = {
  title: 'Research',
  description: 'Research projects in Academia',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Research</h1>
      <AcademiaPosts />
    </section>
  );
}