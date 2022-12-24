const elements = [
  'mark',
  'angela',
  'jacob',
  'rizky',
  'kimberly',
  'nathan',
  'anna',
];

const notifications = elements.map(element => {
  return {
    id: element,
    section: document.querySelector(`div#${element}`),
    alert: document.querySelector(`div#${element} > div > h2 > span#alert`),
    state: true,
  };
});

const notificationCount = document.querySelector('section > p');

const buttonReadAll = document.querySelector('button#mark-all');

const getCant = () => Number(notificationCount.textContent);

const setCant = cant => {
  notificationCount.textContent = `${cant}`;
  if (cant === 0) {
    notificationCount.classList.add('bg-white');
    return;
  }
  notificationCount.classList.remove('bg-white');
};

const readAll = () => elements.forEach(element => setRead(element));

const setRead = element => {
  const elem = notifications.find(notification => notification.id === element);
  if (!elem.state) {
    return;
  }
  elem.state = false;
  elem.section.classList.add('bg-white');
  elem.alert.classList.add('bg-white');
  setCant(getCant() - 1);
};

const toggleRead = element => {
  const elem = notifications.find(notification => notification.id === element);
  if (!elem.state) {
    elem.state = true;
    elem.section.classList.remove('bg-white');
    elem.alert.classList.remove('bg-white');
    setCant(getCant() + 1);

    return;
  }
  elem.state = false;
  elem.section.classList.add('bg-white');
  elem.alert.classList.add('bg-white');
  setCant(getCant() - 1);
};

buttonReadAll.addEventListener('click', () => {
  readAll();
});

notifications.forEach(elem =>
  elem.section.addEventListener('click', () => {
    toggleRead(elem.id);
  }),
);

readAll();
toggleRead('mark');
toggleRead('angela');
toggleRead('jacob');
