/*




*/



// AnsWer : 

function passwordStrengthChecker(password) {
    if (password.length < 8) {
      return "Weak";
    }
  
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    return hasUpper && hasLower && hasDigit && hasSpecial ? "Strong" : "Weak";
  }
  
  // please don't remove this code
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const result = passwordStrengthChecker(input.trim());
    process.stdout.write(result);
  });
  // please don't remove the code above
  