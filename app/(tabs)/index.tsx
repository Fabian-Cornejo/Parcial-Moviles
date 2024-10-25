import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'; 

export default function PantallaInicio() {
  const [saludo, setSaludo] = useState('Ingrese una frase motivacional');
  const [entradaUsuario, setEntradaUsuario] = useState('');
  const [textoMostrado, setTextoMostrado] = useState('');
  const [colorFondo, setColorFondo] = useState('#fff');
  const [tamanoFuente, setTamanoFuente] = useState(18); 

  const frasesPredefinidas = [
    '"Cada fracaso enseña al individuo algo que necesitaba aprender". Charles Dickens.',
    '"El que tiene fe en sí mismo no necesita que los demás crean en él". Miguel de Unamuno.',
  ];

  const colores = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ffcc99'];

  const mostrarFraseAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * frasesPredefinidas.length);
    const fraseAleatoria = frasesPredefinidas[indiceAleatorio];
    const frasesAMostrar = [fraseAleatoria, entradaUsuario];
    const fraseMostrada = frasesAMostrar[Math.floor(Math.random() * frasesAMostrar.length)];
    
    setTextoMostrado(fraseMostrada);

    const indiceColorAleatorio = Math.floor(Math.random() * colores.length);
    setColorFondo(colores[indiceColorAleatorio]);
  };

  return (
    <View style={[estilos.contenedor, { backgroundColor: colorFondo }]}>
      <View style={estilos.encabezado}>
        <Text style={estilos.textoEncabezado}>Fabian Cornejo</Text>
        <Text style={estilos.textoEncabezado}>ISFT °220</Text>
      </View>

      <Text style={estilos.textoSaludo}>{saludo}</Text>

      <TextInput
        style={estilos.entrada}
        placeholder="Frase:"
        value={entradaUsuario}
        onChangeText={setEntradaUsuario}
      />
      
      <View style={estilos.contenedorCentrado}>
        {textoMostrado ? (
          <Text style={[estilos.frase, { fontSize: tamanoFuente }]}>{textoMostrado}</Text>
        ) : null}

        <Slider
          style={estilos.slider}
          minimumValue={15}
          maximumValue={48}
          step={1}
          value={tamanoFuente}
          onValueChange={setTamanoFuente}
        />
        <Text style={estilos.textoSlider}>Tamaño de texto: {tamanoFuente}</Text>
      </View>

      <TouchableOpacity style={estilos.boton} onPress={mostrarFraseAleatoria}>
        <Text style={estilos.textoBoton}>Mostrar Frase</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20, 
  },
  encabezado: {
    position: 'absolute',
    top: 40, 
    left: 20, 
  },
  textoEncabezado: {
    fontSize: 26,
  },
  textoSaludo: {
    fontSize: 28,
    textAlign: 'center', 
    marginVertical: 20, 
  },
  entrada: {
    height: 40,
    width: 150, 
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignSelf: 'center', 
  },
  contenedorCentrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  frase: {
    marginTop: 20,
    textAlign: 'center', 
    width: '100%', 
  },
  slider: {
    width: 200,
    height: 40,
    marginTop: 20,
  },
  textoSlider: {
    marginTop: 10,
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#007bff', 
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    borderRadius: 5, 
    alignSelf: 'flex-end',
    marginBottom: 20, 
  },
  textoBoton: {
    color: '#fff', 
    fontSize: 22, 
    textAlign: 'center',
  },
});
