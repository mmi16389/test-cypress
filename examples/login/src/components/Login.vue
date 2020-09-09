<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            :counter="10"
            :rules="userNameRules"
            label="Identifiant"
            required
          ></v-text-field>

          <v-text-field v-model="pass" :rules="passRules" label="Mot de passe" required></v-text-field>

          <v-checkbox v-model="checkbox" label="Se souvenir de moi" required></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            id="submit-btn"
          >Validate</v-btn>

          <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { VForm } from '@/types'
import Vue from 'vue'
import { Component, Ref } from 'vue-property-decorator'

@Component
export default class Form extends Vue {
  @Ref('form') readonly form!: VForm;
  valid = true;
  username = '';
  userNameRules = [
    (v: any) => !!v || 'Name is required',
    (v: any) => (v && v.length <= 10) || 'Name must be less than 10 characters'
  ];

  passRules = [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length <= 4) || 'Password must be less than 10 characters'
  ];

  pass = ''; 
 
  checkbox = false;
  validate () {
    this.form.validate()
  }

  reset () {
    this.form.reset()
  }

  resetValidation () {
    this.form.resetValidation()
  }
}
</script>
