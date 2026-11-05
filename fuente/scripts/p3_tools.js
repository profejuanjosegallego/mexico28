 <div class="card tool"><h3>${ic('timer')}Calculadora de horas</h3>
  <div class="guide">
   <div><div class="lab">Para qué sirve</div><p class="small">Responde cuántas horas y días por semana irá un estudiante al espacio laboral en cada año de su formación. Ayuda a planear antes de firmar el Convenio de Aprendizaje. ${art('8')}</p></div>
   <div><div class="lab">Cómo usarla</div><ol class="how"><li>Elige el campo de la carrera.</li><li>Si aparece, indica cuánto dura el Plan de rotación.</li><li>Mueve la barra al porcentaje de la Matriz de correspondencia.</li><li>Marca la casilla solo si la empresa cumple los criterios de madurez. ${art('4 XXIV')}</li></ol></div>
   <div><div class="lab">Cómo leer el resultado</div><p class="small">Cada fila es una semana tipo de ese año. Naranja es día en el espacio laboral y azul, día en la escuela.</p></div>
  </div>
  <div class="tgrid">
   <div class="ctrl v">
    <label for="h-c">1. Campo de la carrera
     <select id="h-c"><option value="g1">Sociales, negocios, artes, servicios, educación</option><option value="g2" selected>Ciencias, TIC, ingeniería, agro, salud</option><option value="tec">Tecnólogo de 8 semestres</option></select></label>
    <label for="h-d" id="h-dl">2. Duración del Plan de rotación
     <select id="h-d"><option value="m">Menos de 2 años</option><option value="d" selected>2 años</option></select></label>
    <label for="h-m"><span>3. Matriz de correspondencia: <output id="h-mo">80</output> %</span>
     <input id="h-m" type="range" min="50" max="100" value="80"></label>
    <label class="check" for="h-x"><input id="h-x" type="checkbox">4. Empresa madura o institución equiparada</label>
   </div>
   <div id="h-out" aria-live="polite"></div>
  </div>
 </div>
 <div class="card tool"><h3>${ic('calendar-clock')}Simulador de convenios</h3>
  <div class="guide">
   <div><div class="lab">Para qué sirve</div><p class="small">Comprueba si el Convenio de Aprendizaje de un estudiante termina antes de que venza el Convenio de Colaboración de su empresa. Si este vence antes, el de aprendizaje deja de valer. ${art('29')}</p></div>
   <div><div class="lab">Cómo usarlo</div><ol class="how"><li>Elige el tipo de espacio. Eso fija cuánto dura la Colaboración.</li><li>Elige cuánto dura el Convenio de Aprendizaje.</li><li>Mueve la barra al mes en que inicia, contado desde la firma de la Colaboración.</li></ol></div>
   <div><div class="lab">Cómo leer el resultado</div><p class="small">Cada barra es un periodo sobre la misma línea de tiempo. El recuadro rojo muestra los meses que quedarían sin cubrir.</p></div>
  </div>
  <div class="tgrid">
   <div class="ctrl v">
    <label for="c-t">1. Tipo de espacio laboral
     <select id="c-t"><option value="24">Regular: colaboración de 2 años</option><option value="36">Madura o equiparada: hasta 3 años</option><option value="48">Tecnólogo de 8 semestres: hasta 4 años</option></select></label>
    <label for="c-a">2. Duración del Convenio de Aprendizaje
     <select id="c-a"></select></label>
    <label for="c-s"><span>3. Inicia en el mes <output id="c-so">6</output> de la Colaboración</span>
     <input id="c-s" type="range" min="0" max="30" step="1" value="6"></label>
   </div>
   <div id="c-out" aria-live="polite"></div>
  </div>
 </div>`;
