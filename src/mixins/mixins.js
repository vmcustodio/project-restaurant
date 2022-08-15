export default {
  methods: { // um mixin é um arquivo que terá varias funções que serão usadas, compartilhadas em outros componentes, não tendo parte visual e apenas parte lógicas
    isDesktop() {
      const width = window.innerWidth;
      return width > 1265;
  },
  isSmallScreens() {
      const width = window.innerWidth;
      return width < 767;
  }
  }
}