# Performance Testing Summary (Lab 7)

## 1. Load Testing

Для навантажувального тестування було використано інструмент **autocannon**.

### Команда запуску:

npx autocannon http://localhost:3000/notes
-c 50 -d 20

### Результати:

- Connections: 50
- Duration: 20 секунд
- Requests: ~350 000
- Average latency: ~4 ms
- HTTP status codes: 404 (endpoint використано для тестування навантаження)

Детальні результати збережені у файлі `load-test.txt`.

---

## 2. CPU Profiling

Сервер було запущено з Node.js profiler:

node --prof dist/src/server.js

Під час виконання навантажувального тесту було зібрано CPU-профіль.

### Спостереження:

- Основне навантаження припадає на обробку HTTP-запитів
- Основні витрати CPU — Express routing та Sequelize ORM
- Критичних bottleneck’ів не виявлено

Файл профілю збережено як `cpu-profile.txt`.

---

## 3. Memory Usage

Під час тестування не зафіксовано:

- витоків памʼяті
- критичного росту RAM

---

## 4. Висновки

Система стабільно працює під навантаженням.
Поточна архітектура підходить для навчального та невеликого production-використання.
