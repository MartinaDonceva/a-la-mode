<template>

  <div class="row mt-5">
    <div v-for="card in cards" class="col col-12 col-md-6 col-lg-4 mb-4">
      <router-link  to="Product" class="text-decoration-none text-black">
      <div class="card card-style">
        <img :src="card.image" class="card-img-top rounded-0" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text">Цена: {{ card.price }}</p>
        </div>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CustomCards",
  data() {
    return {
      cards: [
        {
          id:1,
          image:
            "https://img.global.news.samsung.com/za/wp-content/uploads/2020/12/Holiday-Series-Part-1-Lifestyle-TV_main_1_F.jpg",
          title: "Present",
          price: "1000 ден",
        },
        {
          id:2,
          image:
            "https://img.global.news.samsung.com/za/wp-content/uploads/2020/12/Holiday-Series-Part-1-Lifestyle-TV_main_1_F.jpg",
          title: "Present",
          price: "1000 ден",
        },
        {
          id:3,
          image:
            "https://img.global.news.samsung.com/za/wp-content/uploads/2020/12/Holiday-Series-Part-1-Lifestyle-TV_main_1_F.jpg",
          title: "Present",
          price: "1000 ден",
        },
        {
          id:4,
          image:
            "https://img.global.news.samsung.com/za/wp-content/uploads/2020/12/Holiday-Series-Part-1-Lifestyle-TV_main_1_F.jpg",
          title: "Present",
          price: "1000 ден",
        },
        {
          id:5,
          image:
            "https://img.global.news.samsung.com/za/wp-content/uploads/2020/12/Holiday-Series-Part-1-Lifestyle-TV_main_1_F.jpg",
          title: "Present",
          price: "1000 ден",
        },
        {
          id:6,
          image:
            "https://img.global.news.samsung.com/za/wp-content/uploads/2020/12/Holiday-Series-Part-1-Lifestyle-TV_main_1_F.jpg",
          title: "Present",
          price: "1000 ден",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-style{
  border: none;
}
</style>
