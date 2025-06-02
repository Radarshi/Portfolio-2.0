import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Index from "../pages/Index.tsx";

const RedirectLogic = () => {
  const navigate = useNavigate();
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const reloadCount = parseInt(localStorage.getItem("reloadCount") || "0", 10) + 1;
    localStorage.setItem("reloadCount", reloadCount.toString());

    if (reloadCount >= 50) {
      localStorage.removeItem("reloadCount");
    }

    if (reloadCount === 1 || reloadCount % 5 === 0) {
      setShouldRender(false);
      navigate("/loading", { replace: true });
    }
  }, [navigate]);

  if (!shouldRender) return null;

  return <Index />;
};

export default RedirectLogic;
