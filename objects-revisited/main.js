const business = {
  opens: '9am',
  closes: '4pm',
  totalEmployees: 3,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    khanh: {
      position: 'JS',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    dan: {
      position: 'CSS',
      daysOfWeekWorking: ['T', 'W', 'Th'],
    },
    chris: {
      position: 'HTML',
      daysOfWeekWorking: ['T', 'Th', 'F'],
    },
  },
};

function addWeekends() {
  business.daysOpen = ['Su', ...business.daysOpen, 'S'];
  for (const x in business.employees) {
    business.employees[x].daysOfWeekWorking = [
      'Su',
      ...business.employees[x].daysOfWeekWorking,
      'S',
    ];
  }
}

const workDay = [];
const title = ['React.JS', 'MongoDB', 'Express', 'TypeScript'];
const numNew = 4;

function createSchedule() {
  const daysOpen = ['M', 'T', 'W', 'Th', 'F'];
  const schedule = [];
  for (let i = 0; i < numNew; i++) {
    schedule.push(Math.floor(Math.random() * 5 + 1));
  }
  for (let i = 0; i < numNew; i++) {
    workDay.push([]);
  }
  for (let i = 0; i < schedule.length; i++) {
    for (let k = 0; k < schedule[i]; k++) {
      const day = daysOpen[Math.floor(Math.random() * 4)];
      if (!workDay[i].includes(day)) {
        workDay[i].push(day);
      }
    }
  }
}

function checkFTUpdateTotal() {
  let total = 0;
  for (const x in business.employees) {
    business.employees[x].fullTime =
      business.employees[x].daysOfWeekWorking.length >= 5;
    total += 1;
  }
  business.totalEmployees = total;
}

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    createSchedule();
    for (let i = 0; i < numNew; i++) {
      let fullName = xhr.response[i].name.toLowerCase().split(' ');
      let firstName = fullName[0];
      business.employees[firstName] = {
        position: title[i],
        daysOfWeekWorking: ['Su', ...workDay[i], 'S'],
      };
    }
    checkFTUpdateTotal();
  });
  xhr.send();
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  checkFTUpdateTotal();
}

document.addEventListener('DOMContentLoaded', () => {
  addWeekends();
  addEmployees();
  deleteEmployee('ervin');
});
