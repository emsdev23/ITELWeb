import React, { useState } from "react";
import styles from "./Partnership.module.css";
import company6 from "../../Images/company6.png";

// academicPartners logos
import Gandhinagar from "../Partnership/PartnershipImages/IIT Gandhinagar.png";
import Guwahati from "../Partnership/PartnershipImages/IITG_logo.png";
import Hyderabad from "../Partnership/PartnershipImages/IITH2.png";
import Ceet from "../Partnership/PartnershipImages/Ceet.png";
import HTIC from "../Partnership/PartnershipImages/iitms_htic_medtech_incubator_logo.jpg";
import EnERGLab from "../Partnership/PartnershipImages/EnERG Lab.jpg";
import IIITHydrabad from "../Partnership/PartnershipImages/IIIT_Hyderabad_Logo.jpg";

//industryAndVC logos
import SIS from "../Partnership/PartnershipImages/southindiashelters_logo.jpg";
import Olympia from "../Partnership/PartnershipImages/OLYMPIA.jpg";
import SarthakEducationalTrust from "../Partnership/PartnershipImages/SarthakEducationalTrust.png";
import FundooMoney from "../Partnership/PartnershipImages/FundooMoney.png";
import Infion from "../Partnership/PartnershipImages/Infineon-Logo.svg.png";

//VentureCapital logos
import XVentures from "../Partnership/PartnershipImages/8XVentures.avif";
import IAN from "../Partnership/PartnershipImages/IAN-Logo.png";
import Bluehill from "../Partnership/PartnershipImages/blueHill_capital-logo.png";
import Kallarai from "../Partnership/PartnershipImages/kalaari_capital_logo.jpg";
import Bharath20250 from "../Partnership/PartnershipImages/Bharath20250.jpg";
import Artha99 from "../Partnership/PartnershipImages/Artha99.jpg";

//startupPartners logos
import IITDelhi from "../Partnership/PartnershipImages/IIT Delhi.jpg";
import Cminds from "../Partnership/PartnershipImages/cminds_iitb_logo.jpg";
import ihub from "../Partnership/PartnershipImages/c3i_hub_logo.jpg";
import PresidencyUniversity from "../Partnership/PartnershipImages/presidency-university.avif";
import startupTN from "../Partnership/PartnershipImages/startUPTN.jpg";
import AIC from "../Partnership/PartnershipImages/AIC.jpg";
import Anvesana from "../Partnership/PartnershipImages/Anvesana-Logo1.png";

