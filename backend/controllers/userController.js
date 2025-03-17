const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const users = [];

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Заполните все поля" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "Пользователь зарегистрирован" });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Неверные учетные данные" });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Вход выполнен", token });
};

const getUserProfile = (req, res) => {
  res.json({ message: "Профиль пользователя", user: req.user });
};

module.exports = { registerUser, loginUser, getUserProfile };
