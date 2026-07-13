
document.addEventListener('DOMContentLoaded', () => {
  // Theme logic
  const themeBtn = document.getElementById('theme-btn');
  if(localStorage.getItem('innova_theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if(themeBtn) themeBtn.textContent = '☀️';
  } else {
    if(themeBtn) themeBtn.textContent = '🌙';
  }

  if(themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('innova_theme', 'dark');
        themeBtn.textContent = '☀️';
      } else {
        localStorage.setItem('innova_theme', 'light');
        themeBtn.textContent = '🌙';
      }
    });
  }

  loadTopic('sintaxis');
  updateNavButtons();
  initPyodideSystem();
});

// Topics Database
const topicsDB = {
  sintaxis: {
    title: "Sintaxis Básica de Python",
    expl: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.8rem;">📜 <b>Lectura fácil:</b> Python se lee casi igual que el idioma inglés.</li>
        <li style="margin-bottom: 0.8rem;">📝 <b>Comentarios (#):</b> Son notas para vos. La computadora las ignora totalmente.</li>
        <li style="margin-bottom: 0.8rem;">🖨️ <b>print():</b> Comando mágico para mostrar texto o números en la consola.</li>
        <li style="margin-bottom: 0.8rem;">⚠️ <b>Cuidado:</b> Las mayúsculas importan. <code>print()</code> no es lo mismo que <code>Print()</code>.</li>
      </ul>
    `,
    ejemplo: `# Esto es un comentario. La compu lo ignora.

print("¡Hola, futuro programador!")

# Podemos imprimir números y texto
print(2026)`,
    codigoInicial: `# Tu primer programa en Python
# 1. Usá print() para que la consola diga "Hola Mundo"


# 2. Imprimí el número de este año


`
  },
  variables: {
    title: "Variables y Tipos de Datos",
    expl: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.8rem;">📦 <b>Variable:</b> Es una caja virtual donde guardamos datos para usarlos después.</li>
        <li style="margin-bottom: 0.8rem;">✍️ <b>Asignación:</b> Usamos el signo igual (<code>=</code>) para meter el dato en la caja.</li>
        <li style="margin-bottom: 0.8rem;">🔡 <b>String:</b> Texto. Siempre se escribe entre comillas <code>"Hola"</code>.</li>
        <li style="margin-bottom: 0.8rem;">🔢 <b>Enteros/Decimales:</b> Números puros, sin comillas. <code>10</code> o <code>5.5</code>.</li>
      </ul>
    `,
    ejemplo: `nombre = "Innova"
anio = 2026
promedio = 9.5

# Imprimimos los valores
print("Escuela:", nombre)
print("Ciclo:", anio)`,
    codigoInicial: `# Creá tu propia variable 'alumno' y asignale tu nombre
alumno = ""

# Usá print() para mostrarlo en la consola

`
  },
  operaciones: {
    title: "Operaciones Matemáticas",
    expl: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.8rem;">🧮 <b>Calculadora:</b> Python procesa matemáticas de forma instantánea.</li>
        <li style="margin-bottom: 0.8rem;">➕ <b>Suma:</b> <code>+</code></li>
        <li style="margin-bottom: 0.8rem;">➖ <b>Resta:</b> <code>-</code></li>
        <li style="margin-bottom: 0.8rem;">✖️ <b>Multiplicación:</b> <code>*</code></li>
        <li style="margin-bottom: 0.8rem;">➗ <b>División:</b> <code>/</code></li>
        <li style="margin-bottom: 0.8rem;">💡 El resultado se puede guardar en una variable nueva.</li>
      </ul>
    `,
    ejemplo: `precio = 100
cantidad = 3

total = precio * cantidad
print("El total a pagar es:", total)`,
    codigoInicial: `# Calculá el área de un rectángulo
base = 10
altura = 5

# Escribí la fórmula acá:
area = 

print(area)
`
  },
  listas: {
    title: "Listas Básicas",
    expl: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.8rem;">📚 <b>Lista:</b> Guarda muchos datos juntos dentro de corchetes <code>[]</code>, separados por comas.</li>
        <li style="margin-bottom: 0.8rem;">🔢 <b>Índice:</b> Cada elemento tiene un número de posición. <b>¡El primer elemento es el 0!</b></li>
        <li style="margin-bottom: 0.8rem;">➕ <b>Agregar:</b> El comando <code>.append()</code> agrega un elemento al final de la lista.</li>
      </ul>
    `,
    ejemplo: `materias = ["Matemática", "Física"]
print("Inicial:", materias)

# Agregamos una nueva
materias.append("Programación")
print("Actualizado:", materias)

# Accedemos a la primera materia
print("La mejor materia es:", materias[0])`,
    codigoInicial: `# Creá una lista con tus 3 comidas favoritas
comidas = []

# Agregá una cuarta comida con append()


print(comidas)
`
  },
  condicionales: {
    title: "Condicionales (if/else)",
    expl: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.8rem;">🚦 <b>Condicional if:</b> Le dice a la compu que ejecute código <b>SOLO SI</b> pasa algo.</li>
        <li style="margin-bottom: 0.8rem;">↪️ <b>Sino (else):</b> Se ejecuta si la condición de arriba dio falso.</li>
        <li style="margin-bottom: 0.8rem;">⚠️ <b>Puntuación:</b> Siempre terminan con dos puntos <code>:</code>.</li>
        <li style="margin-bottom: 0.8rem;">➡️ <b>Sangría (Tab):</b> El código que va adentro tiene que estar movido a la derecha.</li>
      </ul>
    `,
    ejemplo: `nota = 8

if nota >= 7:
    print("¡Aprobaste la materia!")
else:
    print("Tenés que recuperar.")`,
    codigoInicial: `# Cambiá el valor de temperatura para ver qué pasa
temperatura = 15

# Si hace menos de 20 grados, imprimir "Llevar campera"
# Si hace más (o igual), imprimir "Remera"


`
  },
  bucles: {
    title: "Bucles (For y While)",
    expl: `
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.8rem;">🔄 <b>Bucle for:</b> Repite una tarea una cantidad exacta de veces.</li>
        <li style="margin-bottom: 0.8rem;">🔍 <b>Uso común:</b> Es perfecto para recorrer listas elemento por elemento.</li>
        <li style="margin-bottom: 0.8rem;">♾️ <b>Bucle while:</b> Repite el código <b>mientras</b> una condición sea verdadera.</li>
      </ul>
    `,
    ejemplo: `alumnos = ["Ana", "Pedro", "Luis"]

for alumno in alumnos:
    print("Hola", alumno)
    
print("¡Lista terminada!")`,
    codigoInicial: `# Imprimí los números del 1 al 3 usando for y range()


`
  }
};


// Topic Switching Logic
const topicKeys = ["sintaxis", "variables", "operaciones", "listas", "condicionales", "bucles"];
let currentTopicIndex = 0;

function updateNavButtons() {
    document.getElementById('btn-prev').disabled = currentTopicIndex === 0;
    document.getElementById('btn-next').disabled = currentTopicIndex === topicKeys.length - 1;
    
    // Update label text
    const currentKey = topicKeys[currentTopicIndex];
    const currentTitle = topicsDB[currentKey].title;
    document.getElementById('current-topic-label').innerText = `${currentTopicIndex + 1}. ${currentTitle}`;
}

document.getElementById('btn-prev').addEventListener('click', () => {
    if(currentTopicIndex > 0) {
        currentTopicIndex--;
        loadTopic(topicKeys[currentTopicIndex]);
        updateNavButtons();
    }
});

document.getElementById('btn-next').addEventListener('click', () => {
    if(currentTopicIndex < topicKeys.length - 1) {
        currentTopicIndex++;
        loadTopic(topicKeys[currentTopicIndex]);
        updateNavButtons();
    }
});




function loadTopic(key) {
  const data = topicsDB[key];
  if(!data) return;
  
  document.getElementById('content-explicacion').innerHTML = data.expl;
  document.getElementById('content-ejemplo').innerText = data.ejemplo;
  document.getElementById('code-editor').value = data.codigoInicial;
  document.getElementById('console-output').innerText = "Esperando ejecución...";
}

// Pyodide Integration
let pyodideReady = false;
let pyodide = null;

async function initPyodideSystem() {
  const outputObj = document.getElementById('console-output');
  const btnRun = document.getElementById('btn-run');
  
  try {
    outputObj.innerText = "Descargando intérprete de Python (esto puede tardar unos segundos la primera vez)...\n";
    // window.loadPyodide comes from the CDN script
    pyodide = await window.loadPyodide({
      stdout: (text) => {
        outputObj.innerText += text + '\n';
      },
      stderr: (text) => {
        outputObj.innerText += "ERROR: " + text + '\n';
      }
    });
    pyodideReady = true;
    outputObj.innerText = "✅ ¡Entorno Python cargado! Listo para ejecutar.\n";
    btnRun.innerText = "▶️ Ejecutar Código";
    btnRun.disabled = false;
  } catch (err) {
    outputObj.innerText = "❌ Error cargando Python. Comprobá tu conexión a internet.\n" + err;
  }
}

document.getElementById('btn-run').addEventListener('click', async () => {
  if (!pyodideReady) return;
  const outputObj = document.getElementById('console-output');
  outputObj.innerText = ""; // Limpiar consola
  const btnRun = document.getElementById('btn-run');
  btnRun.innerText = "Ejecutando...";
  btnRun.disabled = true;
  
  const code = document.getElementById('code-editor').value;
  try {
    await pyodide.runPythonAsync(code);
    outputObj.innerText += "\n--- Ejecución finalizada con éxito ---";
  } catch(err) {
    outputObj.innerText += err.toString();
  }
  
  btnRun.innerText = "▶️ Ejecutar Código";
  btnRun.disabled = false;
});
