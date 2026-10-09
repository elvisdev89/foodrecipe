import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
        const recipe = action.payload;
        const existingIndex = state.favoriterecipes.findIndex(
          (item) => item.id === article.idFood
        );
        if (existingIndex >= 0) {
          state.favoriterecipes.splice(existingIndex, 1);
        } else {
          state.favoriterecipes.push(recipe);
        }
      },
  
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
