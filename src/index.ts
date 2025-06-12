// Entry point for the connector
import client from './client.js';
import { getLeadByEmail } from './services/fub.js';

async function authentication() {
    try {
        await client.get('/events?limit=1');
    } catch (error: any) {
        console.error('Authentication failed:', error.response?.data || error.message);
    }
}

authentication();

async function testLeadLookup() {
    const email = 'brandrewsss@gmail.com'
    const lead = await getLeadByEmail(email);
    if (lead) {
        console.log(`Lead found: ${lead.firstName} ${lead.lastName} (${lead.emails?.[0]?.value || 'No email found'})`);
    } else {
        console.log(`No lead found for email: ${email}`);
    }
}

testLeadLookup();
