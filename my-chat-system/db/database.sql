-- 创建数据库
CREATE DATABASE IF NOT EXISTS UserManagement;
USE UserManagement;

-- 创建用户表，存储基本信息
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    avatar_url VARCHAR(255), -- 存储头像的URL
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建用户历史使用信息表
CREATE TABLE IF NOT EXISTS user_history (
    history_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    activity VARCHAR(255),
    activity_time TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 创建用户充值情况表
CREATE TABLE IF NOT EXISTS user_recharges (
    recharge_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2), -- 金额最多有10位数字，2位小数
    recharge_time TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 插入示例数据到用户表
INSERT INTO users (username, avatar_url) VALUES
('Alice', 'https://example.com/avatar/alice.jpg'),
('Bob', 'https://example.com/avatar/bob.jpg');

-- 插入示例数据到用户历史使用信息表
INSERT INTO user_history (user_id, activity, activity_time) VALUES
(1, 'Logged in', '2024-08-13 10:00:00'),
(2, 'Purchased an item', '2024-08-13 11:00:00');

-- 插入示例数据到用户充值情况表
INSERT INTO user_recharges (user_id, amount, recharge_time) VALUES
(1, 100.00, '2024-08-13 10:30:00'),
(2, 200.00, '2024-08-13 12:00:00');