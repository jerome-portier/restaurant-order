// const MainColumn = styled.div`
//   max-width: 1150px;
//   margin: 0 auto;
//   padding: 20px;
// `;

<template>
  <div class="main-column" style="max-width: 1150px; margin: 0 auto; padding: 20px;">
    <!-- <Route exact path="/restaurant/:id" component={Restaurant} /> -->
    <!-- <router-view :history="history" /> -->
    <!-- <router-view /> -->
    <Restaurant :id=1></Restaurant>
  </div>
</template>

<script>
import Restaurant from './Restaurant2';
export default {
  name: "App",
  components: { Restaurant }
};
</script>
