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
/*anomalies par services */
var options = {
    series: [1, 3, 3, 14, 2, 8],
    chart: {
    width: 700,
    type: 'pie',
    position: 'center',
  },
  colors : ['hsl(207, 64%, 48%)', 'hsl(40, 94%, 58%)', 'hsl(334, 94%, 57%)', '#42c3a7', 'hsl(0.3turn 60% 45% / .7)', 'hsl(150deg 30% 60%)'],
  labels: ['compta','logistique', 'optimium', 'repro', 'SAV repro', 'OL'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };
/* nombre anomalies */
  var chart = new ApexCharts(document.querySelector("#chart-bits"), options);
  chart.render();

  var options = {
    series: [6, 1, 6, 5, 1, 9, 1, 1],
    chart: {
    width: 800,
    type: 'pie',
    position: 'center',
  },
  colors : ['hsl(207, 64%, 48%)', 'hsl(40, 94%, 58%)', 'hsl(334, 94%, 57%)', '#42c3a7', 'hsl(0.3turn 60% 45% / .7)', 'hsl(150deg 30% 60%)', 'hsl(195,100%,50%)', 'hsl(300,100%,25%)'],
  labels: ['adresse', 'disfonctionnement info', 'informations', 'relance', 'contact', 'non respect des procedures', 'anticipation', 'erreur prepa'], 
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart-ano"), options);
  chart.render();

 