<template>
  <nav>
    <div v-if="isLoading" class="spinner">
      <spinner></spinner>
    </div>
    <div v-else class="categories">
      <div class="category" v-for="category in categories" :key="category.id">
        <div>
          <span
            :class="isActive === category.id && 'active'"
            @click="toggleCategory(category.id)"
            >{{ category.name }}</span
          >
        </div>
        <div class="products-count" v-if="isActive === category.id">
          <span>{{ productsLength }} PRODUCTS</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Spinner from '@/assets/loaders/Spinner';
import ApiService from '@/api';

export default {
  name: 'App',
  components: { Spinner },
  props: ['productsLength'],
  data() {
    return {
      isLoading: false,
      categories: [],
      isActive: false
    };
  },
  created() {
    this.getCateories();
  },
  methods: {
    async getCateories() {
      try {
        this.isLoading = true;
        const { data, status } = await ApiService.getCategories();
        if (status === 200) {
          this.isLoading = false;
          this.categories = data;
          this.isActive = this.categories[0].id;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    toggleCategory(id) {
      this.isActive = id;
      this.$emit('changeCategory', id);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/base.scss';
.spinner {
  text-align: center;
  margin: 4rem 0 4rem;
}
.categories {
  display: flex;
  justify-content: flex-end;
  font-size: 3rem;
  font-weight: bold;
  color: $category-color;
  width: 100%;
  margin: 4rem 0 4rem;
  .category {
    margin-left: 7rem;
    cursor: pointer;
    .products-count {
      color: $active-category-color;
      font-size: 0.75rem;
    }
  }
  .active {
    color: $active-category-color;
  }
}

@media (max-width: 1024px) {
  .categories {
    font-size: 2rem;
    .category {
      margin-left: 3rem;
      cursor: pointer;
      .products-count {
        font-size: 0.65rem;
      }
    }
  }
}
@media (max-width: 768px) {
  .categories {
    font-size: 1.5rem;
    margin: 3rem 0 3rem;
    .category {
      margin-left: 3rem;
      cursor: pointer;
      .products-count {
        font-size: 0.65rem;
      }
    }
  }
}
@media (max-width: 540px) {
  .categories {
    font-size: 1.1rem;
    margin: 2.5rem 0 2.5rem;
    .category {
      margin-left: 2rem;
      cursor: pointer;
      .products-count {
        font-size: 0.55rem;
      }
    }
  }
}
@media (max-width: 414px) {
  .categories {
    font-size: 0.9rem;
    margin: 2rem 0 2rem;
    .category {
      margin-left: 1.5rem;
      cursor: pointer;
      .products-count {
        font-size: 0.45rem;
      }
    }
  }
}
@media (max-width: 375px) {
  .categories {
    font-size: 0.8rem;
    margin: 1.5rem 0 1.5rem;
    .category {
      margin-left: 0.9rem;
      cursor: pointer;
      .products-count {
        font-size: 0.35rem;
      }
    }
  }
}
@media (max-width: 320px) {
  .categories {
    font-size: 0.7rem;
    margin: 1rem 0 1rem;
    .category {
      margin-left: 1rem;
      cursor: pointer;
      .products-count {
        font-size: 0.3rem;
      }
    }
  }
}
@media (max-width: 280px) {
  .categories {
    font-size: 0.6rem;
    margin: 1rem 0 1rem;
    .category {
      margin-left: 0.9rem;
      cursor: pointer;
      .products-count {
        font-size: 0.29rem;
      }
    }
  }
}
</style>
