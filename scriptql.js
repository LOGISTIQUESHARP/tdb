const body = document.body;
const opensidebar = document.querySelector('#opensidebar');
const closeSidebar = document.querySelector('#closeSidebar');
const toggletheme = document.querySelector('.toggle-theme');
const sidebar = document.querySelector('.main-sidebar');
const light = toggletheme.children[0];
const dark = toggletheme.children[1];
const percentage = document.querySelectorAll('.percentage p');

opensidebar.addEventListener('click', () => {
    sidebar.style.left = '0%'
});

closeSidebar.addEventListener('click', () => {
    sidebar.style.left = '-100%'
});

toggletheme.addEventListener('click', changetheme)

function changetheme () {
   if (body.classList.contains('dark-mode')){
        lightmode()
   } else if (!body.classList.contains('dark-mode')){
        darkmode()
   }
}

if (window.matchMedia('prefers-color-scheme: dark').matches) {
    darkmode();
}

function lightmode() {
    body.classList.remove('dark-mode')
    light.classList.add('active')
    dark.classList.remove('active')
}

function darkmode() {
    body.classList.add('dark-mode')
    light.classList.remove('active')
    dark.classList.add('active')
}

percentage.forEach((e, i) => {
    let val = parseInt(e.textContent);
    console.log(val);
    let circle = document.getElementById(`circle${i + 1}`);
    let r = circle.getAttribute('r');
    let circ = Math.PI * 2 * r;
    let counter = 0;
    let fillValue = (circ * (100 - val)) / 100;
    setInterval(() => {
        if (counter === val) {
            clearInterval();
        } else {
            counter += 1;
            e.innerText = counter + '%';
            circle.style.strokeDashoffset = fillValue;
        }
    }, 1000 / val);
});
/* graph */
var mixedoptions = {
  series: [{
  name: 'INFO',
  type: 'column',
  data: [0, 10, 18, 18, 27]
}, {
  name: 'REPRO',
  type: 'column',
  data: [0, 0, 1, 3, 4]
}, 
],
  chart: {
  height: 350,
  stacked: false,
  toolbar: {
      show: false
  }
},
colors : ['var(--yellow)', 'var(--fuscha)'],

stroke: {
  width: [4, 4, 4, 4],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['juillet 2023', 'aout 2023', 'sept 2023', 'oct 2023', 'nov 2023', 'dec 2023', 'jan 2024',
  'fev 2024', 'mars2024', 'avril 2024', 'mai 2024', 'juin 2024'
],
markers: {
  size: 0
},
yaxis: {
  title: {
    text: 'Nombre de dossiers',
  },
  min: 0
},
tooltip: {
  shared: true,
  intersect: false,
}
};

var chartmixed = new ApexCharts(document.querySelector("#chart-ql"), mixedoptions);
chartmixed.render();
