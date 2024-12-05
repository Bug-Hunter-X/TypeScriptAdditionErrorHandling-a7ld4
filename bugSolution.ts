function add(a: number, b: number): number {
  return a + b;
}

function addString(a: number, b: string): string {
  return String(a) + b; 
}

const result1 = add(1, 2); // Correct: No error
const result2 = addString(1, '2'); // Correct: No error