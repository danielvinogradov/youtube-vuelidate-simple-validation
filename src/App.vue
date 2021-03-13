<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row class="mt-15 ml-15">
          <v-col cols="5">
            <router-view/>
          </v-col>
          <v-col cols="5" class="ml-15">
            <h2 class="mb-4">Правила</h2>
            <h3>Имя</h3>
            <ul class="mb-2">
              <li>Обязательно для заполнения</li>
              <li>Не меньше 2 знаков</li>
            </ul>
            <h3>Email</h3>
            <ul class="mb-2">
              <li>Обязательно для заполнения</li>
              <li>Валидный email</li>
            </ul>
            <h3>Пароль</h3>
            <ul class="mb-2">
              <li>Обязательно для заполнения</li>
              <li>Содержит буквы в верхнем и нижнем регистре</li>
              <li>Содержит спецсимволы ($%#)</li>
              <li>Пароли совпадают</li>
            </ul>
            <h3>Сайт</h3>
            <ul class="mb-2">
              <li>Если чекбокс активен, то обязательно для заполнения</li>
              <li>Валидный URL</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
  };
</script>
