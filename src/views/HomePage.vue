<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Data Cryptocurrency</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button @click="fetchCryptos">Get Data</ion-button>

      <ion-grid v-if="cryptos.length">
        <ion-row class="th">
          <ion-col><b>NAMA</b></ion-col>
          <ion-col><b>SIMBOL</b></ion-col>
          <ion-col><b>HARGA USD</b></ion-col>
        </ion-row>
        <ion-row v-for="crypto in cryptos" :key="crypto.id" class="td">
          <ion-col>{{ crypto.name }}</ion-col>
          <ion-col style="text-align: center;">{{ crypto.symbol }}</ion-col>
          <ion-col style="text-align: right;">{{ crypto.price_usd }}</ion-col>
        </ion-row>
      </ion-grid>
      
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import { getCryptos } from '../services/cryptoService';

export default {
  setup() {
    const cryptos = ref([]);

    const fetchCryptos = async () => {
      cryptos.value = await getCryptos();
    };

    return { cryptos, fetchCryptos };
  }
};
</script>
<style scoped>
  ion-grid {
    
    --ion-grid-column-padding: 30px;
  }
  .th{
    text-align: center;
    background-color: lightblue;
    color: black;
    border: solid 1px #fff; 
  }
  .td{
    border: solid 1px #fff;
  }
  
</style>
