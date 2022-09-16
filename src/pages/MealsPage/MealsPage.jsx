import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ENDPOINTS } from "../../utils/endpoints";
import { useFetch } from "../../utils/use-fetch";
import MealList from "../../components/meal-list";
import styles from "./index.module.scss";

const MealsPage = () => {
  const params = useParams();
  const { categoryName } = params;

  const data = useLoaderData();

  // const { data, loading, error } = useFetch(
  //   `${ENDPOINTS.FILTER}?c=${categoryName}`
  // );

  // if (loading) {
  //   return "Caricamento...";
  // }

  // if (!data?.meals?.length) {
  //   return "Not found";
  // }

  return (
    <div>
      <MealList categoryName={categoryName} meals={data?.meals} />
    </div>
  );
};

export default MealsPage;
