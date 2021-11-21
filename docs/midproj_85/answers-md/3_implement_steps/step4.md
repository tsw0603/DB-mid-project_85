#### 4.models/category_85 及 utils/database

- category

```
const db = require('../utils/database');

const Category_85 = class Category_85 {
  constructor(id, name_cn, name_en, type, Subcategory, url) {
    this.id = id;
    this.name_cn = name_cn;
    this.name_en = name_en;
    this.type = type;
    this.Subcategory = Subcategory;
    this.url = url;
  }
  //get all categories
  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * from OtherDrinks`);
      console.log('results', JSON.stringify(results.rows));
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }
};

// const test = async () => {
//   let results = await Category_85.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// };

// test();
module.exports = Category_85;
```

---

- database

```
const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

let pool;

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '0000',
    port: '5432',
  });
}
```

![](https://i.imgur.com/QFD14lF.png)
