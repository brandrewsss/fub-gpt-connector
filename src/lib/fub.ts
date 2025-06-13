import dotenv from "dotenv";
dotenv.config();

export type Person = {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    stage?: string;
    tags?: string[];
    notes?: string;
};

export type Deal = {
    id: string;
    name: string;
    stage?: string;
    value?: number;
};

const FUB_API_KEY = process.env.FUB_API_KEY!;
const BASE_URL = "https://api.followupboss.com/v1";

const headers = {
    Authorization: `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString("base64")}`,
};

export async function searchPeople(query: string): Promise<Person[]> {
    const res = await fetch(`${BASE_URL}/people?query=${encodeURIComponent(query)}`, { headers });
    const data = await res.json();

    return (data.people || []).map((person: any): Person => ({
        id: person.id,
        name: `${person.firstName} ${person.lastName}`,
        email: person.primaryEmail,
        phone: person.primaryPhone,
    }));
}

export async function getPersonDetails(id: string): Promise<Person> {
    const res = await fetch(`${BASE_URL}/people/${id}`, { headers });
    const person = await res.json();

    return {
        id: person.id,
        name: `${person.firstName} ${person.lastName}`,
        email: person.primaryEmail,
        phone: person.primaryPhone,
        stage: person.stage,
        tags: person.tags,
        notes: person.description || "",
    };
}

export async function searchDeals(query: string): Promise<Deal[]> {
    const res = await fetch(`${BASE_URL}/deals`, { headers });
    const data = await res.json();

    return (data.deals || [])
        .filter((deal: any) =>
            deal.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((deal: any): Deal => ({
            id: deal.id,
            name: deal.name,
            stage: deal.stage,
            value: deal.price,
        }));
}