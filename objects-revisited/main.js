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

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    const daysOpen = ['M', 'T', 'W', 'Th', 'F'];
    const numNew = 4;
    const title = ['React.JS', 'MongoDB', 'Express', 'TypeScript'];
    const schedule = [];
    for (let i = 0; i < numNew; i++) {
      schedule.push(Math.floor(Math.random() * 5 + 1));
    }
    const workDay = [];
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
    for (let i = 0; i < numNew; i++) {
      business.employees[xhr.response[i].name] = {
        position: title[i],
        daysOfWeekWorking: ['Su', ...workDay[i], 'S'],
      };
    }
    let total = 0;
    for (const x in business.employees) {
      business.employees[x].fullTime =
        business.employees[x].daysOfWeekWorking.length >= 5;
      total += 1;
    }
    business.totalEmployees = total;
  });
  xhr.send();
}

function deleteEmployee(employeeName) {
  console.log('business obj:', business);
  // business.totalEmployees = business.totalEmployees - 1;
  console.log('employee obj', business.employees[employeeName]);
  delete business.employees[employeeName];
}

document.addEventListener('DOMContentLoaded', () => {
  addWeekends();
  addEmployees();
  deleteEmployee('dan');
  // console.log('business:', business);
});
