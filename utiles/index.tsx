import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";

export const routes = [
    {
        name: 'Dashboard',
        layout: '/dashboard',
        icon: <IoHomeOutline />
    },

    {
        name: 'Project',
        layout: '/projects',
        icon: <GrProjects />,
    },
    {
        name: 'Messages',
        layout: '/messages',
        icon: <AiOutlineMessage />,
    },
    {
        name: 'Services',
        layout: '/services',
        icon: <MdHomeRepairService />
    },
    {
        name: 'Customers',
        layout: '/customers',
        icon: <RiGroupLine />
    }
]