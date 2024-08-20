// index.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 数据库连接配置
const dbConfig = {
    host: 'localhost',
    user: 'root', // 替换为您的MySQL用户名
    password: '931382611', // 替换为您的MySQL密码
    database: 'UserDB'
};

// 创建数据库连接池
const pool = mysql.createPool(dbConfig);

// 连接数据库
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was lost.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        throw err;
    }
    console.log('MySQL connected...');
});

// 使用bodyParser中间件解析表单数据
app.use(bodyParser.urlencoded({ extended: true }));

// 创建API端点来接收用户信息
app.post('/api/users', (req, res) => {
    const { username, user_id } = req.body;

    // 插入数据到数据库
    const sql = 'INSERT INTO users (username, user_id) VALUES (?, ?)';
    pool.query(sql, [username, user_id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        }
        res.send({ message: 'User added successfully', result });
    });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// 设置静态文件目录
app.use(express.static('public'));

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});