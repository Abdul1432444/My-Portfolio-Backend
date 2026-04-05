import express from 'express';
import { getProjects, createProject } from '../controllers/project.controller.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', protect, createProject);

export default router;
