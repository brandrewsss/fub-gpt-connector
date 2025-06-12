import { Router, Request, Response } from 'express';
import { getLeadByEmail } from '../services/fub.js';

const router = Router();

router.get('/', async (req: Request<{}, {}, {}, { email?: string }>, res: Response) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ error: 'Missing email query parameter' });

  try {
    const lead = await getLeadByEmail(email);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    res.json(lead);
  } catch (error) {
    console.error('Error fetching lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
