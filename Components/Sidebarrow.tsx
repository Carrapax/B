import { title } from "process";
import { ComponentType, SVGProps } from "react";

type Props = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>; title: string 
};

function SidebarRow({ Icon, title}: Props) {
  return (
    <div className="flex items-center space-x-2 py-3 px-4 cursor-pointer rounded-full
    hover:bg-yellow-500 transition-all duration-200 max-w-fit group">
      <Icon className="h-6 w-6" />
      <p className='hidden md:inline-flex font-light lg:text-xl group-hover:text-yellow-200'>{title}</p>
    </div>
  );
}

export default SidebarRow;