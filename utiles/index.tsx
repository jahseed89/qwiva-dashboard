import Image from "next/image";


export const routes = [
    {
        name: 'Dashboard',
        layout: '/dashboard',
        icon: <Image src="/home.svg" width={20} height={20} alt="home" />,
    },

    {
        name: 'Project',
        layout: '/projects',
        icon: <Image src="/project.svg" alt="project" width={20} height={20} />,
    },
    {
        name: 'Messages',
        layout: '/messages',
        icon: <Image src="/msg.svg" alt="message" width={20} height={20} />,
    },
    {
        name: 'Services',
        layout: '/services',
        icon: <Image src="/services.svg" alt="project" width={20} height={20} />
    },
    {
        name: 'Customers',
        layout: '/customers',
        icon: <Image src="/customers.svg" alt="project" width={20} height={20} />
    }
]