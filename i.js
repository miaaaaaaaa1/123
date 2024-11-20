//1
class Marker {
    constructor(color, inkLevel) {
      this.color = color; 
      this.inkLevel = inkLevel;
    }
  
    printText(text) {
      let output = '';
      for (let char of text) {
        if (this.inkLevel <= 0) break;
        if (char.trim()) {
          this.inkLevel -= 0.5; 
        }
        output += char;
      }
      console.log(`%c${output}`, `color: ${this.color}`);
      console.log(`Remaining ink: ${this.inkLevel.toFixed(2)}%`);
    }
  }
  
  class RefillableMarker extends Marker {
    refill() {
      this.inkLevel = 100;
      console.log('The marker is filled to 100% ink.');
    }
  }
  
  const marker = new Marker('blue', 10);
  marker.printText('This is printable text.');
  const refillableMarker = new RefillableMarker('red', 5);
  refillableMarker.printText('Refillable marker printing test.');
  refillableMarker.refill();
  refillableMarker.printText('The marker is filled.');

  //2
  class ExtendedDate extends Date {
    toText() {
      const months = [
     'January', 'February', 'March', 'April', 'May', 'June',
 'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return `${this.getDate()} ${months[this.getMonth()]}`;
    }
  
    isFutureOrToday() {
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
      return this >= today;
    }
  
    isLeapYear() {
      const year = this.getFullYear();
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
  
    nextDate() {
      return new ExtendedDate(this.getFullYear(), this.getMonth(), this.getDate() + 1);
    }
  }
  
  const date = new ExtendedDate(2024, 10, 20);
  console.log(`Text date: ${date.toText()}`);
  console.log(`Future or current date: ${date.isFutureOrToday()}`);
  console.log(`Leap year: ${date.isLeapYear()}`);
  console.log(`Next date:${date.nextDate().toText()}`);
  
  //3
  class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  }
  
  class EmpTable {
    constructor(employees) {
      this.employees = employees;
    }
  
    getHtml() {
      let html = '<table border="1">\n<tr><th>Name</th><th>Position</th><th>Salary</th></tr>\n';
      for (let emp of this.employees) {
        html += `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.salary}</td></tr>\n`;
      }
      html += '</table>';
      return html;
    }
  }
  
  const employees = [
    new Employee(),
    new Employee(),
    new Employee(),
  ];
  const table = new EmpTable(employees);
  console.log(table.getHtml());
  
  //4
  class StyledEmpTable extends EmpTable {
    getStyles() {
      return `
        <style>
          table {
            width: 50%;
            border-collapse: collapse;
            margin: 10px 0;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      `;
    }
  
    getHtml() {
      return this.getStyles() + super.getHtml();
    }
  }
  
  const styledTable = new StyledEmpTable(employees);
  console.log(styledTable.getHtml());
  