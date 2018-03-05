class Usuario {
  constructor(pcedula, pnombre, pprimerApellido, psegundoApellido, pgenero, pprovincia, pcanton, pdistrito, pusuario, pcorreo, pcontrasenna, pfecha, ) {
    this.cedula = pcedula;
    this.nombre = pnombre;
    this.primerApellido = pprimerApellido;
    this.segundoApellido = psegundoApellido;
    this.genero = pgenero;
    this.provincia = pprovincia;
    this.canton = pcanton;
    this.distrito = pdistrito;
    this.usuario = pusuario;
    this.correo = pcorreo;
    this.contrasenna = pcontrasenna;
    this.fecha = pfecha;
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