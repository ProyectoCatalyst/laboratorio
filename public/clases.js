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
}

class Retoque { // crear clase del retoque al cual se le dara mantenimiento.
  constructor(pnombre, pprecio) {
    this.nombre = pnombre,
    this.precio = pprecio
  }
}

class Difunto {
  constructor(papodo, pedad, pgenero, ptamanno) {
    this.apodo = papodo;
    this.edad = pedad;
    this.genero = pgenero;
    this.tamanno = ptamanno;
  }
  
  getCedula() {
    return this.cedula;
  }

  setDifunto(pnuevoDifunto) {
    this.difuntos.push(pnuevoDifunto);
  }
}