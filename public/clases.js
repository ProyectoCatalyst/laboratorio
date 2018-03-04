class Usuario {
  constructor(pnombre, pprimerApellido, psegundoApellido, pcedula, pfecha, pgenero, pfoto, pubicacion, pcanton, pdistrito, pusuario, pcorreo, pcontrasenna) {
    this.nombre = pnombre;
    this.primerApellido = pprimerApellido;
    this.segundoApellido = psegundoApellido;
    this.cedula = pcedula;
    this.fecha = pfecha;
    this.genero = pgenero;
    this.foto = pfoto;
    this.ubicacion = pubicacion;
    // this.provincia = pprovincia;
    this.canton = pcanton;
    this.distrito = pdistrito;
    this.usuario = pusuario;
    this.correo = pcorreo;
    this.contrasenna = pcontrasenna;
    this.difuntos = [];
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.primerApellido} ${this.segundoApellido}`;
  }

  getUsuario() {
    return this.usuario;
  }

  getCorreo() {
    return this.correo;
  }

  getContrasenna() {
    return this.contrasenna;
  }

  getCedula() {
    return this.cedula;
  }

  setDifunto(pnuevoDifunto) {
    this.difuntos.push(pnuevoDifunto);
  }
}

class Difunto {
  constructor(papodo, pedad, pgenero, ptamanno) {
    this.apodo = papodo;
    this.edad = pedad;
    this.genero = pgenero;
    this.tamanno = ptamanno;
    this.servicios = [];

  }
  addServicios (pnuevoServicio){
    this.servicios.push(pnuevoServicio);
  }

}

