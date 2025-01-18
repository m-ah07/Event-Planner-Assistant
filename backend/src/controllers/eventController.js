const Event = require("../models/Event");

exports.getAllEvents = async (req, res) => {
  try {
    const userId = req.userId;

    const events = await Event.find({ userId });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findOne({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const newEvent = new Event({
      title,
      date,
      description,
      userId: req.userId, // من التوكن JWT
    });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { title, date, description },
      { new: true }
    );
    if (!updatedEvent)
      return res.status(404).json({ message: "Event not found" });
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!deletedEvent)
      return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
