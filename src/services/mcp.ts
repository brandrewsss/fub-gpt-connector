import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { searchPeople, getPersonDetails, searchDeals, Deal, Person } from "../lib/fub.js";

const server = new McpServer({
    name: "Follow Up Boss Connector",
    version: "1.0.0",
});

server.tool(
  "search",
  {
    description: "Search for leads in Follow Up Boss",
    parameters: z.object({
      lead: z.string().describe("The name, email, or phone to search leads by")
    })
  },
  async ({ lead }) => {
    const people = await searchPeople(lead);
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            people.map((person) => ({
              id: person.id,
              name: person.name,
              email: person.email,
              phone: person.phone,
            })),
            null,
            2
          )
        }
      ]
    };
  }
);

server.tool(
  "fetch",
  {
    description: "Fetch detailed information about a person from Follow Up Boss by ID",
    parameters: z.object({
      id: z.string().describe("The ID of the person to retrieve details for")
    })
  },
  async ({ id }) => {
    const person = await getPersonDetails(id);
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(person, null, 2)
        }
      ]
    };
  }
);

    
const transport = new StdioServerTransport();
await server.connect(transport);