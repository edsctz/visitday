interface ContactFormData {
  name: string;
  phone: string;
  neighborhood: string;
  message?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch('https://workflowwebhook.prospectz.com.br/webhook/c21-diavisitasintake', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      phone: data.phone,
      neighborhood: data.neighborhood,
      message: data.message || '',
      submittedAt: new Date().toISOString()
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  // Push form submission event to GTM
  window.dataLayer?.push({
    event: 'formSubmission',
    formType: 'diaVisitas',
    neighborhood: data.neighborhood,
  });
}
