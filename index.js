Vue.createApp({
  data() {
    return {
      textoNovoItem: '',
      novoItemImportante: false,
      lista: [],
    }
  },
  methods: {
    salvarNovoItem() {
      if (this.textoNovoItem.trim().length > 0) {
        let novoItem = {
          id: new Date().getTime(),
          texto: this.textoNovoItem,
          importante: this.novoItemImportante,
          feito: false,
        }
        this.lista.push(novoItem)
        this.textoNovoItem = ''
        this.novoItemImportante = false
      }
    }
  },
  computed: {
    qtDigitada() {
      return this.textoNovoItem.length
    }
  }
}).mount("#app")