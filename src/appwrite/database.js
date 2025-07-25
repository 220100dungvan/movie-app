import { ID, Query } from "appwrite";
import { COLLECTION_ID_METRICS, DATABASE_ID, databases } from "./config";

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const result = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_METRICS,
      [Query.equal("searchTerm", searchTerm)]
    );
    console.log(result);
    if (result.documents.length > 0) {
      const doc = result.documents[0];
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID_METRICS,
        doc.$id,
        {
          count: doc.count + 1,
        }
      );
    } else {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID_METRICS,
        ID.unique(),
        {
          searchTerm: searchTerm,
          count: 1,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          movie_id: movie.id,
        }
      );
    }
  } catch (error) {
    console.log("Error fetching search metrics:", error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_METRICS,
      [Query.orderDesc("count"), Query.limit(5)]
    );
    return result.documents;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};
