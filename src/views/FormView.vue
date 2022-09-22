<template>
  <main class="column-center">
    <h1>Form test case</h1>
    <form class="column-center">
      <div>
        <label for="optionSelect">Choisissez un type. (Laissez vide pour une notification neutre)</label>
        <select name="optionSelect" id="" v-model="typeSelect">
          <option
            v-for="option in types"
            :value="option.value"
            :key="option.value"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <input v-model="inputText" placeholder="Entrez votre nom" />
      <p>Bonjour, {{ inputText }}</p>
      <textarea v-model="textArea"></textarea>
      <p>{{ textArea }}</p>
      <input type="hidden" />
      <input type="submit" @click.prevent="submit">
    </form>
  </main>
</template>

<script>
export default {
    data() {
        return {
          types: [
                {
                    name: "",
                    value: '',
                },
                {
                    name: "Succès",
                    value: 'success',
                },
                {
                    name: "Erreur",
                    value: 'error',
                }
            ],
            typeSelect: '',
            inputText: "",
            textArea: "",
        };
    },
    methods: {
      submit() {
        this.$store.dispatch('newNotificationAction', {
          type: this.typeSelect,
          message: this.inputText
        });
        this.inputText = '';
        this.typeSelect = '';
      }
    }
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10vh;
  }
  form {
    row-gap: 1vh;
  }
}
</style>