const personas = [
  {
    id: 1,
    nombre: 'Matias',
    fecha: new Date(1995, 1, 13),
    estadoCivil: 'solter@',
    preferencias: ['Programar', 'Nadar'],
  },
  {
    id: 2,
    nombre: 'Gregorio',
    fecha: new Date(1965, 1, 13),
    estadoCivil: 'solter@',
    preferencias: ['Cantar', 'Pintar'],
  },
  {
    id: 3,
    nombre: 'Ivana',
    fecha: new Date(1992, 4, 12),
    estadoCivil: 'solter@',
    preferencias: ['Enseñar', 'Bailar'],
  },
];

const tablaPersona = document.querySelector('#tablaPersona');
const infoCartel = document.querySelector('#infoCartel');



/*
 *UTILS
 */

 //Alternativa para no estar usando querySelector
const $ = (element) => document.querySelector(element);

 const getOptionSelectedMultiple = (element) => {
  const selected = [];
  for (const option of element.options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  return selected;
};

// genera un id al azar,no es relevante esto lo deberia hacer el backend
const generateId = () => Math.ceil(Math.random() * 100_000);

// https://stackoverflow.com/questions/12346381/set-date-in-input-type-date
const parseDateToString = (date) =>{
  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  return `${date.getFullYear()}-${month}-${day}` 
}

const parseDateToStringDom = (date) =>{
  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  return `${day}/${month}/${date.getFullYear()}` 
}

const selectedMultplesOptions = (element, optionsToSelect) =>{
  const options = element.options
  for (const index in options) {
    const option = options[index];
    if(optionsToSelect.includes(option.value)){
      option.selected = true
    }
  }
}

const renderTable = () => {
  // Reduce parcea el array a un html
  const dataTable = personas.reduce((acc, persona) => {
    return `${acc}
    <tr>
    <td> ${persona.nombre}</td>
    <td>${parseDateToStringDom(persona.fecha)}</td>
    <td>${persona.estadoCivil}</td>
    <td>${persona.preferencias.join()}</td>
    <td>
      <button class="button is-warning" onclick="openEditModal(this)" data-id="${
        persona.id
      }" >Editar</button>
      <button class="button is-danger" onclick="openDeleteModal(this)" data-id="${
        persona.id
      }">Borrar</button>
    </td>
  </tr>
   `;
  }, '');
  // el acumulador empieza en comillas para que concatene correctamente
  // no estuviera el primer elemento seria un objeto y genera error
  tablaPersona.innerHTML = dataTable;
};

const renderInfo = () => {
  infoCartel.innerText = personas.length;
};
//funcion que actualiza todo el dom
const updateDom = () => {
  renderTable();
  renderInfo();
};

//funcion que inicializa el proyecto para
const init = () => {
  updateDom();
};

init();

// Modal bulma
// https://bulma.io/documentation/components/modal/#javascript-implementation-example

// Functions to open and close a modal
function openModal($el) {
  $el.classList.add('is-active');
}

function closeModal($el) {
  $el.classList.remove('is-active');
}

function closeAllModals() {
  (document.querySelectorAll('.modal') || []).forEach(($modal) => {
    closeModal($modal);
  });
}

// Add a click event on buttons to open a specific modal
(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
  const modal = $trigger.dataset.target;
  const $target = document.getElementById(modal);

  $trigger.addEventListener('click', () => {
    openModal($target);
  });
});

// Add a click event on various child elements to close the parent modal
(
  document.querySelectorAll(
    '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
  ) || []
).forEach(($close) => {
  const $target = $close.closest('.modal');

  $close.addEventListener('click', () => {
    closeModal($target);
  });
});

// Add a keyboard event to close all modals
document.addEventListener('keydown', (event) => {
  const e = event || window.event;

  if (e.keyCode === 27) {
    // Escape key
    closeAllModals();
  }
});



//

/*
 *Guardar Nueva persona
 */

const crearPersona = () => {
  //Obtengo los elementos del dom
  const nombre = $('#crearNombre').value;
  const fecha = new Date($('#crearFecha').value);
  const estadoCivil = $('#crearEstadoCivil').value;
  const preferencias = getOptionSelectedMultiple($('#crearPreferencias'));
  const id = generateId();

  //Creo el objeto a insertar
  const persona = {
    id,
    nombre,
    fecha,
    estadoCivil,
    preferencias,
  };
  personas.push(persona);
  updateDom();
};

$('#crearPersona').addEventListener('click', crearPersona);

/*
 *Editar Persona
 */

// Open edit Modal
// Debe abrir el modal y setear los datos en los inputs para mostrarlos
const openEditModal = (element) => {

  //primero obtenemos los datos de la persona que queremos Editar
  const id = element.dataset.id;
  const personaBuscar = personas.find((persona) => persona.id == id);

  //rellenamos los inputs
  $('#editNombre').value = personaBuscar.nombre;
  $('#editFecha').value = parseDateToString(personaBuscar.fecha);
  $('#editEstadoCivil').value = personaBuscar.estadoCivil;
  selectedMultplesOptions($('#editPreferencias'),personaBuscar.preferencias)
  $('#editId').value = personaBuscar.id;

  openModal($('#modal-edit'));
};

const saveEdit = () => {
  const nombre = $('#editNombre').value;
  const fecha = new Date($('#editFecha').value);
  const estadoCivil = $('#editEstadoCivil').value;
  const preferencias = getOptionSelectedMultiple($('#editPreferencias'));
  const id = $('#editId').value;

  //Creo el objeto a insertar
  const persona = {
    id,
    nombre,
    fecha,
    estadoCivil,
    preferencias,
  };

  const indecePersona = personas.findIndex(persona=>persona.id=id);
  personas[indecePersona]=persona
  updateDom();
  closeModal($('#modal-edit'));
};
$('#editPersona').addEventListener('click', saveEdit);

// Open delete Modal
const openDeleteModal = (element) => {

  //primero obtenemos los datos de la persona que queremos Editar
  const id = element.dataset.id;
  $('#deleteId').value = id;

  openModal($('#modal-delete'));
};

const saveDelete = () => {
  const id = $('#deleteId').value;
  const index = personas.findIndex(pensona=>pensona.id=id);
  console.log(index);
  if(index != -1){
    personas.splice(index, 1);
  }
  updateDom();
  closeModal($('#modal-delete'))
};
$('#deletePersona').addEventListener('click', saveDelete);


