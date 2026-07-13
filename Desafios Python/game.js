
// TEMA
document.addEventListener('DOMContentLoaded', () => {
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
});

// DATOS DE PREGUNTAS
const db = {
  iniciado: [
    { type: 'code', title: "Imprimiendo texto", desc: "Completá el comando para imprimir en pantalla.", code: "<input type='text' id='ans1' class='code-input' style='width: 80px;' autocomplete='off'>(\"Hola Mundo\")", answers: { ans1: "print" }, points: 10 },
    { type: 'choice', title: "Tipos de datos", desc: "¿Qué tipo de dato es `x = 5.5`?", code: "", options: ["int", "float", "string", "bool"], correct: 1, points: 10 },
    { type: 'code', title: "Asignando Variables", desc: "Asignale el valor 15 a la variable edad.", code: "edad <input type='text' id='ans1' class='code-input' style='width: 40px;' autocomplete='off'> 15", answers: { ans1: "=" }, points: 10 },
    { type: 'choice', title: "Lógica Básica", desc: "¿Cuál es el resultado de `10 > 5`?", code: "", options: ["False", "15", "True", "Error"], correct: 2, points: 10 },
    { type: 'code', title: "Bucle For", desc: "Completá la estructura del bucle for básico.", code: "<input type='text' id='ans1' class='code-input' style='width: 60px;' autocomplete='off'> i in range(5):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)", answers: { ans1: "for" }, points: 10 },
    { type: 'choice', title: "Comentarios", desc: "¿Cómo se escribe un comentario de una línea en Python?", code: "", options: ["// comentario", "/* comentario */", "<!-- comentario -->", "# comentario"], correct: 3, points: 10 },
    { type: 'code', title: "Matemáticas", desc: "Completá para sumar dos números.", code: "total = 10 <input type='text' id='ans1' class='code-input' style='width: 40px;' autocomplete='off'> 5", answers: { ans1: "+" }, points: 10 },
    { type: 'choice', title: "Igualdad", desc: "¿Cuál es el operador matemático para comparar si dos cosas son iguales?", code: "", options: ["=", "==", "===", "!="], correct: 1, points: 10 },
    { type: 'code', title: "Condicionales", desc: "Verificá si X es menor a 5.", code: "if x <input type='text' id='ans1' class='code-input' style='width: 40px;' autocomplete='off'> 5:", answers: { ans1: "<" }, points: 10 },
    { type: 'choice', title: "Conversión de texto", desc: "¿Qué hace la función `int(\"10\")`?", code: "", options: ["Tira error", "Multiplica por 10", "Convierte el texto a número entero", "Lo convierte a decimal"], correct: 2, points: 10 },
    { type: 'code', title: "Tipos de datos", desc: "Convertí el texto a un número entero.", code: "numero = <input type='text' id='ans1' class='code-input' style='width: 60px;' autocomplete='off'>(\"100\")", answers: { ans1: "int" }, points: 10 },
    { type: 'choice', title: "Variables de texto", desc: "¿Qué guarda la variable `nombre = \"Ana\"`?", code: "", options: ["Un integer", "Un boolean", "Un string", "Una lista"], correct: 2, points: 10 },
    { type: 'code', title: "Concatenación", desc: "Uní los dos textos en uno solo.", code: "saludo = \"Hola\" <input type='text' id='ans1' class='code-input' style='width: 40px;' autocomplete='off'> \" Mundo\"", answers: { ans1: "+" }, points: 10 },
    { type: 'choice', title: "Booleanos", desc: "¿Cuáles son los dos valores posibles de un booleano en Python?", code: "", options: ["1 y 0", "True y False", "Verdadero y Falso", "Si y No"], correct: 1, points: 10 },
    { type: 'code', title: "Multiplicación", desc: "Multiplicá la base por la altura.", code: "area = base <input type='text' id='ans1' class='code-input' style='width: 40px;' autocomplete='off'> altura", answers: { ans1: "*" }, points: 10 }
  ],
  programador: [
    { type: 'code', title: "Listas", desc: "Agregá un elemento al final de la lista.", code: "alumnos = [\"Juan\"]<br>alumnos.<input type='text' id='ans1' class='code-input' style='width: 80px;' autocomplete='off'>(\"Ana\")", answers: { ans1: "append" }, points: 20 },
    { type: 'choice', title: "Índices", desc: "¿Cómo accedemos a \"Ana\" en `lista = [\"Juan\", \"Ana\", \"Luis\"]`?", code: "", options: ["lista[0]", "lista[1]", "lista[2]", "lista(1)"], correct: 1, points: 20 },
    { type: 'code', title: "Funciones", desc: "Definí correctamente la función saludar.", code: "<input type='text' id='ans1' class='code-input' style='width: 50px;' autocomplete='off'> saludar(nombre):<br>&nbsp;&nbsp;&nbsp;&nbsp;return \"Hola \" + nombre", answers: { ans1: "def" }, points: 20 },
    { type: 'choice', title: "Diccionarios", desc: "¿Cómo se define un diccionario vacío?", code: "", options: ["d = []", "d = ()", "d = {}", "d = dict()"], correct: 2, points: 20 },
    { type: 'code', title: "Bucle While", desc: "Hacé que el bucle se ejecute mientras x sea menor a 10.", code: "<input type='text' id='ans1' class='code-input' style='width: 70px;' autocomplete='off'> x < 10:<br>&nbsp;&nbsp;&nbsp;&nbsp;x += 1", answers: { ans1: "while" }, points: 20 },
    { type: 'choice', title: "Listas: Eliminar", desc: "¿Cómo eliminas el último elemento de una lista?", code: "", options: ["lista.delete()", "lista.remove()", "lista.pop()", "lista.clear()"], correct: 2, points: 20 },
    { type: 'code', title: "Longitud", desc: "Obtené la cantidad de elementos de la lista.", code: "cantidad = <input type='text' id='ans1' class='code-input' style='width: 50px;' autocomplete='off'>(lista)", answers: { ans1: "len" }, points: 20 },
    { type: 'choice', title: "Concepto: Diccionario", desc: "¿Qué es exactamente un diccionario en Python?", code: "", options: ["Un libro de palabras", "Una colección ordenada de números", "Una colección de pares clave-valor", "Una lista de strings"], correct: 2, points: 20 },
    { type: 'code', title: "Claves de Diccionario", desc: "Agregá un nuevo valor al diccionario usando la clave 'edad'.", code: "datos[<input type='text' id='ans1' class='code-input' style='width: 80px;' autocomplete='off'>] = 25", answers: { ans1: "'edad'" }, points: 20 },
    { type: 'choice', title: "Funciones: Retorno", desc: "¿Qué palabra clave devuelve el resultado de una función?", code: "", options: ["output", "return", "send", "give"], correct: 1, points: 20 },
    { type: 'code', title: "Llamar a Funciones", desc: "Ejecutá la función pasando un 5 como argumento.", code: "resultado = <input type='text' id='ans1' class='code-input' style='width: 90px;' autocomplete='off'>(5)", answers: { ans1: "calcular" }, points: 20 },
    { type: 'choice', title: "Bucle For: Rango", desc: "¿Qué números genera `range(3)`?", code: "", options: ["1, 2, 3", "0, 1, 2, 3", "0, 1, 2", "3"], correct: 2, points: 20 },
    { type: 'code', title: "While infinito", desc: "Creá un bucle que se ejecute por siempre.", code: "while <input type='text' id='ans1' class='code-input' style='width: 60px;' autocomplete='off'>:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Bucle\")", answers: { ans1: "True" }, points: 20 },
    { type: 'choice', title: "Strings", desc: "¿Qué método convierte todo el texto a mayúsculas?", code: "", options: ["upper()", "toUpper()", "capitalize()", "uppercase()"], correct: 0, points: 20 },
    { type: 'code', title: "Métodos String", desc: "Convertí el nombre a minúsculas.", code: "nombre_min = nombre.<input type='text' id='ans1' class='code-input' style='width: 80px;' autocomplete='off'>()", answers: { ans1: "lower" }, points: 20 }
  ],
  experto: [
    { type: 'choice', title: "Conceptos de IA", desc: "¿Qué es exactamente un 'Prompt' en Inteligencia Artificial?", code: "", options: ["Un error de código", "La instrucción o texto que le damos a la IA", "Un tipo de variable", "Un entorno virtual"], correct: 1, points: 30 },
    { type: 'code', title: "Análisis de Datos", desc: "Importá la librería Pandas usando su alias clásico.", code: "import pandas <input type='text' id='ans1' class='code-input' style='width: 40px;' autocomplete='off'> pd", answers: { ans1: "as" }, points: 30 },
    { type: 'choice', title: "Modelos de IA", desc: "ChatGPT es un LLM. ¿Qué significan las siglas LLM?", code: "", options: ["Large Language Model", "Local Linear Machine", "Logic Level Matrix", "Low Latency Memory"], correct: 0, points: 30 },
    { type: 'code', title: "Streamlit: Títulos", desc: "Completá el código para agregar el título principal a la app.", code: "import streamlit as st<br>st.<input type='text' id='ans1' class='code-input' style='width: 70px;' autocomplete='off'>(\"Mi Dashboard\")", answers: { ans1: "title" }, points: 30 },
    { type: 'code', title: "Pandas: Leer CSV", desc: "Cargá un archivo CSV y guardalo en la variable df (DataFrame).", code: "df = pd.<input type='text' id='ans1' class='code-input' style='width: 100px;' autocomplete='off'>(\"datos.csv\")", answers: { ans1: "read_csv" }, points: 30 },
    { type: 'choice', title: "Pandas: Vista previa", desc: "¿Qué hace `df.head()`?", code: "", options: ["Borra las primeras filas", "Ordena el DataFrame por encabezado", "Muestra las primeras 5 filas", "Devuelve los nombres de columnas"], correct: 2, points: 30 },
    { type: 'code', title: "Pandas: Filtrado", desc: "Filtrá el DataFrame para que solo queden los mayores de 18.", code: "df_filtrado = df[df['edad'] <input type='text' id='ans1' class='code-input' style='width: 40px;' autocomplete='off'> 18]", answers: { ans1: ">" }, points: 30 },
    { type: 'choice', title: "Conceptos de IA", desc: "En IA Generativa, ¿qué significa 'Alucinación'?", code: "", options: ["Cuando la IA procesa imágenes", "Cuando genera información falsa o inventada con mucha seguridad", "Cuando la computadora se recalienta", "Cuando detecta un error de sintaxis"], correct: 1, points: 30 },
    { type: 'code', title: "Streamlit: Texto", desc: "Escribí texto normal en el dashboard de Streamlit.", code: "<input type='text' id='ans1' class='code-input' style='width: 40px;' autocomplete='off'>.write(\"Hola a todos\")", answers: { ans1: "st" }, points: 30 },
    { type: 'choice', title: "Parámetros IA", desc: "¿Para qué sirve el parámetro 'Temperatura' en un LLM?", code: "", options: ["Medir el calor de la GPU", "Aumentar la velocidad de respuesta", "Controlar el nivel de creatividad o aleatoriedad de las respuestas", "Limitar la cantidad de palabras"], correct: 2, points: 30 },
    { type: 'code', title: "Streamlit: Inputs", desc: "Creá una caja para que el usuario escriba su nombre.", code: "nombre = st.<input type='text' id='ans1' class='code-input' style='width: 120px;' autocomplete='off'>(\"Tu nombre:\")", answers: { ans1: "text_input" }, points: 30 },
    { type: 'choice', title: "Librerías", desc: "¿Cuál de estas librerías se usa típicamente para graficar datos en Python?", code: "", options: ["requests", "matplotlib", "os", "flask"], correct: 1, points: 30 },
    { type: 'code', title: "Pandas: Resumen", desc: "Generá un resumen estadístico del DataFrame.", code: "resumen = df.<input type='text' id='ans1' class='code-input' style='width: 100px;' autocomplete='off'>()", answers: { ans1: "describe" }, points: 30 },
    { type: 'choice', title: "Entrenamiento IA", desc: "¿Qué significa hacer 'Fine-tuning' a un modelo?", code: "", options: ["Bajarle el volumen", "Entrenar un modelo base con datos propios específicos", "Cambiarle el lenguaje de programación", "Borrar su memoria"], correct: 1, points: 30 },
    { type: 'code', title: "Streamlit: Botones", desc: "Ejecutá código solo si el botón es presionado.", code: "if st.<input type='text' id='ans1' class='code-input' style='width: 80px;' autocomplete='off'>(\"Generar\"):<br>&nbsp;&nbsp;&nbsp;&nbsp;generar_grafico()", answers: { ans1: "button" }, points: 30 }
  ]
};


