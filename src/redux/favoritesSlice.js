import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
        const recipe = action.payload;
        console.log(recipe);
        const existingIndex = state.favoriterecipes.findIndex(
          (item) => item.idFood === recipe.idFood
        );
        console.log(existingIndex);
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
