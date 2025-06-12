import client from '../client.js';
import { Lead, LeadResponse } from '../types.js';

/**
 * Fetches the first lead matching the given email address.
 * @param email - The email of the lead to search for.
 * @returns The lead object or null if not found.
 */
export async function getLeadByEmail(email: string): Promise<Lead | null> {
    try {
        const response = await client.get<LeadResponse>('/people', {
            params: { email }
        });

        const people = response.data.people;
        return people.length > 0 ? people[0] : null;
    } catch (error: any) {
        console.error(`Failed to fetch lead for email ${email}:`, error.response?.data || error.message);
        return null;
    }
}