let currentLevelId = "";
let questions = [];
let currentQIdx = 0;
let lives = 3;
let score = 0;

// Lógica de Selección de Nivel
document.querySelectorAll('.lcard').forEach(card => {
  card.addEventListener('click', () => {
    currentLevelId = card.getAttribute('data-level');
    startGame(currentLevelId);
  });
});

document.getElementById('btn-home').addEventListener('click', () => {
  document.getElementById('game-ui').classList.add('hidden');
  document.getElementById('screen-overlay').classList.add('hidden');
  document.getElementById('screen-selection').classList.remove('hidden');
});

document.getElementById('btn-restart').addEventListener('click', () => {
  startGame(currentLevelId);
});

function startGame(levelId) {
  document.getElementById('screen-selection').classList.add('hidden');
  document.getElementById('screen-overlay').classList.add('hidden');
  document.getElementById('game-ui').classList.remove('hidden');
  
  // Nombres bonitos
  const names = { iniciado: "🟢 Iniciado", programador: "🟡 Programador", experto: "🔴 Experto" };
  document.getElementById('current-badge').innerText = names[levelId];
  
  // Show question headers, hide endgame
  document.getElementById('question-title').classList.remove('hidden');
  document.getElementById('question-desc').classList.remove('hidden');
  document.getElementById('endgame-container').classList.add('hidden');

  
  // Shuffle array and select 10 random questions
  const shuffled = [...db[levelId]].sort(() => 0.5 - Math.random());
  questions = shuffled.slice(0, 10);
  currentQIdx = 0;
  lives = 3;
  score = 0;
  
  renderQuestion();
  
  // Limpiar event listeners viejos si existen clonando el boton
  const oldBtn = document.getElementById('btn-check');
  const newBtn = oldBtn.cloneNode(true);
  oldBtn.parentNode.replaceChild(newBtn, oldBtn);
  newBtn.addEventListener('click', checkCodeAnswer);
  
  // Soporte enter (remover listeners anteriores)
  const container = document.getElementById('code-container');
  container.replaceWith(container.cloneNode(true));
  document.getElementById('code-container').addEventListener('keyup', (e) => {
    if(e.key === 'Enter') checkCodeAnswer();
  });
}

