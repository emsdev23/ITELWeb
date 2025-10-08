import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteTitle = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "ITEL - Immersive Technology Entrepreneurship Labs";
        break;
      case "/AboutUs":
        document.title = "About ITEL";
        break;
      case "/incubatees":
        document.title = "ITEL's Incubatees ";
        break;
      case "/Initiatives/Transportation":
        document.title = "HASHTIC for Urban city Transportation";
        break;
      case "/Initiatives/Heating&Cooling":
        document.title = "ITEL's Heating & Cooling Solutions";
        break;
      case "/Initiatives/UrbanWaterloggingMitigationForum":
        document.title = "Urban Waterlogging Mitigation Forum by ITEL";
        break;
      case "/Initiatives/AssistiveTechnology":
        document.title = "Assistive Technologies by ITEL";
        break;
      case "/Initiatives/CyberSecurity":
        document.title = "Cybersecurity solutions by ITEL";
        break;
      default:
        document.title = "ITEL";
    }
  }, [location]);

  return null;
};

export default RouteTitle;
