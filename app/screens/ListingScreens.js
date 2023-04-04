import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";

function ListingScreens({ navigation }) {
  //temporary solution: array of objects
  // when we connect the app the backend, I am going to retrieve the listings
  // from the server

  // we should declare a state variable to store the listings that we get from the server.
  const [listings, setListings] = useState([]);

  // now we should call our api the first time our component gets rendered. so we use the effect hook.
  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreens;
