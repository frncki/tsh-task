import fs from 'fs';
import path from 'path';

let db = {};
const dataFilePath = path.join(__dirname, '../data/db.json');

try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    db = JSON.parse(data);
} catch (err) {
    console.error(err);
}

export default db;