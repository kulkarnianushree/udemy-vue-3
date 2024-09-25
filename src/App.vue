<template>
  <div>
    <!-- <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <button @click="setSelectedComponent('active-component')">Active Component</button>
    <button @click="setSelectedComponent('manage-component')">Manage Component</button>
    <keep-alive> <component :is="selectedComponent"></component> </keep-alive>
    <course-goal>
      <template v-slot:default="slotProp">
        <h2>{{ slotProp.item }}</h2>
        <p>{{ slotProp['another-prop'] }}</p>
        <p>{{ slotProp.fav }}</p>
      </template>
    </course-goal>
  </div>
</template>

<script>
// import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';
// import BadgeList from './components/BadgeList.vue';
import ActiveComponent from './ActiveComponent.vue';
import ManageComponent from './ManageComponent.vue';
import CourseGoal from './components/CourseGoal.vue';
export default {
  components:{
    // TheHeader,
    // UserInfo,
    // BadgeList
    ActiveComponent,
    ManageComponent,
    CourseGoal
  },
  data() {
    return {
      // activeUser: {
      //   name: 'Anushree kulkarni',
      //   description: 'Site owner and admin',
      //   role: 'admin',
      // },
      selectedComponent:'active-component'
    };
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>