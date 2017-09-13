<template>
  <div id="app">
    <h1>Chorder</h1>
    <h4>Because time is expensive.</h4>
    <img src="./assets/logo.svg" style="width: 300px;">
    <div id="item">
      <mu-auto-complete hintText="Song" @input="handleInput" :dataSource="dataSource" @change="handlechange" />
      <mu-raised-button label="Search" class="demo-raised-button" primary @click="open"/>

    </div>

    <mu-dialog :open="dialog" title="Chord Showing" @close="close" >
      <img src="http://chordtabs.in.th/admin/admin/songsxx/25428.png" style="height: 400px;">
    <mu-flat-button slot="actions" secondary @click="close" label="Finish"/>
  </mu-dialog>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dataSource: [],
      dialog: false
    }
  },
  methods: {
    handlechange (val) {
      console.log(`you choose ${val}`)
    },

    clicking(){
      console.log(`you click ${song}`)
    },


    handleInput (val) {
      this.dataSource = [
        val,
        val + val,
        val + val + val
      ]
    },
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;

}
.mu-dialog {
  width: 30%;
}

body {
  background-color: #212121;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
