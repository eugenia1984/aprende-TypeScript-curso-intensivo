/*
Creación de un formulario con el patrón Builder
En este ejercicio, se te presenta un código que utiliza el patrón de diseño Builder para construir un formulario dinámico. Tu objetivo es completar las instrucciones dentro del bloque de prueba para verificar la creación correcta del formulario.

Observa la estructura del bloque de prueba que se proporciona, utilizando las palabras clave "describe" y "it". Estas palabras clave se utilizan comúnmente en frameworks de pruebas para organizar y ejecutar las pruebas.

Dentro del bloque "it", encontrarás un comentario que dice "// TODO". Tu tarea es reemplazar ese comentario con el código necesario para verificar la creación del formulario.

Utiliza el FormBuilder para construir el formulario. Puedes agregar diferentes tipos de campos utilizando los métodos proporcionados, como addTextField(), addNumberField(), y addMultiSelectField(). Asegúrate de pasar los parámetros requeridos para cada tipo de campo.

Una vez que hayas construido el formulario, tu objetivo es verificar tanto la estructura general del formulario como los campos individuales.

a. Para verificar la estructura, debes comprobar si el formulario es un array utilizando la función Array.isArray(). Si es un array, muestra un mensaje en la consola indicando que el formulario fue creado correctamente. De lo contrario, muestra un mensaje indicando que hubo un error en la creación del formulario.

b. Para verificar los campos individuales, utiliza un bucle forEach en el formulario. Dentro del bucle, comprueba si cada campo tiene las propiedades label y type. Si ambos están presentes, muestra un mensaje en la consola indicando el nombre del campo y su tipo. Si falta alguna propiedad, muestra un mensaje indicando que hay un error en la estructura del campo.

Una vez que hayas completado las instrucciones y agregado el código necesario, puedes ejecutar la prueba para verificar si el formulario se ha creado correctamente. Observa la salida en la consola para ver los mensajes de verificación.
*/
// Implementa el FormBuilder
class FormBuilder {
  constructor() {
    this.fields = [];
  }

  addTextField(label) {
    this.fields.push({ label, type: 'text' });
    return this;
  }

  addNumberField(label) {
    this.fields.push({ label, type: 'number' });
    return this;
  }

  addMultiSelectField(label, options) {
    this.fields.push({ label, type: 'multi-select', options });
    return this;
  }

  build() {
    return this.fields;
  }
}

// Bloque de prueba
describe('Creación de un formulario con el patrón Builder', () => {
  it('debería construir un formulario correctamente', () => {
    // Crea un nuevo formulario utilizando el FormBuilder
    const form = new FormBuilder()
      .addTextField('Nombre')
      .addNumberField('Edad')
      .addMultiSelectField('Intereses', ['Deportes', 'Música', 'Viajes'])
      .build();

    // Verifica si el formulario es un array
    if (Array.isArray(form)) {
      console.log('El formulario fue creado correctamente.');
      
      // Verifica los campos individuales
      form.forEach(field => {
        if (field.label && field.type) {
          console.log(`Campo: ${field.label}, Tipo: ${field.type}`);
        } else {
          console.log('Error en la estructura del campo:', field);
        }
      });
    } else {
      console.log('Error en la creación del formulario.');
    }
  });
});