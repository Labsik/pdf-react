const API = 'http://95.217.134.12:4010/create-pdf?apiKey=78684310-850d-427a-8432-4a6487f6dbc4'

export const convertToPdf = async (text: string): Promise<string> => {
  try {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Failed to convert text to PDF: ${response.statusText}`);
    }

    // Convert the response to a Blob (binary data)
    const blob = await response.blob();

    // Create a URL for the Blob
    const pdfUrl = URL.createObjectURL(blob);

    return pdfUrl;
  } catch (error) {
    console.error('Error during API call:', error);
    throw new Error('Failed to convert text to PDF.');
  }
};
