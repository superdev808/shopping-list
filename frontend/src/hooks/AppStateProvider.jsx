import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const AppContext = createContext({});

export const useAppState = () => {
  const context = useContext(AppContext);
  return context;
};

export default function AppStateProvider({ children }) {
  const [loadingItems, setLoadingItems] = useState(false);
  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
      setLoadingItems(true);
      try {
        const res = await axios.get(API_URL);
        setShoppingItems(res.data || []);
      } catch (err) {
        console.error(err?.message || "Error on fetching Shopping Items");
      }
      setLoadingItems(false);
    };
    fetchAllItems();
  }, []);

  const addItem = async (item) => {
    try {
      const res = await axios.post(API_URL, item);
      if (res.data) {
        setShoppingItems([...shoppingItems, { ...item, id: res.data?.id }]);
      }
    } catch (err) {
      console.error(err?.message || "Error on adding new item");
    }
  };

  const updateItem = async (newItem) => {
    try {
      const res = await axios.put(`${API_URL}/${newItem.id}`, newItem);
      if (res.data) {
        const newItems = [...shoppingItems];
        const idx = newItems.findIndex((item) => item.id === newItem.id);
        newItems[idx] = { ...newItem };
        setShoppingItems(newItems);
      }
    } catch (err) {
      console.error(err?.message || "Error on updating item");
    }
  };

  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      if (res.data) {
        setShoppingItems(shoppingItems.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.error(err?.message || "Error on updating item");
    }
  };

  const value = {
    loadingItems,
    shoppingItems,
    addItem,
    updateItem,
    deleteItem,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
