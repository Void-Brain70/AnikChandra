<template>
  <div class="todo">
    <TodoItem></TodoItem>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
export default {
  name: "TodoView",
  components: { TodoItem },
};
</script>
