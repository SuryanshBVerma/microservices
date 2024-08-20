const path = require('path');
const fs = require('fs-extra');
const Media = require('../models/media');

const uploadMedia = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const { filename, path: filePath, mimetype, size } = req.file;

    const newMedia = new Media({
      filename,
      path: filePath,
      mimetype,
      size,
    });

    await newMedia.save();
    res.status(201).json(newMedia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: 'Media not found' });

    res.sendFile(path.resolve(media.path));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: 'Media not found' });

    await fs.remove(media.path);
    await media.remove();

    res.status(200).json({ message: 'Media deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadMedia,
  getMedia,
  deleteMedia,
};
