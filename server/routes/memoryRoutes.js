const express = require('express');
const router = express.Router();
const { getMemory, updatePreferences, clearMemory } = require('../controllers/memoryController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/', getMemory);
router.put('/preferences', updatePreferences);
router.delete('/', clearMemory);

module.exports = router;
