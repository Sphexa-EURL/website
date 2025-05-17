import { MenuIcon, type Icon as LucideIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { RiInformation2Fill, RiStackFill } from "react-icons/ri";
import { BiWorld, BiDesktop } from "react-icons/bi";
import {FiSmartphone} from "react-icons/fi";
export type Icon = typeof LucideIcon


export const Icons = {
    // Default
    Menu: MenuIcon,

    // Services
    WebDevelopment: BiWorld,
    MobileDevelopment: FiSmartphone,
    AppDevelopment: BiDesktop,
    

    // 404 page
    About: RiInformation2Fill,
    Services: RiStackFill,

    // Socials
    Github: FaGithub,
}