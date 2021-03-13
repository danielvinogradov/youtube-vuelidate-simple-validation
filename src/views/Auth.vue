<template>
  <v-col>
    <v-form>
      <h1 class="mb-5">Регистрация</h1>
      <v-text-field
          class="mb-4"
          label="Ваше имя"
          prepend-icon="mdi-account-outline"
          v-model="form.name"
          :error-messages="$v.$error ? nameErrors : []"
      />
      <v-text-field
          class="mb-4"
          label="E-mail"
          prepend-icon="mdi-email-outline"
          v-model="form.email"
          :error-messages="$v.$error ? emailErrors : []"
      />
      <v-text-field
          class="mb-4"
          label="Пароль"
          prepend-icon="mdi-lock-outline"
          v-model="form.password"
          :error-messages="$v.$error ? passwordErrors : []"
      />
      <v-text-field
          class="mb-4"
          label="Повторите пароль"
          prepend-icon="mdi-lock-outline"
          v-model="form.passwordRepeat"
          :error-messages="$v.$error ? passwordRepeatErrors : []"
      />
      <v-row>
        <v-col cols="4">
          <v-checkbox label="У меня есть сайт" v-model="form.hasWebsite"/>
        </v-col>
        <v-col cols="8">
          <v-text-field
              v-if="form.hasWebsite"
              class="mb-4"
              label="Ссылка на сайт"
              prepend-icon="mdi-link"
              v-model="form.websiteURL"
              :error-messages="$v.$error ? websiteURLErrors : []"
          />
        </v-col>
      </v-row>
      <v-btn :disabled="$v.$invalid && $v.$error" color="primary" class="mt-4" @click="onSubmit">Зарегистрироваться
      </v-btn>
    </v-form>
  </v-col>
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, minLength, email, sameAs, requiredIf, url } from 'vuelidate/lib/validators'
  import { hasUppercase, hasLowercase, hasSpecialChars } from '@/functions/validators'

  export default {
    name: "Auth",
    mixins: [ validationMixin, ],
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          passwordRepeat: '',
          hasWebsite: false,
          websiteURL: ''
        }
      }
    },
    validations: {
      form: {
        name: {
          required,
          minLength: minLength(2),
        },
        email: {
          required,
          email,
        },
        password: {
          required,
          sameAs: sameAs('passwordRepeat'),
          hasLowercase,
          hasUppercase,
          hasSpecialChars,
        },
        passwordRepeat: {
          required,
          hasLowercase,
          hasUppercase,
          hasSpecialChars,
        },
        websiteURL: {
          requiredIf: requiredIf(form => form.hasWebsite),
          url,
        }
      }

    },
    computed: {
      nameErrors() {
        const errors = [];
        if (!this.$v.form.name.required) errors.push('Обязательно для заполнения.')
        if (!this.$v.form.name.minLength) errors.push('Не меньше двух знаков.')
        return errors;
      },
      emailErrors() {
        const errors = [];
        if (!this.$v.form.email.required) errors.push('Обязательно для заполнения.')
        if (!this.$v.form.email.email) errors.push('Невалидный email.')
        return errors;
      },
      passwordErrors() {
        const errors = [];
        if (!this.$v.form.password.required) errors.push('Обязательно для заполнения.')
        if (!this.$v.form.password.hasUppercase) errors.push('Должен содержать буквы в верхнем регистре.')
        if (!this.$v.form.password.hasLowercase) errors.push('Должен содержать буквы в нижнем регистре.')
        if (!this.$v.form.password.hasSpecialChars) errors.push('Должен содержать спецсимволы ($%#).')
        if (!this.$v.form.password.sameAs) errors.push('Пароли не совпадают.')
        return errors;
      },
      passwordRepeatErrors() {
        const errors = [];
        if (!this.$v.form.passwordRepeat.required) errors.push('Обязательно для заполнения.')
        if (!this.$v.form.password.hasUppercase) errors.push('Должен содержать буквы в верхнем регистре.')
        if (!this.$v.form.password.hasLowercase) errors.push('Должен содержать буквы в нижнем регистре.')
        if (!this.$v.form.password.hasSpecialChars) errors.push('Должен содержать спецсимволы ($%#).')
        if (!this.$v.form.password.sameAs) errors.push('Пароли не совпадают.')
        return errors;
      },
      websiteURLErrors() {
        const errors = [];
        if (!this.$v.form.websiteURL.requiredIf) errors.push('Обязательно для заполнения.')
        if (!this.$v.form.websiteURL.url) errors.push('Невалидный URL.')
        return errors;
      }
    },
    methods: {
      onSubmit() {
        this.$v.$touch();

        if (!this.$v.$invalid) {
          alert(JSON.stringify(this.form))
        }
      }
    }
  }
</script>
