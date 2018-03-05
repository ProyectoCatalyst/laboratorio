class Usuario {
  constructor(pnombre, pprimerApellido, psegundoApellido, pcedula, pfecha, pgenero, pfoto, pubicacion, pprovincia, pcanton, pdistrito, pusuario, pcorreo, pcontrasenna) {
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

  getDifuntos() {
    return this.difuntos
  }

  setDifuntos(pdifunto){
    this.difuntos.push(pdifunto);
  }
}

class Animador{
  constructor(pcodigoAnimador,pnombreAnimador,pcostoAnimador){
    this.codigoAnimador = pcodigoAnimador;
    this.nombreAnimador = pnombreAnimador;
    this.costoAnimador = pcostoAnimador;
  }

  getFecha(){
    return `${this.fecha.getDay()}/${this.fecha.getMonth()}/${this.fecha.getYear()}`
  }

  getDifuntos(){
    return this.difuntos;
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
    this.clienteID = '';
    this.entierro = '';
  }

  setEntierro(pnuevoEntierro){
    this.entierro = pnuevoEntierro;
  }

  setCedulaCliente(pCedulaCliente){
     this.clienteID = pCedulaCliente;
  }
}

class Entierro {
  constructor (phoraInicio, phoraFinal, pfecha, plugar, pprioridad){
    this.horaInicio = phoraInicio;
    this.horaFinal = phoraFinal;
    this.fecha = pfecha;
    this.lugar = plugar; 
    this.prioridad = pprioridad;
  }
}
