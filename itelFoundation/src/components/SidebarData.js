import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

import { MdGroups } from "react-icons/md";
import { MdSummarize } from "react-icons/md";

//--------------tech Initiatives iocns
import { SiTransportforlondon } from "react-icons/si";
import { LuThermometerSnowflake } from "react-icons/lu";
import { TbZoomMoney } from "react-icons/tb";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { GiEnergyBreath } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";

//--------------commitee members icon
import { FaPeopleGroup } from "react-icons/fa6";

import { AiOutlineApartment } from "react-icons/ai";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    // icon: <AiIcons.AiFillHome size="20px" />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "About Us",
    path: "/AboutUs",
    //icon: <MdSummarize size="20px" />,
  },

  {
    title: "Incubatees",
    path: "/incubatees",
    //icon: <FaChalkboardTeacher size="20px" />,
  },

  {
    title: "Tech Leadership Initiatives",

    //path: "/reports",
    //icon: <MdPeopleAlt size="20px" />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Transportation",
        path: "/Initiatives/Transportation",
        //icon: <SiTransportforlondon size="20px" />,
        cName: "sub-nav",
      },
      {
        title: "Urban Waterlogging Mitigation Forum",
        path: "/Initiatives/UrbanWaterloggingMitigationForum",
        //icon: <FaHouseFloodWaterCircleArrowRight size="20px" />,
      },
      {
        title: "Heating & Cooling",
        path: "/Initiatives/Heating&Cooling",
        // icon: <LuThermometerSnowflake size="20px" />,
        cName: "sub-nav",
      },
      {
        title: "Assistive Technology",
        path: "/Initiatives/AssistiveTechnology",
        //icon: <GrTechnology size="20px" />,
      },
      {
        title: "Cyber Security",
        path: "/Initiatives/CyberSecurity",
        //icon: <MdOutlineSecurity size="20px" />,
      },
      {
        title: "Fintech for Inclusion",
        path: "/Initiatives/FintechforInclusion",
        //icon: <TbZoomMoney size="20px" />,
      },

      {
        title: "Clean Energy",
        path: "/Initiatives/CleanEnergy",
        //icon: <GiEnergyBreath size="20px" />,
      },

      {
        title: "RISC V",
        path: "/Initiatives/RISCV",
        //icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: " Committee Members",
    //path: "/messages",
    //icon: <MdGroups size="25px" />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: " Advisory Board Committee",
        path: "/AdvisoryCommitteeMembers",
        //icon: <FaPeopleGroup size="20px" />,
      },
      {
        title: "Technical Advisory Committee",
        path: "/TechnicalAdvisoryCommittee",
        //icon: <FaPeopleGroup size="20px" />,
      },
      {
        title: "ITEL Incubation Committee",
        path: "/ITELIncubationCommittee",
        //icon: <FaPeopleGroup size="20px" />,
      },
    ],
  },
  {
    title: "Partnerships",
    path: "/Partnerships",
    //icon: <AiOutlineApartment size="20px" />,
  },
  // {
  //   title: "careers",
  //   path: "/careers",
  //   //icon: <AiOutlineApartment size="20px" />,
  // },
];
