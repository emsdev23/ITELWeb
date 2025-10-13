import React, { useState } from "react";
import styles from "../Partnership/Partnership.module.css";

import KrisGopalakrishnan from "./Advisor/Kris Gopalakrishnan.jpg";
import AjaiChowdhry from "./Advisor/Ajai Chowdhry.jpg";
import ArunJain from "./Advisor/Arun Jain.jpg";
import AshishDhawan from "./Advisor/Ashish Dhawan.jpg";
import AnandDeshpande from "./Advisor/Anand Deshpande.jpg";
import SanjeevBikhchandani from "./Advisor/Sanjeev Bikhchandani'.jpg";
import RajanAnandan from "./Advisor/Rajan Anandan.png";
import ShridharShukla from "./Advisor/Shridhar Shukla.jpg";
import MukeshBansal from "./Advisor/Mukesh Bansal.jpg";
import AbhishekSinghania from "./Advisor/Abhishek Singh.jpg";
import CPGurnani from "./Advisor/CP Gurnani.jpg";
import SriniRaju from "./Advisor/Srini Raju.jpg";
import PSNarayan from "./Advisor/ps-narayanan.png";
import ManishDhingra from "./Advisor/Manish Dhingra.jpg";
import GauravBhatnagar from "../../Images/company6.png";
import noimage from "../../Images/company6.png";
import AmitChaddha from "./Advisor/Amit Chadha.png";
import ProfAshokJhunjhunwala from "./Advisor/Prof.Ashok.jpg";
import VenkataramanRajaraman from "../../Images/company6.png";
import SaurabhSrivastava from "./Advisor/Saurabh Srivastava.jpg";
import DebjaniGhosh from "./Advisor/Debjani Ghosh.jpg";
import RamanRoy from "./Advisor/Raman Roy.jpg";
import RaviVenkatesan from "./Advisor/Ravi Venkatesan.jpg";
import ChiragGupta from "./Advisor/Chirag Gupta.jpg";
import ManuIyer from "./Advisor/Manu Iyer.jpg";
import SharadSharma from "./Advisor/Sharad Sharma.png";
import SunilBhumralkar from "../../Images/company6.png";
import BSTeeka from "./Advisor/BS Teeka.jpg";
import KumarVembu from "./Advisor/Kumar Vembu.jpg";
import ReemaSaha from "../../Images/company6.png";

