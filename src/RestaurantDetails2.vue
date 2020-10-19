// const smallScreen = `@media(max-width: 1080px)`;

// const Container = styled.div`
//   display: flex;
//   justify-content: space-around;

//   ${smallScreen} {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const MenuColumn = styled.section`
//   display: flex;
//   max-width: 100%;
//   flex-direction: column;
//   ${smallScreen} {
//     width: 100%;
//   }
// `;

// const ImageColumn = styled.section`
//   max-width: 100%;
//   ${smallScreen} {
//     order: -1;
//   }
// `;

// const RestaurantName = styled.h1`
//   font-size: 40px;
//   margin: 10px 0 20px;
// `;

// const Img = styled.img`
//   width: 500px;
//   max-width: 100%;
//   margin-bottom: 10px;
// `;

// const Figure = styled.figure`
//   margin: 0;
// `;

// const Caption = styled.figcaption`
//   width: 500px;
//   max-width: 100%;
//   font-size: 30px;
// `;

// const Total = styled.div`
//   align-self: flex-end;
//   font-size: 30px;
//   margin: 50px 0 0;

//   ${smallScreen} {
//     margin: 0;
//   }
// `;

// const OrderButton = styled.button`
//   padding: 10px 15px;
//   margin-top: 15px;
//   align-self: flex-end;
//   border: none;
//   background-color: #e79652;
//   font-size: 25px;
// `;

<template>
  <div id="restaurant-details-container" style="display: flex; justify-content: space-around;">
    <section class="menu-column" style="display: flex; max-width: 100%; flex-direction: column;">
      <Menu :menu="menu" :quantities="quantities" :increase="change(1)" :decrease="change(-1)" />
      <div id="menu-total" style="align-self: flex-end; font-size: 30px; margin: 50px 0 0;">Total: ${{ total }}</div>
      <button id="order-button"
        style="padding: 10px 15px; margin-top: 15px; align-self: flex-end; border: none; background-color: #e79652; font-size: 25px;"
        @click="submitOrder()">
        Order now
      </button>
    </section>
    <section class="image-column" style="max-width: 100%;">
      <h1 id="restaurant-name" style="font-size: 40px; margin: 10px 0 20px;">{{ name }}</h1>
      <figure style="margin: 0;">
        <img :src="imageSrc" :alt="imageDescription" style="width: 500px; max-width: 100%; margin-bottom: 10px;"/>
        <figcaption style="width: 500px; max-width: 100%; font-size: 30px;">{{ description }}</figcaption>
      </figure>
    </section>
  </div>
</template>

<script>
import Menu from './Menu2';
export default {
  name: "RestaurantDetails",
  components: { Menu },
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    const quantities = this.restaurant.menu.reduce((result, menuItem) => ({...result, [menuItem.item]: 0,}), {});
    return {
      menu: this.restaurant.menu,
      name: this.restaurant.name,
      imageSrc: this.restaurant.imageSrc,
      imageDescription: this.restaurant.imageDescription,
      description: this.restaurant.description,
      quantities
    };
  },
  computed: {
    total() {
      return this.menu.reduce((sum, menuItem) => sum + this.quantities[menuItem.item] * menuItem.price, 0);
    }
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
  },
  methods: {
    change(delta) {
      return item => () => {
        this.quantities[item] += delta;
      };
    },
    submitOrder() {
      alert(`Thank you for your order of the following delicious JSON:\n
        ${JSON.stringify(this.quantities)}\n
        (This is the end of the demo)`,
      );
    }
  }
};
</script>
