const users = {
    "1": { name: "Билл Гейтс", bio: "Создатель Windows", avatar: "https://..." },
    "2": { name: "Стив Джобс", bio: "Основатель Apple", avatar: "https://..." },
    "3": { name: "Джон Кармак", bio: "Разработчик Doom", avatar: "https://..." },
}

export default function handler(req, res) {
    const { id } = req.query;
    res.status(200).json(users[id]);
}
