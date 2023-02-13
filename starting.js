const text = [
  '.....................................................\n',
  'Добро пожаловать на мой сайт-резюме в стиле терминала!\n',
  'Введите help для вывода команд\n',
  '\n',
];

let line = 0;
let count = 0;
let result = '';

function typeLine() {
  let interval = setTimeout(() => {
    result += text[line][count];
    document.querySelector('pre').innerHTML = result + '|';

    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      if (line == text.length) {
        clearTimeout(interval);
        document.querySelector('pre').innerHTML = result;
        return true;
      }
    }
    typeLine();
  });
}
typeLine();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let input = document.querySelector('#input');
let focus = document.querySelector('#focus');

focus.addEventListener('click', function () {
  input.focus();
});

(function () {
  document.querySelector('input').addEventListener('keydown', function (e) {
    if (e.keyCode === 13 && this.value.trim() == 'about') {
      let label = document.getElementById('parent').parentNode;
      let div1 = document.createElement('div');
      let username = 'guest@terminal:$ ~ ';
      div1.innerHTML = username + this.value;
      document.body.insertBefore(div1, label);
      let aboutTextСontent = document.createElement('div');
      const aboutText = [
        'Симонов Никита, junior frontend developer.Если Вы читаете это, то, скорее всего, ищете веб-разработчика в свою команду. Мой стек это JS, React, Typescript',
        'но так же в планах учить и другие фреймворки (в приоритете Vue). Мне 28 лет, территориально проживаю в Москве, удаленка или офис для меня не принципиально.',
      ];
      aboutTextСontent.className = 'msg';
      aboutTextСontent.innerHTML = aboutText;
      document.body.insertBefore(aboutTextСontent, label);
      this.value = '';
    }
    if (e.keyCode === 13 && this.value.trim() == 'email') {
      let label = document.getElementById('parent').parentNode;
      let div1 = document.createElement('div');
      let username = 'guest@terminal:$ ~ ';
      div1.innerHTML = username + this.value;
      document.body.insertBefore(div1, label);
      let aboutTextСontent = document.createElement('div');
      const aboutText = ['email: simonovv1922@yandex.ru'];
      aboutTextСontent.className = 'msg';
      aboutTextСontent.innerHTML = aboutText;
      document.body.insertBefore(aboutTextСontent, label);
      this.value = '';
    }
    if (e.keyCode === 13 && this.value.trim() == 'github') {
      let label = document.getElementById('parent').parentNode;
      let div1 = document.createElement('div');
      let username = 'guest@terminal:$ ~ ';
      div1.innerHTML = username + this.value;
      document.body.insertBefore(div1, label);
      let aboutTextСontent = document.createElement('div');
      const aboutText = ['https://github.com/Ax3rr'];
      aboutTextСontent.className = 'msg';
      aboutTextСontent.innerHTML = aboutText;
      document.body.insertBefore(aboutTextСontent, label);
      this.value = '';
    }
    if (e.keyCode === 13 && this.value.trim() == 'date') {
      let label = document.getElementById('parent').parentNode;
      let div1 = document.createElement('div');
      let username = 'guest@terminal:$ ~ ';
      div1.innerHTML = username + this.value;
      document.body.insertBefore(div1, label);
      let aboutTextСontent = document.createElement('div');
      const aboutText = new Date();
      aboutTextСontent.className = 'msg';
      aboutTextСontent.innerHTML = aboutText;
      document.body.insertBefore(aboutTextСontent, label);
      this.value = '';
    }

    if (e.keyCode === 13 && this.value.trim() == 'help') {
      let label = document.getElementById('parent').parentNode;
      let div1 = document.createElement('div');
      let username = 'guest@terminal:$ ~ ';
      div1.innerHTML = username + this.value;
      document.body.insertBefore(div1, label);
      let aboutTextСontent = document.createElement('div');
      const aboutText = ['Доступные команды : date , clear, github , email , about, weather, social'];
      aboutTextСontent.className = 'msg';
      aboutTextСontent.innerHTML = aboutText;
      document.body.insertBefore(aboutTextСontent, label);
      this.value = '';
    }

    if (e.keyCode === 13 && this.value.trim() == 'weather') {
      let weather = fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=55.7522&lon=37.6156&appid=db5331448be68dd8c38047266a249ab3',
      )
        .then(function (resp) {
          return resp.json();
        }) // data to json
        .then(function (data) {
          console.log(data);
          let temp = Math.trunc(data.main.temp - 273.15);
          document.body.insertBefore(div1, label);
          let aboutTextСontent = document.createElement('div');
          const aboutText = [`Температура в Москве: ${temp} °C`];
          aboutTextСontent.className = 'msg';
          aboutTextСontent.innerHTML = aboutText;
          document.body.insertBefore(aboutTextСontent, label);
        });

      let label = document.getElementById('parent').parentNode;
      let div1 = document.createElement('div');
      let username = 'guest@terminal:$ ~ ';
      div1.innerHTML = username + this.value;
      this.value = '';
    }

    if (e.keyCode === 13 && this.value.trim() == 'sudo') {
      let label = document.getElementById('parent').parentNode;
      let div1 = document.createElement('div');
      let username = 'guest@terminal:$ ~ ';
      div1.innerHTML = username + this.value;
      document.body.insertBefore(div1, label);
      let aboutTextСontent = document.createElement('div');
      const aboutText = ['Ого! Ты мог найти пасхалку, поздравляю! Награда - респект на районе.'];
      aboutTextСontent.className = 'msg';
      aboutTextСontent.innerHTML = aboutText;
      document.body.insertBefore(aboutTextСontent, label);
      this.value = '';
    }

    if (e.keyCode === 13 && this.value.trim() == 'social') {
      let label = document.getElementById('parent').parentNode;
      let div1 = document.createElement('div');
      let username = 'guest@terminal:$ ~ ';
      div1.innerHTML = username + this.value;
      document.body.insertBefore(div1, label);
      let aboutTextСontent = document.createElement('div');
      const aboutText = ['https://vk.com/ax3rr'];
      aboutTextСontent.className = 'msg';
      aboutTextСontent.innerHTML = aboutText;
      document.body.insertBefore(aboutTextСontent, label);
      this.value = '';
    }

    if (e.keyCode === 13 && this.value.trim() == 'clear') {
      window.location.href = 'cleanpage.html';
    }


    if (e.keyCode === 13 && !this.value == ['']) {
      let label = document.getElementById('parent').parentNode;
      let div1 = document.createElement('div');
      let username = 'guest@terminal:$ ~ ';
      div1.innerHTML = username + this.value;
      document.body.insertBefore(div1, label);
      let aboutTextСontent = document.createElement('div');
      const aboutText = 'Ошибка. Введите help для просмотра доступных команд';
      aboutTextСontent.className = 'msg';
      let message = document.querySelector('.msg');
      aboutTextСontent.innerHTML = aboutText;
      document.body.insertBefore(aboutTextСontent, label);
      this.value = '';
      
    }
  });
})();
