// Shared TypeScript interfaces for Follow Up Boss entities used across the connector

export interface Lead {
    id: number;
    firstName: string;
    lastName: string;
    emails?: {
        value: string;
        type: string;
    }[];
    phone?: string;
    tags?: string[];
    stage?: string;
    source?: string;
    assignedTo?: {
        id: number;
        name: string;
    };
    created?: string;
    updated?: string;
}

export interface LeadResponse {
    people: Lead[];
    total: number;
}