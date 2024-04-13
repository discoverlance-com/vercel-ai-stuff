export const APP_NAME = 'Discover AI Labs';

export const APP_LINKS = {
  dashboard: {
    label: 'Dashboard',
    path: '/',
    subLinks: [],
  },
  geminiAi: {
    label: 'Gemini AI',
    path: '/gemini-ai',
    subLinks: [
      {
        label: 'Todoist',
        path: '/gemini-ai/todoist',
      },
      {
        label: 'Time',
        path: '/gemini-ai#time',
      },
    ],
  },
  openAi: {
    label: 'Open AI',
    path: '/openai',
    subLinks: [
      {
        label: 'Todoist',
        path: '/openai/todoist',
      },
      {
        label: 'Time',
        path: '/openai#time',
      },
    ],
  },
  huggingFace: {
    label: 'Hugging Face',
    path: '/hugging-face',
    subLinks: [
      {
        label: 'Todoist',
        path: '/hugging-face/todoist',
      },
      {
        label: 'Time',
        path: '/hugging-face#time',
      },
    ],
  },
};
