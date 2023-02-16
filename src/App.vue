<script setup lang="ts">
import { reactive } from "vue";
import axios from "axios";
import LayoutHeader from "./components/LayoutHeader.vue";

const state = reactive({
  token: null,
  games: [],
});

const atlasApp = import.meta.env.VITE_ATLAS_APP;

const fetchToken = async () => {
  const response = await axios.post(
    `https://realm.mongodb.com/api/client/v2.0/app/${atlasApp}/auth/providers/anon-user/login`
  );

  return response.data.access_token;
};

const getToken = async () => {
  return state.token || fetchToken();
};

const searchGames = async () => {
  const response = await axios.post(
    "https://data.mongodb-api.com/app/data-ovyfa/endpoint/data/v1/action/find",
    {
      dataSource: "Cluster0",
      database: "games",
      collection: "games",
      sort: {
        likes: -1,
        _id: -1,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
    }
  );

  state.games = response.data.documents;
};
</script>

<template>
  <LayoutHeader />

  <main class="container mx-auto">
    <pre>{{ state.games }}</pre>
    <button @click="searchGames">try</button>
    <br />

    <RouterView />
  </main>
</template>