function renderQuestion() {
  // Update Hearts & Score
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((h, i) => { h.style.opacity = (i < lives) ? '1' : '0.2'; });
  document.getElementById('score-val').innerText = score;
  
  if (currentQIdx >= questions.length) {
    showEndgame("¡Nivel Completado! 🏆", `¡Excelente trabajo! Puntaje Final: ${score}`);
    return;
  }
  
  const q = questions[currentQIdx];
  document.getElementById('question-title').innerText = q.title;
  document.getElementById('question-desc').innerText = q.desc;
  
  const codeCont = document.getElementById('code-container');
  const choiceCont = document.getElementById('choice-container');
  const actionCont = document.getElementById('action-container');
  const msgBox = document.getElementById('feedback-msg');
  
  msgBox.innerText = "";
  msgBox.className = "feedback";
  
  if (q.type === 'code') {
    codeCont.innerHTML = q.code;
    codeCont.classList.remove('hidden');
    choiceCont.classList.add('hidden');
    actionCont.classList.remove('hidden');
    
    setTimeout(() => {
      const firstInput = document.querySelector('.code-input');
      if (firstInput) firstInput.focus();
    }, 100);
    
  } else if (q.type === 'choice') {
    codeCont.innerHTML = q.code;
    if (q.code === "") codeCont.classList.add('hidden'); else codeCont.classList.remove('hidden');
    
    choiceCont.classList.remove('hidden');
    actionCont.classList.add('hidden');
    
    choiceCont.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn-choice';
      btn.innerText = opt;
      btn.onclick = () => checkChoiceAnswer(idx, btn);
      choiceCont.appendChild(btn);
    });
  }
}

