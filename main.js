// 1
const name = prompt("What's your name?");
alert(`Hello, ${name}!`);

// 2
const birthYear = +prompt("Enter your year of birth:");
const currentYear = 2024;
const age = currentYear - birthYear;
alert(`You are ${age} years old.`);

// 3
const squareSide = +prompt("Enter the length of the side of the square:");
const perimeter = squareSide * 4;
alert(`Perimeter of the square: ${perimeter}`);

// 4
const radius = +prompt("Enter the radius of the circle:");
const area = Math.PI * radius ** 2;
alert(`Circle area: ${area.toFixed(2)}`);

// 5
const distance = +prompt("Enter the distance between cities (in km):");
const time = +prompt("How many hours do you want to get there?");
const speed = distance / time;
alert(`You need to move with speed ${speed.toFixed(2)} km/h.`);

// 6
const dollars = +prompt("Enter the dollar amount:");
const exchangeRate = 0.95;
const euros = dollars * exchangeRate;
alert(`Amount in euros: ${euros.toFixed(2)}`);

// 7
const flashDriveSizeGB = +prompt("Enter the volume of the flash drive in GB:");
const fileSizeMB = 820;
const flashDriveSizeMB = flashDriveSizeGB * 1024; 
const fileCount = Math.floor(flashDriveSizeMB / fileSizeMB);
alert(`It will fit on a flash drive ${fileCount} files with a size of 820 MB.`);

// 8
const money = +prompt("Enter the amount of money in the wallet:");
const chocolatePrice = +prompt("Enter the cost of one chocolate bar:");
const chocolateCount = Math.floor(money / chocolatePrice);
const change = money % chocolatePrice;
alert(`you can buy ${chocolateCount} chocolates There will be a transfer: ${change.toFixed(2)} UAH`);

// 9
const number = +prompt("Enter a three-digit number:");
const reversedNumber = 
  (number % 10) * 100 + 
  (Math.floor(number / 10) % 10) * 10 + 
  Math.floor(number / 100);
alert(`Palindrome number: ${reversedNumber}`);

// 10
const integer = +prompt("Enter an integer:");
alert(integer % 2 === 0 ? "Even" : "Odd");
