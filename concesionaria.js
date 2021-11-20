let autos = require('./autos.js');
let persona = require('./personas.js');

let concesionaria = {
  autos: autos,
  buscarAuto: function(patente){
      let encontrado = null
      this.autos.forEach(function(auto){ if(auto.patente == patente){
       encontrado = auto
        }
         })
          return encontrado
    },

  venderAuto:  function (patente){
     if  (this.buscarAuto(patente) ){  
      return  this.buscarAuto(patente).vendido = true
    }
  },
  
  autosParaLaVenta: function(){
    return this.autos.filter((function(auto)
      {return auto.vendido === false}),this)
   },
           
  autosNuevos: function (){ 
      return this.autosParaLaVenta().filter ( (function (nuevo){
        return nuevo.km < 100
      }),this)
      },
  
  listaDeVentas: function () {
  lista1 = []
      for (let i = 0 ; i < this.autos.length ; i++){
      if (this.autos[i].vendido === true){  
      lista1.push (  autos[i].precio)
  }
    }return lista1
      },

  totalDeVentas:  function(){ 
    return  this.lista().reduce ( function (totalDeVenta,ventas){
       return totalDeVenta + ventas
      },0)
     },
  
 puedeComprar: function(auto,persona){ 
  let costoTotal = auto.precio;
  let autoCoutas =auto.cuotas;
  let compradorCoutas = persona.capacidadDePagoEnCuotas;
  let compradorPagoTotal = persona.capacidadDePagoTotal;
  if ( costoTotal <= compradorPagoTotal && 
     (costoTotal/autoCoutas) <= compradorCoutas) {
     return true
     console.log(true)
     }else{
      return false
      console.log(false)
      }
      },
       
autosQuePuedeComprar: function(persona){
  let puede =[]
  this.autosParaLaVenta().forEach(function(auto){
   let pComprar =concesionaria.puedeComprar(auto,persona)
   if (pComprar){
   puede.push(auto)
      }
       })
     return puede
        },
  }
  
 
     
  
     
  
     
       
  
  //console.log(concesionaria.buscarAuto("JJK116"))
  //console.log(concesionaria.buscarAuto("APL123"))
  //console.log(concesionaria.buscarAuto("APL12"))
  //concesionaria.buscarAuto("APL123")
  //concesionaria.venderAuto("JJK126")
  //console.log(concesionaria.venderAuto("JJK116"))
  //console.log(concesionaria.venderAuto("APL123"))
  //console.log(concesionaria)
  //console.log(concesionaria.autosParaLaVenta())
  //console.log(concesionaria.listaDeVentas())
  //console.log(concesionaria.totalDeVentas())
  //console.log(concesionaria.puedeComprar(auto,persona))
  