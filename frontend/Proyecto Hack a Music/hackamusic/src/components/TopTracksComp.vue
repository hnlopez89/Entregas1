<template>
  <div>
    <h1>Los temas más escuchados</h1>
    <!-- Aplicamos v-model para el filtrado de datos -->
    <input type="search" v-model="search" placeholder="Find your track" />
    <ul>
      <!-- Aplicamos v-for para escoger cada dato del array -->
      <li v-for="track in filtered" :key="track.id">
        <p>
          <b>Track:</b>
          {{track.name}}
        </p>
        <p>
          <b>Artist:</b>
          {{track.artist.name}}
        </p>
        <p>
          <b>Listened:</b>
          {{track.listeners}} times
        </p>
        <br />
        <button>
          <a :href="track.url">Play</a>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //Exportamos el componente e indicamos el tipo de dato
  name: "TopTrackComp",
  props: {
    toptracks: Array,
  },
  data() {
    return {
      //Devolvemos los datos filtrados si hemos hecho busqueda
      search: "",
    };
  },
  computed: {
    filtered() {
      //Aplicamos filtro mediante la función
      if (!this.search) {
        return this.toptracks;
      }
      return this.toptracks.filter((track) =>
        track.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 4rem;
  text-align: center;
  font-size: 2.5rem;
}

input {
  margin: 2rem 0;
  text-align: center;
  padding: 0.5rem;
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
}
li {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border: solid 0.1rem beige;
  border-radius: 10%;
  margin: 1rem;
  width: 200px;
}

button {
  padding: 0.5rem;
  margin: 0.5rem 3rem;
  font-size: 1rem;
  font-weight: bold;
}
</style>