function Partnership() {
  const [selectedCategory, setSelectedCategory] = useState("Academic");

  const academicPartners = [
    {
      name: "IIT Gandhinagar",
      description:
        "A premier institute known for its interdisciplinary research and green campus.",
      image: Gandhinagar,
      website: "https://iitgn.ac.in/",
    },
    {
      name: "IIT Guwahati",
      description:
        "Renowned for its research in engineering, science, and humanities.",
      image: Guwahati,
      website: "https://www.iitg.ac.in/",
    },
    {
      name: "IIT Hyderabad",
      description:
        "Recognized for its innovation and research in various engineering disciplines.",
      image: Hyderabad,
      website: "https://www.iith.ac.in/",
    },
    {
      name: "CEET, IIT Madras",
      description:
        "Center for Excellence in Energy and Telecommunication focusing on sustainable energy solutions.",
      image: Ceet,
      website: "https://ceet.res.in/",
    },
    {
      name: "HTIC, IIT Madras",
      description:
        "Healthcare Technology Innovation Centre developing affordable healthcare technologies.",
      image: HTIC,
      website: "https://www.hticiitm.org/",
    },
    {
      name: "EnERG Lab, IIT Madras",
      description:
        "Energy Research Group focusing on energy efficiency and renewable energy systems.",
      image: EnERGLab,
      website: "https://energlab.org/",
    },
    {
      name: "IIIT Hyderabad",
      description:
        "A leading institute in information technology and interdisciplinary research.",
      image: IIITHydrabad,
      website: "https://www.iiit.ac.in/",
    },
  ];

  const industryAndVC = [
    {
      name: "South India Shelters Pvt Ltd",
      description:
        "A reputed builder offering premium residential properties in Chennai.",
      image: SIS,
      website: "https://sis.in/",
    },
    {
      name: "Olympia Group",
      description:
        "A leading real estate developer with a focus on sustainable urban development.",
      image: Olympia,
      website: "https://www.olympiagroup.in/",
    },
    {
      name: "Sarthak Educational Trust",
      description:
        "An NGO dedicated to empowering individuals with disabilities through education.",
      image: SarthakEducationalTrust,
      website: "https://sarthakindia.org/",
    },
    {
      name: "Fundoo Money (Udayan Ray)",
      description:
        "A financial advisory firm specializing in investment strategies and wealth management.",
      image: FundooMoney,
      website: "https://fundoomoney.com/",
    },
    {
      name: "Infineon ",
      description:
        "A global semiconductor manufacturer providing innovative solutions.",
      image: Infion,
      website: "https://www.infineon.com/",
    },
  ];

  const VentureCapital = [
    {
      name: "8X Ventures",
      description:
        "A venture capital firm investing in early-stage technology startups.",
      image: XVentures,
      website: "https://8xventures.com/",
    },
    {
      name: "India Angel Network Services Private Limited (IAN)",
      description:
        "A network of angel investors supporting startups across India.",
      image: IAN,
      website: "https://www.indianangelnetwork.com/",
    },
    {
      name: "Bluehill Capital",
      description:
        "A private equity firm focusing on growth-stage investments.",
      image: Bluehill,
      website: "https://bluehillcapital.com/",
    },
    {
      name: "Kalaari Capital",
      description:
        "A venture capital firm investing in early-stage technology companies.",
      image: Kallarai,
      website: "https://www.kalaari.com/",
    },
    {
      name: "Bharat 2050",
      description:
        "An initiative aiming to transform India into a global innovation hub by 2050.",
      image: Bharath20250,
      website: "https://bharat2050.org/",
    },
    {
      name: "Artha99",
      description:
        "A platform connecting investors with startups for mutual growth.",
      image: Artha99,
      website: "https://artha99.com/",
    },
  ];
  const startupPartners = [
    {
      name: "IHFC-TIH, IIT Delhi",
      description:
        "Technology Incubation and Entrepreneurship Development Centre fostering startups.",
      image: IITDelhi,
      website: "https://www.iitd.ac.in/",
    },
    {
      name: "C-MInDS, IIT Bombay",
      description:
        "Centre for Machine Intelligence and Data Science promoting AI research.",
      image: Cminds,
      website: "https://www.cse.iitb.ac.in/",
    },
    {
      name: "IIT Kanpur Incubation Centre (C3i)",
      description:
        "Centre for Cellular and Molecular Biology supporting biotech startups.",
      image: ihub,
      website: "https://www.iitk.ac.in/",
    },
    {
      name: "Presidency University, Karnataka",
      description:
        "A private university offering interdisciplinary education and research.",
      image: PresidencyUniversity,
      website: "https://presidencyuniversity.in/",
    },
    {
      name: "StartUp TN",
      description:
        "Government initiative to promote and support startups in Tamil Nadu.",
      image: startupTN,
      website: "https://startup.tn.gov.in/",
    },
    {
      name: "Anna Univ. AIC",
      description:
        "Atal Incubation Centre at Anna University nurturing innovation and entrepreneurship.",
      image: AIC,
      website: "https://annaincubator.org/",
    },
    {
      name: "Anvesana, Malnad, Karnataka",
      description:
        "A startup incubator fostering innovation in the Malnad region.",
      image: Anvesana,
      website: "https://anvesana.org/",
    },
    {
      name: "HTIC, IIT Madras",
      description:
        "Healthcare Technology Innovation Centre developing affordable healthcare technologies.",
      image: HTIC,
      website: "https://www.hticiitm.org/",
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
            Visit Website →
          </a>
        )}
      </div>
    ));

  const getPartnersToShow = () => {
    switch (selectedCategory) {
      case "Academic":
        return academicPartners;
      case "Industrial":
        return industryAndVC;
      case "VentureCapital":
        return VentureCapital;
      case "Startup":
        return startupPartners;
      default:
        return [];
    }
  };

  return (
    <div className="description">
      {/* Hero Section */}
      <div className="herohead">
        Nurturing Deep-tech Innovation Through Strategic Partnerships!
      </div>
      <p>
        <b>Immersive Technology and Entrepreneurship Labs (ITEL) </b>
        is a non-profit company founded by industry leaders to position India as
        a global technology leader within the next decade by harnessing the
        innovative spirit, rich talent pool, and extensive R&D system available
        in the country.
      </p>
      <p>
        At ITEL, we are incubating a diverse set of deep-tech start-ups working
        in fields such as space, healthcare, semiconductors, clean energy,
        robotics, language technologies, etc.
      </p>
      <p>
        Our aim is to support talented individuals with breakthrough ideas and
        help them foster successful collaborations and find long-lasting
        solutions for complex, large-scale challenges
      </p>
      <p>
        We are bridging the existing gaps in the Indian innovation ecosystem by
        bringing together scientists, start-ups, and passionate young innovators
        to create bold, innovative, tech-led, frugal, and planet-friendly
        solutions to address impossible, large-scale challenges with a goal to
        transform lives.
      </p>
      <p>
        Through this robust approach, we plan to address multiple high-impact,
        large scale challenges and develop impactful solutions to reduce India’s
        external dependence and provide global technology leadership within the
        next ten years.
      </p>
      <br />
      {/* Goal Section */}
      <p className="Heading">Our goal:</p>
      <p
        style={{
          fontStyle: "italic",
          backgroundColor: "#ffffffff",
          borderLeft: "10px solid  #ffec99",
          borderBottom: "2px solid  #ffec99",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        ITEL aims to make India a technology leader by leveraging scientists,
        start-ups, and youngsters, to take on challenging problems facing the
        country and enable tech-led solutions
      </p>
      <br />
      {/* Buttons for categories */}
      <div style={{ display: "flex", gap: "1rem", margin: "2rem 0" }}>
        <button
          onClick={() => setSelectedCategory("Academic")}
          className={selectedCategory === "Academic" ? styles.activeBtn : ""}
        >
          Academic Partnerships
        </button>
        <button
          onClick={() => setSelectedCategory("Industrial")}
          className={selectedCategory === "Industrial" ? styles.activeBtn : ""}
        >
          Industrial Partnerships
        </button>

        <button
          onClick={() => setSelectedCategory("VentureCapital")}
          className={
            selectedCategory === "VentureCapital" ? styles.activeBtn : ""
          }
        >
          Venture-fund Partnership
        </button>
        <button
          onClick={() => setSelectedCategory("Startup")}
          className={selectedCategory === "Startup" ? styles.activeBtn : ""}
        >
          Start-up Partnerships (non – incubatees)
        </button>
      </div>

      {/* Render partners based on selected category */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.grid}>{renderPartners(getPartnersToShow())}</div>
      </section>
    </div>
  );
}

export default Partnership;
