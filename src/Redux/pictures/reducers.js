import { ADD_IMAGE_SUCCESS, DELETE_IMAGE } from "./actions";

const initialState = {
  images: [
    {
      title: "Baby",
      url: `https://images.unsplash.com/photo-1491013516836-7db643ee125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTU2MzB8MHwxfHNlYXJjaHwxfHxiYWJ5fGVufDB8fHx8MTYyOTcwNzQ0MA&ixlib=rb-1.2.1&q=80&w=1080`,
    },
  ],
};

export function pictureReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE_SUCCESS:
      return {
        images: state.images.concat([action.payload]),
      };
    case DELETE_IMAGE:
      return {
        images: state.images.filter((image, index) => index !== action.payload),
      };
    default:
      return state;
  }
}
