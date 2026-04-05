import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate inputs
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newContactMessage = new Contact({ name, email, message });
        await newContactMessage.save();

        res.status(201).json({ message: 'Message sent successfully. I will get back to you soon!' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const getMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error: error.message });
    }
};
