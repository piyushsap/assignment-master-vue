<template>
  <div class="container">
    <section class="row mb-5">
      <div class="col-6">
        <h1 class="text-center">YOU</h1>
        <Progressbar :progressBarClass="'bg-success'" :progress="playerHealth">{{ playerHealth }}</Progressbar>
      </div>
      <div class="col-6">
        <h1 class="text-center">MONSTER</h1>
        <Progressbar :progressBarClass="'bg-danger'" :progress="monsterHealth">{{ monsterHealth }}</Progressbar>
      </div>
    </section>
    <section class="row controls mb-5" v-if="!gameIsRunning">
      <div class="col-12 text-center">
        <Button :btnClass="'btn-primary'" @click="startGame">Start New Game</Button>
      </div>
    </section>
    <section class="row controls mb-5" v-else>
      <div class="col-12 text-center">
        <Button :btnClass="'btn-primary'" @click="attack">ATTACK</Button>
        <Button :btnClass="'btn-primary'" @click="specialAttack">SPECIAL ATTACK</Button>
        <Button :btnClass="'btn-success'" @click="heal">HEAL</Button>
        <Button :btnClass="'btn-danger'" @click="giveUp">GIVE UP</Button>
      </div>
    </section>
    <section class="row log" v-if="turns.length > 0">
      <div class="col-12 columns">
        <ul class="list-group">
          <li
            class="list-group-item"
            :key="index"
            v-for="(turn,index) in turns"
            :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}"
          >{{ turn.text }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script src="./Monster.js"></script>