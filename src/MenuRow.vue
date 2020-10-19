// const Title = styled.h2`
//   font-size: 30px;
// `;

// const Container = styled.div`
//   margin-top: 50px;
//   font-size: 25px;
// `;

// const Ol = styled.ol`
//   padding: 0;
// `;

// const Li = styled.li`
//   list-style: none;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   max-width: 100%;
// `;

// const QtyBox = styled.span`
//   margin-left: 20px;
// `;

// const Cell = styled.span`
//   display: inline-block;
//   padding: 0 5px;
//   margin-bottom: 10px;
// `;

// const Button = styled.button`
//   border-radius: 12px;
//   border: 1px solid black;
//   font-size: 18px;
// `;

<template>
  <li style="list-style: none; display: flex; justify-content: space-between; flex-wrap: wrap; max-width: 100%;">
    <span>
      <span class="cell" style="display: inline-block; padding: 0 5px; margin-bottom: 10px; width: 55;">${{ price }}</span>
      <span class="cell" style="display: inline-block; padding: 0 5px; margin-bottom: 10px;">{{ item }}</span>
    </span>
    <span class="quantity-box" style="margin-left: 20px;">
      <span class="cell" style="display: inline-block; padding: 0 5px; margin-bottom: 10px;">
        <button style="border-radius: 12px; border: 1px solid black; font-size: 18px;" @click="decrease()" :disabled="quantity === 0">-</button>
      </span>
      <span class="cell" style="display: inline-block; padding: 0 5px; margin-bottom: 10px;">x{{ quantity }}</span>
      <span class="cell" style="display: inline-block; padding: 0 5px; margin-bottom: 10px;">
        <button style="border-radius: 12px; border: 1px solid black; font-size: 18px;" @click="increase()">+</button>
      </span>
      <span class="cell" style="display: inline-block; padding: 0 5px; margin-bottom: 10px;">${{ quantity * price }}</span>
    </span>
  </li>
</template>

<script>
export default {
  name: "MenuRow",
  props: {
    item: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    increase: {
      type: Function,
      required: true
    },
    decrease: {
      type: Function,
      required: true
    },
  }
};
</script>
