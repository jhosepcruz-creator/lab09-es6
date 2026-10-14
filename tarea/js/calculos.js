// Arrow function con rest (...notas)
export const promedio = (...notas) => {
    const suma = notas.reduce((acc, curr) => acc + curr, 0);
    return suma / notas.length;
  };
  
  // Parámetro por defecto (minima = 13)
  export const estado = (nota, minima = 13) => 
    nota >= minima ? "Aprobado" : "Desaprobado";
  
  // Desestructuración, Spread y Template Literals
  export const reporte = (estudiante) => {
    const { nombre, notas } = estudiante;
    const prom = promedio(...notas);
    return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
  };