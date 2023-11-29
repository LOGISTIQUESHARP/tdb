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
  /*graph*/
var options = {
    series: [{
      name: "NPL",
      data: [116, 127, 121, 150, 116]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
      
    },
    toolbar: {
      show: false,
  },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: [8],
  },
  markers: {
    size: 8,
},
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jul', 'Aug', 'Sep', 'oct', 'nov', 'dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-npl"), options);
  chart.render();