function handleResult(isCorrect, points) {
  const msgBox = document.getElementById('feedback-msg');
  if (isCorrect) {
    msgBox.innerText = `¡Correcto! +${points} Puntos`;
    msgBox.className = "feedback correct";
    score += points;
    
    document.querySelectorAll('.code-input').forEach(inp => inp.disabled = true);
    document.querySelectorAll('.btn-choice').forEach(btn => btn.disabled = true);
    document.getElementById('btn-check').disabled = true;
    
    setTimeout(() => {
      document.getElementById('btn-check').disabled = false;
      currentQIdx++;
      renderQuestion();
    }, 1500);
  } else {
    msgBox.innerText = "Respuesta incorrecta. Perdiste una vida.";
    msgBox.className = "feedback wrong";
    lives--;
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((h, i) => { h.style.opacity = (i < lives) ? '1' : '0.2'; });
    
    if (lives <= 0) {
      setTimeout(() => {
        const q = questions[currentQIdx];
        let correctText = "";
        if (q.type === 'choice') {
            correctText = q.options[q.correct];
        } else {
            correctText = Object.values(q.answers).join(" ");
        }
        let desc = "Nadie nació sabiendo todo, ¡vos podés!<br><br><span style='font-size: 0.9rem; opacity: 0.8;'>La respuesta correcta era:</span><br><b style='color: var(--azul-b);'>" + correctText + "</b>";
        showEndgame("Game Over 💻", desc);
      }, 500);
    }
  }
}

