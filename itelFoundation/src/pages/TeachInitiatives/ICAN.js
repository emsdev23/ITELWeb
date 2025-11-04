import React, { useState } from "react";
import styles from "../Partnership/Partnership.module.css";
import Jhon from "./ICANMembers/John Augustine.jpeg";
import ChesterReberio from "./ICANMembers/ChesterReberio.jpeg";
import Sivaramakrishnan from "./ICANMembers/KC Sivaramakrishnan.jpeg";
import AishwaryaThiruvengadam from "../../Images/company6.png";
import ShridharShukla from "./ICANMembers/Shridhar Shukla.jpeg";
import RamMohan from "./ICANMembers/Ram Mohan.jpeg";
import MathananKailas from "./ICANMembers/Mathanan Kailas.jpeg";
import KameswariChebrolu from "../../Images/company6.png";
import ArunBalajiBuduru from "./ICANMembers/Arun Balaji Buduru.jpeg";
import MukulJoshi from "./ICANMembers/Mukul Joshi.jpeg";
import Tanima from "./ICANMembers/Tanima Hajra.jpeg";
import UrbiChatterji from "./ICANMembers/Urbi Chatterjee.jpeg";
import DebapriyaBasuRoy from "../../Images/company6.png";
import Nikita from "./ICANMembers/Nikita.jpeg";
import SandeepShukla from "./ICANMembers/Sandeep Shukla.jpeg";
import AshokJhunjhunwala from "../CommiteeMembers/Advisor/Prof.Ashok.jpg";
import SandhyaRavikumar from "./ICANMembers/Sandhya Ravikumar.jpeg";
import ReemaSaha from "../CommiteeMembers/Advisor/ReemaSaha.jpg";
import VadlamaniAnandKumar from "./ICANMembers/Vadlamani Anand Kumar.jpeg";
import PrasannaSouresh from "../../Images/company6.png";
function ICAN() {
  const [selectedCategory, setSelectedCategory] = useState("ICANMembers");
  const ICANMembers = [
    {
      name: "Ashok Jhunjhunwala",
      description: "",
      image: AshokJhunjhunwala,
      website: "https://www.linkedin.com/in/ashok-jhunjhunwala-4b273b181/",
    },
    {
      name: "Sandeep Shukla",
      description: "",
      image: SandeepShukla,
      website: "https://www.linkedin.com/in/sandeepkshukla/",
    },
    {
      name: "Urbi Chatterji",
      description: "",
      image: UrbiChatterji,
      website: "https://www.linkedin.com/in/urbi-chatterjee-a4286931/",
    },
    {
      name: "Shridhar Shukla",
      description: "",
      image: ShridharShukla,
      website: "https://www.linkedin.com/in/shridharshukla/",
    },
    {
      name: "Chester Reberio",
      description: "",
      image: ChesterReberio,
      website: "https://www.linkedin.com/in/chester-rebeiro-7475192/",
    },
    {
      name: "Kameswari Chebrolu",
      description: "",
      image: KameswariChebrolu,
      website: "",
    },
    {
      name: "John Augustine",
      description: "",
      image: Jhon,
      website: "https://www.linkedin.com/in/johnaugustine/",
    },

    {
      name: "Arun Balaji Buduru",
      description: "",
      image: ArunBalajiBuduru,
      website: "https://www.linkedin.com/in/arun-balaji-buduru-8802a824/",
    },

    {
      name: "Debapriya Basu Roy",
      description: "",
      image: DebapriyaBasuRoy,
      website: "",
    },

    {
      name: "KC Sivaramakrishnan",
      description: "",
      image: Sivaramakrishnan,
      website: "https://www.linkedin.com/in/kc-sivaramakrishnan-25061a14/",
    },

    {
      name: "Ram Mohan",
      description: "",
      image: RamMohan,
      website: "https://www.linkedin.com/in/rammohan-srinivasan-94a6b716/",
    },

    {
      name: "Mathanan Kailas",
      description: "",
      image: MathananKailas,
      website: "https://www.linkedin.com/in/mathanan-kailas-8a368a309/",
    },
    {
      name: "Nikita",
      description: "",
      image: Nikita,
      website: "",
    },

    {
      name: "Aishwarya Thiruvengadam",
      description: "",
      image: AishwaryaThiruvengadam,
      website: "",
    },

    {
      name: "Mukul Joshi",
      description: "",
      image: MukulJoshi,
      website: "https://www.linkedin.com/in/mukuljoshi/",
    },

    {
      name: "Tanima",
      description: "",
      image: Tanima,
      website: "https://www.linkedin.com/in/tanima-hajra-11a7144b/",
    },
    {
      name: "Reema Saha",
      description: "",
      image: ReemaSaha,
      website: "https://www.linkedin.com/in/reema-saha-875a5a54/",
    },

    {
      name: "Sandhya Ravikumar",
      description: "",
      image: SandhyaRavikumar,
      website: "https://www.linkedin.com/in/sandhya-ravikumar-b856233/",
    },
    {
      name: "Vadlamani Anand Kumar",
      description: "",
      image: VadlamaniAnandKumar,
      website: "https://www.linkedin.com/in/anand-kumar-vadlamani-5a251b173/",
    },

    {
      name: "Prasanna Souresh",
      description: "",
      image: PrasannaSouresh,
      website: "https://www.linkedin.com/in/prasanna-souresh-ba46191a3/",
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
      case "ICANMembers":
        return ICANMembers;
      default:
        return [];
    }
  };
  return (
    <div>
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.grid}>{renderPartners(getPartnersToShow())}</div>
      </section>
    </div>
  );
}

export default ICAN;
