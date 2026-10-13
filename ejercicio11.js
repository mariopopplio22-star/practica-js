const persona = {
  apellidos: "Bautista Alanya",
  nombres: "Mario",
  hablar: function() {return "Hola que tal"},
  locacion: {
    departamento: "Ica",
    provincia: "Chincha",
    distrito: "Álto Larán",
    direccion: "13 de Junio",
    mostrar: function() 
    {return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion}`}
  }
}
console.log(persona.hablar())
console.log(persona.locacion["departamento"])
console.log(persona.locacion.mostrar())