const ventas = [
  // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
  {
    id: 1,
    fecha: new Date(2019, 1, 4),
    nombreVendedora: 'Grace',
    sucursal: 'Centro',
    componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
  },
  {
    id: 2,
    fecha: new Date(2019, 0, 1),
    nombreVendedora: 'Ada',
    sucursal: 'Centro',
    componentes: ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
  },
  {
    id: 3,
    fecha: new Date(2019, 0, 2),
    nombreVendedora: 'Grace',
    sucursal: 'Caballito',
    componentes: ['Monitor ASC 543', 'Motherboard MZI'],
  },
  {
    id: 4,
    fecha: new Date(2019, 0, 10),
    nombreVendedora: 'Ada',
    sucursal: 'Centro',
    componentes: ['Monitor ASC 543', 'Motherboard ASUS 1200'],
  },
  {
    id: 5,
    fecha: new Date(2019, 0, 12),
    nombreVendedora: 'Grace',
    sucursal: 'Caballito',
    componentes: ['Monitor GPRS 3000'],
  },
  {
    id: 6,
    fecha: new Date(2019, 0, 12),
    nombreVendedora: 'Grace',
    sucursal: 'Centro',
    componentes: ['Monitor GPRS 3000'],
  }
];

const articulos = [
  { item: 'Monitor GPRS 3000', precio: 200 },
  { item: 'Motherboard ASUS 1500', precio: 120 },
  { item: 'Monitor ASC 543', precio: 250 },
  { item: 'Motherboard ASUS 1200', precio: 100 },
  { item: 'Motherboard MZI', precio: 30 },
  { item: 'HDD Toyiva', precio: 90 },
  { item: 'HDD Wezter Dishital', precio: 75 },
  { item: 'RAM Quinston', precio: 110 },
  { item: 'RAM Quinston Fury', precio: 230 },
];

const precioComponente = (articulo) => {
  for (const componente of articulos) {
    if (articulo == componente.item) {
      return componente.precio;
    }
  }
};

const precioMaquina = (componentesVendidos) => {
  let total = 0;
  for (const componente of componentesVendidos) {
    total += precioComponente(componente);
  }
  return total;
};

/* DOM */
/* Modal Bulma */
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
  console.log($target);
  //trigger es el boton
  $trigger.addEventListener('click', () => {
    //$target es el id modal
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

/* UTILS */
const $ = (element) => document.querySelector(element);
const $$ = (element) => document.querySelectorAll(element);

const getOptionSelectedMultiple = (select) => {
  const result = [];
  const options = select && select.options;

  for (const option of options) {
    if (option.selected) {
      result.push(option.value);
    }
  }
  return result;
};

const parseDateToStringDom = (date) => {
  // 25 025 -> 25
  // 3 03 -> 03
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  return `${day}/${month}/${date.getFullYear()}`;
};

const generateId = () => Math.floor(Math.random() * 10000);

/* Variables */
const tablaVenta = $('#tablaVenta');
const infoCartel = $('#infoCartel');

const renderTablaVentas = () => {
  let aux = '';
  for (const venta of ventas) {
    aux += `<tr>
    <td>${venta.nombreVendedora}</td>
    <td>${parseDateToStringDom(venta.fecha)}</td>
    <td>${venta.sucursal}</td>
    <td>${venta.componentes.join()}</td>
    <td>${precioMaquina(venta.componentes)}</td>
    <td>
      <button class="button is-warning" onclick="openEditModal(${venta.id})">Editar</button>
      <button class="button is-danger">Borrar</button>
    </td>
    </tr>`;
  }

  tablaVenta.innerHTML = aux;
};

const renderInfoCartel = () => {
  infoCartel.innerHTML = ventas.length;
};

const updateDom = () => {
  renderTablaVentas();
  renderInfoCartel();
};

$('#crearVenta').addEventListener('click', () => {
  const nombreVendedora = $('#crearNombre').value;
  const fecha = new Date($('#crearFecha').value);
  const sucursal = $('#crearSucursal').value;
  const componentes = getOptionSelectedMultiple($('#crearComponentes'));
  const id = generateId();

  const venta = {
    id,
    nombreVendedora,
    fecha,
    sucursal,
    componentes,
  };

  ventas.push(venta);
  updateDom();

});

const openEditModal = (id) =>{
  venta = ventas.find(venta => venta.id === id);
  $('#editarNombre').value = venta.nombreVendedora;
  // $('#crearFecha').value;
  $('#editarSucursal').value = venta.sucursal;
  
  openModal($("#modal-edit"));
}


const init = () => {
  updateDom();
};

init();
