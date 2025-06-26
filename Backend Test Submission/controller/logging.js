const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secret123';

exports.register = async (req, res) => {
    try {
        const { user, password } = req.body;
        const isExist = users.find(u => u.user === user);
        if (isExist) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({ user, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully' });
        next();
    } catch (err) {
        next(err);
    }
}

exports.login = async(req,res) => {
    const { user, password } = req.body;
    const userName = users.find(u => u.user === user);
    if (!userName) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, userName.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ user }, SECRET_KEY,{ credentials : '30m'});
    res.status(200).json({ token });
}

exports.sample = (req, res) => {
    res.status(200).json({ message: 'Sample route' });
}