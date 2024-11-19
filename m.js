//1
const car = {
    manufacturer: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    averageSpeed: 120, 
  
    displayInfo() {
      console.log(`Producer: ${this.manufacturer}`);
      console.log(`Model: ${this.model}`);
      console.log(`Release year: ${this.year}`);
      console.log(`Average speed: ${this.averageSpeed} км/год`);
    },
  
    calculateTime(distance) {
      const travelTime = distance / this.averageSpeed; 
      const restTime = Math.floor(travelTime / 4);
      const totalTime = travelTime + restTime;
      console.log(`To overcome${distance} km will take approx ${totalTime.toFixed(2)} hours.`);
    }
  };
  
  car.displayInfo();
  car.calculateTime(450);
  
  //2
  const fraction1 = { numerator: 3, denominator: 4 };
const fraction2 = { numerator: 5, denominator: 6 };

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function simplifyFraction(fraction) {
  const divisor = gcd(fraction.numerator, fraction.denominator);
  return {
    numerator: fraction.numerator / divisor,
    denominator: fraction.denominator / divisor,
  };
}

function addFractions(f1, f2) {
  const numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
  const denominator = f1.denominator * f2.denominator;
  return simplifyFraction({ numerator, denominator });
}

function subtractFractions(f1, f2) {
  const numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
  const denominator = f1.denominator * f2.denominator;
  return simplifyFraction({ numerator, denominator });
}

function multiplyFractions(f1, f2) {
  const numerator = f1.numerator * f2.numerator;
  const denominator = f1.denominator * f2.denominator;
  return simplifyFraction({ numerator, denominator });
}

function divideFractions(f1, f2) {
  const numerator = f1.numerator * f2.denominator;
  const denominator = f1.denominator * f2.numerator;
  return simplifyFraction({ numerator, denominator });
}

console.log("Addition:", addFractions(fraction1, fraction2));
console.log("Subtraction:", subtractFractions(fraction1, fraction2));
console.log("Multiplication:", multiplyFractions(fraction1, fraction2));
console.log("Division:", divideFractions(fraction1, fraction2));

//3
const time = {
    hours: 20,
    minutes: 30,
    seconds: 45,
  
    displayTime() {
      console.log(`${String(this.hours).padStart(2, "0")}:${String(this.minutes).padStart(2, "0")}:${String(this.seconds).padStart(2, "0")}`);
    },
  
    addSeconds(sec) {
      const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + sec;
      this.hours = Math.floor(totalSeconds / 3600) % 24;
      this.minutes = Math.floor((totalSeconds % 3600) / 60);
      this.seconds = totalSeconds % 60;
      this.displayTime();
    },
  
    addMinutes(min) {
      this.addSeconds(min * 60);
    },
  
    addHours(hrs) {
      this.addSeconds(hrs * 3600);
    }
  };
  
  time.displayTime();
  time.addSeconds(30); 
  time.addMinutes(45);
  time.addHours(5); 
  
