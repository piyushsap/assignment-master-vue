<template>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item" @click="endDay">
      <a class="nav-link" href="javascript:void(0)">End day</a>
    </li>
    <li
      class="nav-item dropdown"
      :class="{show: isDropdownOpen}"
      @click="isDropdownOpen=!isDropdownOpen"
    >
      <a
        class="nav-link dropdown-toggle"
        href="javascript:void(0)"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Save &amp; download</a>
      <div class="dropdown-menu" :class="{show: isDropdownOpen}" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="javascript:void(0)" @click="saveData">Save</a>
        <a class="dropdown-item" href="javascript:void(0)" @click="loadData">Download</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Funds: {{funds | currency}}</a>
    </li>
  </ul>
</template>
<script src="./Secondarynav.js"></script>