function checkCodeAnswer() {
  const q = questions[currentQIdx];
  if (q.type !== 'code') return;
  
  let allCorrect = true;
  for (const [id, correctAns] of Object.entries(q.answers)) {
    const input = document.getElementById(id);
    const userAns = input.value.trim();
    if (userAns !== correctAns) {
      allCorrect = false;
      input.classList.remove('error');
      void input.offsetWidth;
      input.classList.add('error');
    } else {
      input.classList.add('success');
      input.classList.remove('error');
    }
  }
  
  handleResult(allCorrect, q.points);
}

function checkChoiceAnswer(selectedIdx, btnElement) {
  const q = questions[currentQIdx];
  if (selectedIdx === q.correct) {
    btnElement.classList.add('correct');
    handleResult(true, q.points);
  } else {
    btnElement.classList.add('wrong');
    handleResult(false, q.points);
  }
}

function showEndgame(title, desc) {
  // Hide active game elements
  document.getElementById('code-container').classList.add('hidden');
  document.getElementById('choice-container').classList.add('hidden');
  document.getElementById('action-container').classList.add('hidden');
  document.getElementById('question-title').classList.add('hidden');
  document.getElementById('question-desc').classList.add('hidden');
  document.getElementById('feedback-msg').innerText = "";
  
  // Show endgame inline
  const endgame = document.getElementById('endgame-container');
  endgame.classList.remove('hidden');
  document.getElementById('endgame-title').innerText = title;
  document.getElementById('endgame-desc').innerHTML = desc;
  
  if (score > 0) {
    document.getElementById('cert-inline-container').classList.remove('hidden');
  } else {
    document.getElementById('cert-inline-container').classList.add('hidden');
  }
}