import ProfKaushalKumarJha from "./Advisor/Prof.-Kaushal-Kumar-Jha.png";
import ProfLKannan from "./Advisor/Prof. Kannan.jpg";
import DrKarthikSankaranarayanan from "./Advisor/Dr. Karthik.jpg";
import ProfGauravRaina from "./Advisor/Gaurav Raina.jpg";
import Thirumurthy from "./Advisor/Thirumurthy R.jpg";
import AnimeshMukherjee from "./Advisor/Prof. Animesh Mukherjee.jpg";
import DrRajeshSanghi from "./Advisor/Rajesh Sanghi.jpg";
import MilindKulkarni from "../../Images/company6.png";
import DrJuzerVasi from "./Advisor/Juzer Vasi.jpg";
import DrKumarNSivarajan from "../../Images/company6.png";
import DevendraJallihal from "./Advisor/Prof. Devendra Jallihal.png";
import PJNarayanan from "./Advisor/Prof. PJ Narayanan.jpg";
import MohanasankarSivaprakasam from "./Advisor/Prof. Mohanasankar Sivaprakasam.png";
import AnilPrabhakar from "./Advisor/Prof. Anil Prabhakar.png";
import SumanSinhaRay from "../../Images/company6.png";
import RajatMoona from "./Advisor/Rajat Moona.jpg";
import AnjanKRay from "./Advisor/Anjan Ray.jpg";
import AshishLele from "./Advisor/Ashish Lele.jpg";
import SatyanarayananSeshadri from "./Advisor/Satyanarayanan Shesadhri.jpg";
import RajnishKumar from "../../Images/company6.png";
import GVenkatesh from "./Advisor/Prof. G. Venkatesh.png";
import AravindKumarChandiran from "./Advisor/Aravind Kumar Chandiran.jpg";
import UdayKhankhoje from "./Advisor/Uday Khankhoje.jpg";
import RajeshJain from "./Advisor/Rajesh Jain.jpg";
import PawanGoenka from "./Advisor/Pawan Goenka.png";
function CommiteeMembers() {
  const [selectedCategory, setSelectedCategory] = useState("Advisory Board");

  const AdvisoryBoard = [
    {
      name: "Prof Ashok Jhunjhunwala",
      description: "Chairman, ITEL",
      image: ProfAshokJhunjhunwala,
      website: "https://www.linkedin.com/in/ashok-jhunjhunwala-4b273b181/",
    },
    {
      name: "Reema Saha",
      description: "CEO, ITEL",
      image: ReemaSaha,
      website:
        "Reema Saha - CEO, Immersive Technology and Entrepreneurship Labs Foundation (ITEL) | LinkedIn",
    },
    {
      name: "Kris Gopalakrishnan",
      description: "Co-Founder,Infosys and Chairman, Axilor Ventures",
      image: KrisGopalakrishnan,
      website:
        "https://www.linkedin.com/in/kris-gopalakrishnan-10b49950/?originalSubdomain=in",
    },
    {
      name: "Ajai Chowdhry",
      description: "Cofounder HCL & Founder EPIC Foundation",
      image: AjaiChowdhry,
      website: "https://www.linkedin.com/in/ajaichowdhry/?originalSubdomain=in",
    },
    {
      name: "Arun Jain",
      description: "Chairman and MD, Intellect Design Arena",
      image: ArunJain,
      website:
        "https://www.linkedin.com/in/arun-jain-0b01988/?originalSubdomain=in",
    },
    {
      name: "Ashish Dhawan",
      description: "Founder and CEO, The Convergence Foundation",
      image: AshishDhawan,
      website:
        "https://www.linkedin.com/in/ashish-dhawan-241112/?originalSubdomain=in",
    },
    {
      name: "Anand Deshpande",
      description: "Founder and Chairman, Persistent systems",
      image: AnandDeshpande,
      website:
        "https://www.linkedin.com/in/ananddeshpande/?originalSubdomain=in",
    },
    {
      name: "Sanjeev Bikhchandani",
      description: "Co-Founder, Info Edge",
      image: SanjeevBikhchandani,
      website:
        "https://www.linkedin.com/in/sanjeev-bikhchandani-501261/?originalSubdomain=in",
    },
    {
      name: "Rajan Anandan",
      description: "Managing Director, Surge ",
      image: RajanAnandan,
      website:
        "https://www.linkedin.com/in/rajan-anandan-2481b814/?originalSubdomain=in",
    },
    {
      name: "Shridhar Shukla",
      description: "Co-Founder, Chairman, KPOINT",
      image: ShridharShukla,
      website:
        "https://www.linkedin.com/in/shridharshukla/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
    },
    {
      name: "Mukesh Bansal",
      description: "Managing Director, Myntra",
      image: MukeshBansal,
      website:
        "https://www.linkedin.com/in/mukesh-bansal-85a45724a/?originalSubdomain=in",
    },
    {
      name: "Abhishek Singhania",
      description: "Chairman & Managing Director, JayKay Enterprises",
      image: AbhishekSinghania,
      website:
        "https://www.linkedin.com/in/abhishek-singhania-0326584/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
    },
    {
      name: "C. P. Gurnani",
      description: "Co-Founder, AIonOS",
      image: CPGurnani,
      website: "https://www.linkedin.com/in/cpgurnani/?originalSubdomain=in ",
    },
    {
      name: "Srini Raju",
      description: "Founder, Chairman of iLabs Capital",
      image: SriniRaju,
      website:
        "https://www.linkedin.com/in/srinivasacraju-156887135/?originalSubdomain=in",
    },
    {
      name: "P. S. Narayan",
      description: "Global Head for Sustainability, Wipro",
      image: PSNarayan,
      website:
        "https://www.linkedin.com/in/psnarayan5565/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
    },
    {
      name: "Manish Dhingra",
      description: "Director and CEO, Mediology Software",
      image: ManishDhingra,
      website:
        "https://www.linkedin.com/in/dhingramanish/?originalSubdomain=in",
    },
    {
      name: "Gaurav Bhatnagar",
      description: "Executive Committee Member, World Travel & Tourism Council",
      image: GauravBhatnagar,
      website: "https://www.linkedin.com/in/gauravbhatnagar/",
    },
    {
      name: "Amit Chaddha",
      description: "CEO & Managing Director, L&T Technology Services",
      image: AmitChaddha,
      website: "https://www.linkedin.com/in/amit-chadha-1b6aa8/",
    },

    {
      name: "Venkataraman Rajaraman",
      description: "Founder and CEO, Cygni Energy Private Limited",
      image: VenkataramanRajaraman,
      website:
        "https://www.linkedin.com/in/venkatrajaraman/?originalSubdomain=in",
    },
    {
      name: "Saurabh Srivastava",
      description: "Chairman at Indian Angel Network",
      image: SaurabhSrivastava,
      website:
        "https://www.linkedin.com/in/saurabhsrivastava101/?originalSubdomain=in",
    },
    {
      name: "Debjani Ghosh",
      description: "Distinguished Fellow, NITI Aayog",
      image: DebjaniGhosh,
      website:
        "https://www.linkedin.com/in/debjani-ghosh-48298b1/?originalSubdomain=in",
    },
    {
      name: "Raman Roy",
      description: "Chairman and Managing Director at Quatrro BPO Solutions",
      image: RamanRoy,
      website:
        "https://www.linkedin.com/in/raman-roy-66266917/?originalSubdomain=in",
    },
    {
      name: "Ravi Venkatesan",
      description: "Founder, Global Alliance for Mass Entrepreneurship",
      image: RaviVenkatesan,
      website:
        "https://www.linkedin.com/in/ravi-venkatesan-ba15b820/?originalSubdomain=in",
    },
    {
      name: "Chirag Gupta",
      description: "Managing Partner, 8x ventures",
      image: ChiragGupta,
      website: "https://www.linkedin.com/in/chirag-gupta/?originalSubdomain=in",
    },
    {
      name: "Manu Iyer",
      description: "Co-Founder &  General Partner, Bluehill.VC",
      image: ManuIyer,
      website: "https://www.linkedin.com/in/manuiyer/?originalSubdomain=in",
    },
    {
      name: "Sharad Sharma",
      description: "Co-Founder, iSPIRT Foundation",
      image: SharadSharma,
      website: "https://www.linkedin.com/in/sharadsharma/?originalSubdomain=in",
    },
    {
      name: "Sunil Bhumralkar",
      description: "Senior Audit Partner at S R Batliboi & Associates LLP",
      image: SunilBhumralkar,
      website: "https://www.tanla.com/leadership/sunil-bhumralkar",
    },
    {
      name: "BS Teeka",
      description:
        "Managing Director and Founder of Exceutive Ship Management ",
      image: BSTeeka,
      website: "https://www.executiveship.com/aboutus_leadership2.html",
    },
    {
      name: "Kumar Vembu",
      description: "Founder & CEO, GoFrugal Technologies",
      image: KumarVembu,
      website:
        "https://www.linkedin.com/in/kumar-vembu-a0a45710/?originalSubdomain=in",
    },
    {
      name: "Srinivasa Rao",
      description: "",
      image: "",
      website: "",
    },
  ];

  const TechnicalAdvisoryCommittee = [
    {
      name: "Prof Ashok Jhunjhunwala",
      description: "Chairman, ITEL",
      image: ProfAshokJhunjhunwala,
      website: "https://www.linkedin.com/in/ashok-jhunjhunwala-4b273b181/",
    },
    {
      name: "Prof. Kaushal Kumar Jha",
      description: "CEO, CEET",
      image: ProfKaushalKumarJha,
      website:
        "https://www.linkedin.com/in/dr-kaushal-jha/?originalSubdomain=in",
    },
    {
      name: "Prof L. Kannan",
      description:
        "Founder Director, Motorz Design and Manufacturing Private Limited",
      image: ProfLKannan,
      website: "https://www.linkedin.com/in/kannanlakshminarayan/",
    },
    {
      name: "Dr. Karthik Sankaranarayanan",
      description: "Project consultant, IIT Madras",
      image: DrKarthikSankaranarayanan,
      website: "https://www.linkedin.com/in/ks4kk/?originalSubdomain=in",
    },
    {
      name: "Prof. Gaurav Raina",
      description: "Professor, Electrical Engineering, IIT Madras",
      image: ProfGauravRaina,
      website:
        "https://www.linkedin.com/in/gaurav-raina-9a0b883/?originalSubdomain=in",
    },
    {
      name: "R. Thirumurthy",
      description: "Head of System Architecture, Nokia ",
      image: Thirumurthy,
      website: "https://www.linkedin.com/in/thirumurthy-r-8204a64/",
    },
    {
      name: "Animesh Mukherjee",
      description: "Professor, Computer Science, IIT Kharagpur",
      image: AnimeshMukherjee,
      website: "https://www.linkedin.com/in/animesh-mukherjee-1a40b76/",
    },
    {
      name: "Dr. Rajesh Sanghi",
      description: "Founder & CEO at Aipsychi",
      image: DrRajeshSanghi,
      website:
        "https://www.linkedin.com/in/rajesh-sanghi-3888045/?originalSubdomain=in",
    },
    {
      name: "Dr. Milind Kulkarni ",
      description:
        "Chairman and CEO, Renaissance Solar and Electronic Materials (rsolec.com)",
      image: MilindKulkarni,
      website:
        "https://www.linkedin.com/in/milindskulkarni/?originalSubdomain=in",
    },
    {
      name: "Dr. Juzer Vasi",
      description:
        "Professor Emeritus at Indian Institute of Technology Bombay",
      image: DrJuzerVasi,
      website:
        "https://www.linkedin.com/in/juzer-vasi-87a7574b/?originalSubdomain=in",
    },
    {
      name: "Dr. Kumar N Sivarajan",
      description: "CTO at Tejas Networks",
      image: DrKumarNSivarajan,
      website:
        "https://www.linkedin.com/in/kumar-sivarajan-99a1a4/?originalSubdomain=in",
    },
    {
      name: "Prof. Devendra Jallihal",
      description: "Director, IIT Guwahati",
      image: DevendraJallihal,
      website: "https://www.linkedin.com/in/devendra-jalihal-7334571a9/",
    },
    {
      name: "Prof. P J Narayanan",
      description: "Professor and Director at IIIT Hyderabad",
      image: PJNarayanan,
      website: "https://www.linkedin.com/in/pjnarayanan/",
    },
    {
      name: "Prof. Mohanasankar Sivaprakasam",
      description: "Professor at IIT Madras",
      image: MohanasankarSivaprakasam,
      website:
        "https://www.linkedin.com/in/dr-mohanasankar-sivaprakasam-1b2b072a4/?originalSubdomain=in",
    },
    {
      name: "Prof. Anil Prabhakar",
      description: "Professor at IIT Madras",
      image: AnilPrabhakar,
      website:
        "https://www.linkedin.com/in/anil-prabhakar-66b3b730/?originalSubdomain=in",
    },
    {
      name: "Dr. Suman Sinha Ray",
      description: "Mentor, SuperCharger Ventures",
      image: SumanSinhaRay,
      website: "https://www.linkedin.com/in/sumansinharay/",
    },
    {
      name: "Prof. Rajat Moona",
      description: "Director IIT Gandhinagar",
      image: RajatMoona,
      website: "https://www.linkedin.com/in/rajatmoona/?originalSubdomain=in",
    },
    {
      name: "Dr. Anjan K Ray",
      description: "Adjunct Faculty, IIT Delhi",
      image: AnjanKRay,
      website:
        "https://www.linkedin.com/in/anjan-ray-5251a5/?originalSubdomain=in",
    },
    {
      name: "Dr. Ashish Lele",
      description: "Director CSIR - NCL",
      image: AshishLele,
      website: "https://www.linkedin.com/in/ashish-lele-6828a26/",
    },
    {
      name: "Prof Satyanarayanan Seshadri",
      description: "Head, Energy Centre and Energy Consortium, IIT Madras",
      image: SatyanarayananSeshadri,
      website:
        "https://www.linkedin.com/in/satyaseshadri/?originalSubdomain=in",
    },
    {
      name: "Prof. Rajnish Kumar",
      description: "Professor, IIT Madras",
      image: RajnishKumar,
      website:
        "https://www.linkedin.com/in/rajnish-kumar-5632341b4/?originalSubdomain=in",
    },
    {
      name: "Prof. G Venkatesh",
      description: "Professor, IIT Madras",
      image: GVenkatesh,
      website:
        "https://www.linkedin.com/in/venkatesh-g-a02a58/?originalSubdomain=in",
    },
    {
      name: "Prof. Aravind Kumar Chandiran",
      description: "Associate Professor, IIT Madras",
      image: AravindKumarChandiran,
      website:
        "https://www.linkedin.com/in/aravindckumar/?originalSubdomain=in",
    },
    {
      name: "Dr. Uday Khankhoje",
      description: "Associate Professor, IIT Madras",
      image: UdayKhankhoje,
      website:
        "https://www.linkedin.com/in/uday-khankhoje-26328a63/?originalSubdomain=in",
    },
    {
      name: "Rajesh Jain",
      description: "Founder, Netcore Cloud",
      image: RajeshJain,
      website:
        "https://www.linkedin.com/in/rajesh-jain-b941/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
    },
    {
      name: "Dr. Pawan Goenka",
      description: "Chairman, SCALE Committee",
      image: PawanGoenka,
      website:
        "https://www.linkedin.com/in/pawan-goenka-6640672b/?originalSubdomain=in",
    },
  ];

  const ITELIncubationCommittee = [
    {
      name: "Prof Ashok Jhunjhunwala",
      description: "Chairman, ITEL",
      image: ProfAshokJhunjhunwala,
      website: "https://www.linkedin.com/in/ashok-jhunjhunwala-4b273b181/",
    },
    {
      name: "Prof. Kaushal Kumar Jha",
      description: "CEO, CEET",
      image: ProfKaushalKumarJha,
      website:
        "https://www.linkedin.com/in/dr-kaushal-jha/?originalSubdomain=in",
    },
    {
      name: "Prof L. Kannan",
      description:
        "Founder Director, Motorz Design and Manufacturing Private Limited",
      image: ProfLKannan,
      website: "https://www.linkedin.com/in/kannanlakshminarayan/",
    },
    {
      name: "Dr. Karthik Sankaranarayanan",
      description: "Project consultant, IIT Madras",
      image: DrKarthikSankaranarayanan,
      website: "https://www.linkedin.com/in/ks4kk/?originalSubdomain=in",
    },
  ];
  const renderPartners = (partners) =>
    partners.map((partner) => (
      <div key={partner.name} className={styles.card}>
        {partner.image && (
          <div className={styles.imageWrapper}>
            <img
              src={partner.image}
              alt={partner.name}
              className={styles.partnerImage}
            />
          </div>
        )}
        <h3>{partner.name}</h3>
        <h4 className={styles.description}>{partner.description}</h4>
        {partner.website && (
          <a
            className={styles.link}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Profile →
          </a>
        )}
      </div>
    ));

  const getPartnersToShow = () => {
    switch (selectedCategory) {
      case "Advisory Board":
        return AdvisoryBoard;
      case "Technical Advisory Committee":
        return TechnicalAdvisoryCommittee;
      case "ITEL Incubation Committee":
        return ITELIncubationCommittee;
      //   case "Startup":
      //     return startupPartners;
      default:
        return [];
    }
  };
  return (
    <div>
      <div className="description">
        {/* Buttons for categories */}
        <div style={{ display: "flex", gap: "1rem", margin: "2rem 0" }}>
          <button
            onClick={() => setSelectedCategory("Advisory Board")}
            className={
              selectedCategory === "Advisory Board" ? styles.activeBtn : ""
            }
          >
            Advisory Board
          </button>
          <button
            onClick={() => setSelectedCategory("Technical Advisory Committee")}
            className={
              selectedCategory === "Technical Advisory Committee"
                ? styles.activeBtn
                : ""
            }
          >
            Technical Advisory Committee
          </button>

          <button
            onClick={() => setSelectedCategory("ITEL Incubation Committee")}
            className={
              selectedCategory === "ITEL Incubation Committee"
                ? styles.activeBtn
                : ""
            }
          >
            ITEL Incubation Committee
          </button>
          {/* <button
          onClick={() => setSelectedCategory("Startup")}
          className={selectedCategory === "Startup" ? styles.activeBtn : ""}
        >
          Start-up Partnerships (non – incubatees)
        </button> */}
        </div>
        <section className={`${styles.section} ${styles.sectionLight}`}>
          <div className={styles.grid}>
            {renderPartners(getPartnersToShow())}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CommiteeMembers;
