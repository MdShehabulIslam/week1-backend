function greet(name) {
  return `Hey ${name}! Welcome to TechNest Backend Engineering.`;
}

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

function formatCurrency(amount) {
  if (typeof amount !== "number") throw new Error("Amount must be a number");
  return `R ${amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
}

module.exports = { greet, calculateAge, formatCurrency };
