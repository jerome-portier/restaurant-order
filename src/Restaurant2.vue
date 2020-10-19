<template>
  <div>
    <div v-if="loading">
      Loading'
    </div>
    <div v-else-if="error">
      Sorry, but that restaurant is currently unavailable
    </div>
    <RestaurantDetails v-else :restaurant="restaurant"></RestaurantDetails>
  </div>
</template>

<script>
import RestaurantDetails from './RestaurantDetails2';
export default {
  name: "Restaurant",
  components: { RestaurantDetails },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      error: false,
      restaurant: null
    };
  },
  mounted() {
    // const host = process.env.REACT_APP_CONTENT_HOST;
    // const id = this.props.match.params.id;
    const host = "http://localhost:5000"; // TODO
    const id = 1; // TODO: CHANGE

    fetch(`${host}/restaurants/${id}.json`)
      .then(result => result.json())
      .then(restaurant => {
        this.restaurant = {
            ...restaurant,
            imageSrc: `${host}${restaurant.imageSrc}`,
          };
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
      });
  }
};
</script>