// Certificate Generation
document.getElementById('btn-download-cert-inline').addEventListener('click', () => {
  const nameInput = document.getElementById('player-name-inline').value.trim();
  const playerName = nameInput === "" ? "Jugador Anónimo" : nameInput;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  
  // Polyfill for roundRect just in case
  if (!ctx.roundRect) {
    ctx.roundRect = function(x, y, w, h, r) {
      if (typeof r === 'undefined') r = 0;
      this.moveTo(x + r, y);
      this.lineTo(x + w - r, y);
      this.quadraticCurveTo(x + w, y, x + w, y + r);
      this.lineTo(x + w, y + h - r);
      this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      this.lineTo(x + r, y + h);
      this.quadraticCurveTo(x, y + h, x, y + h - r);
      this.lineTo(x, y + r);
      this.quadraticCurveTo(x, y, x + r, y);
      return this;
    }
  }

  // Calculate if perfect score (100%)
  const maxScore = questions.length * questions[0].points;
  const isPerfect = score >= maxScore && score > 0;
  
  // Background gradient (Always Light)
  let bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bgGrad.addColorStop(0, '#f8fafc'); 
  bgGrad.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw main card (glassmorphism / clean card effect)
  const marginX = 100;
  const marginY = 100;
  const cardW = canvas.width - marginX * 2;
  const cardH = canvas.height - marginY * 2;
  const radius = 24;

  ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
  ctx.shadowBlur = 40;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 15;

  ctx.fillStyle = '#ffffff'; // Always white card
  ctx.beginPath();
  ctx.roundRect(marginX, marginY, cardW, cardH, radius);
  ctx.fill();

  // Reset shadow for text
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  // Optional: Card Border
  if (isPerfect) {
    ctx.lineWidth = 4;
    let borderGrad = ctx.createLinearGradient(marginX, marginY, marginX + cardW, marginY + cardH);
    borderGrad.addColorStop(0, '#fbbf24');
    borderGrad.addColorStop(1, '#f59e0b');
    ctx.strokeStyle = borderGrad;
    ctx.stroke();
  } else {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(0,0,0,0.05)';
    ctx.stroke();
  }

  // Header texts (Inside Card)
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#64748b';
  ctx.font = '700 16px "Inter", sans-serif';
  ctx.fillText("INNOVA — LABORATORIO DE CÓDIGO", marginX + 60, marginY + 60);

  ctx.textAlign = 'right';
  const today = new Date().toLocaleDateString('es-AR');
  ctx.fillText("FECHA: " + today, marginX + cardW - 60, marginY + 60);

  // Main Title
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  let titleGrad = ctx.createLinearGradient(canvas.width/2 - 300, 0, canvas.width/2 + 300, 0);
  if (isPerfect) {
    titleGrad.addColorStop(0, '#d97706'); // Doradito mas oscuro para fondo blanco
    titleGrad.addColorStop(1, '#f59e0b');
  } else {
    titleGrad.addColorStop(0, '#0088CE'); // Azul Innova
    titleGrad.addColorStop(1, '#8CC63F'); // Verde Innova
  }
  ctx.fillStyle = titleGrad;
  ctx.font = '900 60px "Inter", sans-serif';
  ctx.fillText("🎮 RÉCORD DE PUNTUACIÓN", canvas.width / 2, marginY + 140);

  // Subtitle
  ctx.fillStyle = '#64748b';
  ctx.font = '500 24px "Inter", sans-serif';
  ctx.fillText("Alcanzado por:", canvas.width / 2, marginY + 220);

  // Name
  ctx.fillStyle = '#0f172a';
  ctx.font = '900 75px "Inter", sans-serif';
  ctx.fillText(playerName.toUpperCase(), canvas.width / 2, marginY + 290);

  // Level info
  const levelNames = { iniciado: 'Iniciado (1er Año)', programador: 'Programador (3er Año)', experto: 'Experto (6to Año)' };
  const levelText = levelNames[currentLevelId] || 'Desafío';
  
  ctx.fillStyle = '#475569';
  ctx.font = '600 24px "Inter", sans-serif';
  ctx.fillText("NIVEL: " + levelText.toUpperCase(), canvas.width / 2, marginY + 370);

  // Score Badge
  const badgeY = marginY + 470;
  const badgeW = 280;
  const badgeH = 75;
  
  let badgeGrad = ctx.createLinearGradient(canvas.width/2 - badgeW/2, badgeY - badgeH/2, canvas.width/2 + badgeW/2, badgeY + badgeH/2);
  if (isPerfect) {
    badgeGrad.addColorStop(0, '#fbbf24');
    badgeGrad.addColorStop(1, '#d97706');
  } else {
    badgeGrad.addColorStop(0, '#0088CE');
    badgeGrad.addColorStop(1, '#005f9e');
  }
  
  // Shadow for badge
  ctx.shadowColor = isPerfect ? 'rgba(245, 158, 11, 0.4)' : 'rgba(0, 136, 206, 0.4)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetY = 10;
  
  ctx.fillStyle = badgeGrad;
  ctx.beginPath();
  ctx.roundRect(canvas.width/2 - badgeW/2, badgeY - badgeH/2, badgeW, badgeH, badgeH/2);
  ctx.fill();

  ctx.shadowColor = 'transparent'; // reset
  ctx.shadowBlur = 0;

  ctx.fillStyle = '#ffffff';
  ctx.font = '800 34px "Inter", sans-serif';
  ctx.fillText(`${score} PTS`, canvas.width / 2, badgeY + 2);

  if (isPerfect) {
    ctx.fillStyle = '#d97706'; // Dorado oscuro sobre blanco
    ctx.font = '700 20px "Inter", sans-serif';
    ctx.fillText("⭐ DESEMPEÑO PERFECTO ⭐", canvas.width / 2, badgeY + 80);
  }

  const link = document.createElement('a');
  link.download = `Record_Innova_${playerName.replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
});


document.getElementById('btn-restart-inline').addEventListener('click', () => {
  startGame(currentLevelId);
});

document.getElementById('btn-home-inline').addEventListener('click', () => {
  document.getElementById('game-ui').classList.add('hidden');
  document.getElementById('screen-selection').classList.remove('hidden');
});
