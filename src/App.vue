<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import LayoutHeader from "./components/LayoutHeader.vue";
import type { Game } from "@/types";

const atlasApp = import.meta.env.VITE_ATLAS_APP;

const token = ref<string>("");

const games = ref<Game[]>([]);

const fetchToken = async () => {
  const response = await axios.post(
    `https://realm.mongodb.com/api/client/v2.0/app/${atlasApp}/auth/providers/anon-user/login`
  );

  return response.data.access_token;
};

const getToken = async () => {
  return token.value || fetchToken();
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

  games.value = response.data.documents;
};
</script>

<template>
  <LayoutHeader />

  <main class="container mx-auto p-4">
    <pre>{{ games }}</pre>
    <button @click="searchGames">try</button>
    <br />

    <RouterView />
  </main>
</template>
