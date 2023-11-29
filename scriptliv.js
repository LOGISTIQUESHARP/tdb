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

/*graph livraisons*/ 
      
var mixedoptions = {
    series: [{
    name: 'TOTAL',
    type: 'column',
    data: [610, 646, 852,681, 706]
  }, {
    name: 'Nouméa',
    type: 'line',
    data: [297,	216, 379, 280, 318]
  }, {
    name: 'Grand nouméa',
    type: 'line',
    data: [313, 394, 334, 272, 301]
  }, {
    name: 'ADV',
    type: 'line',
     data: [0, 36, 139, 129, 87]
}
],
    chart: {
    height: 350,
    stacked: false,
    toolbar: {
        show: false
    }
  },
  colors : ['hsl(207, 64%, 48%)', 'hsl(40, 94%, 58%)', 'hsl(334, 94%, 57%)', '#42c3a7', , ],

  stroke: {
    width: [6, 6, 6, 6],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
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
      text: 'Points',
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
  }
  };

  var chartmixed = new ApexCharts(document.querySelector("#chart-area"), mixedoptions);
  chartmixed.render();
