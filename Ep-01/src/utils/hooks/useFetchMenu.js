import { useEffect, useState } from "react";
import { IMAGE_CATEGORY } from "../constant";

const useFetchMenu = (resId) => {
  const [menuItems, setMenuItems] = useState([]);
  const [resName, setResName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!resId) return;

    const fetchMenu = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );

        const data = await response.json();

        const regularCards =
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        const mainData = regularCards.filter((regularCard) => {
          return regularCard?.card?.card?.["@type"] === IMAGE_CATEGORY;
        });

        setMenuItems(mainData || []);
        setResName(data?.data?.cards[0]?.card?.card?.text || "");
      } catch (err) {
        console.error("Failed to fetch menu:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, [resId]);

  return { menuItems, resName, isLoading };
};

export default useFetchMenu;
