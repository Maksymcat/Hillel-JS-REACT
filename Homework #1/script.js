function printMultiplicationTable(n) {
  // Перевірка, що n - це ціле число і більше 1
  if (!Number.isInteger(n) || n < 1) {
      console.log('Введіть ціле число більше 0');
      return;
  }
  
  // Виведення заголовка таблиці
  console.log(`Таблиця Піфагора для чисел від 1 до ${n}:`);
  
  // Виведення заголовку першого рядка (заголовки стовпців)
  let headerRow = '   ';
  for (let i = 1; i <= n; i++) {
      headerRow += `${i.toString().padEnd(4)}`;
  }
  console.log(headerRow);
  
  // Виведення таблиці
  for (let i = 1; i <= n; i++) {
      let row = `${i.toString().padEnd(2)} `;
      for (let j = 1; j <= n; j++) {
          row += `${(i * j).toString().padEnd(4)}`;
      }
      console.log(row);
  }
}

// Приклад виклику функції для виведення таблиці Піфагора для чисел від 1 до 10
printMultiplicationTable(10);

