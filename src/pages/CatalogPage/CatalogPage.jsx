import styles from "./index.module.scss";

import { ENDPOINTS } from "../../utils/endpoints.js";
import { useFetch } from "../../utils/use-fetch.js";
import CategoryList from "../../components/category-list";
import { useLoaderData } from "react-router-dom";

const CatalogPage = () => {
  // const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

  // if (loading) {
  //   return "Loading...";
  // }

  const data = useLoaderData();

  return (
    <div className={styles.MainCatalog}>
      <h1 className={styles.Title}>What do you want to eat?</h1>
      {data ? (
        <CategoryList categories={data?.categories ?? []} />
      ) : (
        "Si è verificato un errore!"
      )}
    </div>
  );
};

export default CatalogPage;
