import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-5">
      <h2 className="flex text-title-md2 font-semibold text-black">
        {pageName}
      </h2>
    </div>
  );
};

export default Breadcrumb;
