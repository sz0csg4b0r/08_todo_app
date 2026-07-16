TODO app base doc:

Resource/Model:

- todo:

  - id (uuid)
  - todo_txt (string)

Use cases:

- GET /todo         - todo-k lekérdezése
- GET /todo/:id      - egy todo lekérdezése id alapján
- PUT /todo         - egy új todo hozzáadása

  - id + todo_txt
- DELETE /todo:id   - egy todo törlése id alapján
- PATCH /todo:id    - egy todo módosítása id alapján

  - todo_txt
- POST /search      - todo szöveges keresése

  - search: bármilyen szöveg

---

Routing:
GET		/                   	lista oldal
GET		/todo            	üres hozzáadás form
POST	/todo            	mentés (új hozzáadás)
GET		/todo/:id       	módosítás form (előre kitöltjük)
POST	/todo/:id    	mentés (módosítás)
GET		/todo/:id   	törlés

Commands:

1. npm init
2. npm i express
3. npm i lokijs
4. npm i uuid ( **npm** uninstall uuid  -> **npm**install uuid@8) Latest verziók nem működnek require-rel.)

Structure:

- middleware dir: különböző routok működését biztosító mw-k
- route: base route
- servide: lokijs
