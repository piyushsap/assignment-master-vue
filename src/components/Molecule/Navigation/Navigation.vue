<template>
  <List :as="'ul'" class="navbar-nav" :class="navClass">
    <li v-for="(nav,index) in navitems" :key="index">
      <router-link
        v-if="nav.navPath!=''"
        :to="nav.navPath"
        class="nav-item"
        :class="nav.isDropdown ? ' dropdown': ''"
        :active-class="nav.activeClass"
        tag="span"
      >
        <a class="nav-link">{{nav.navText}}</a>
      </router-link>
    </li>
  </List>
</template>
<script src="./Navigation.js"></script>