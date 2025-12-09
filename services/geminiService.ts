import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateJobDescription = async (
  role: string,
  location: string,
  salary: string,
  requirements: string
): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      Act as a professional HR recruiter for the hospitality industry in India.
      Write a compelling and professional WhatsApp job post for a restaurant position.
      
      Details:
      - Role: ${role}
      - Location: ${location}
      - Salary Budget: ${salary}
      - Specific Requirements: ${requirements}
      
      Format the output with emojis, clear bullet points, and a professional tone suitable for sharing on WhatsApp groups.
      Include a placeholder for "Contact: [Insert Your Number]" at the end.
      Keep it concise but attractive to candidates.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Could not generate description. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate job description.");
  }
};