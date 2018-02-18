class Usuario {
  constructor(pnombre, pprimerApellido, psegundoApellido, pcedula, pfecha, pgenero, pfoto, pubicacion, pprovincia, pcanton, pdistrito, pusuario, pcontrasenna) {
    this.nombre = pnombre;
    this.primerApellido = pprimerApellido;
    this.segundoApellido = psegundoApellido;
    this.cedula = pcedula;
    this.fecha = pfecha;
    this.genero = pgenero;
    this.foto = pfoto;
    this.ubicacion = pubicacion;
    this.canton = pcanton;
    this.distrito = pdistrito;
    this.usuario = pusuario;
    this.contrasenna = pcontrasenna;
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.primerApellido} ${this.segundoApellido}`;
  }

  getUsuario() {
    return this.usuario;
  }

  getContrasenna() {
    return this.contrasenna;
  }
}