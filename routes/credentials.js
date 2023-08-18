import express from 'express';
import credentialsController from '../controllers/credentialsController';

const router = express.Router();
  
router.post('/login',
  credentialsController.authenticate()
);

export default router;

  
  
  
  
  