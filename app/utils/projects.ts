export type Project = {
  name: string
  githubUrl?: string
  dates: string
  description: string
}

export const projects: Project[] = [
    {
        name: 'ProofWrite',
        githubUrl: 'https://github.com/anton-3/proofwrite',
        dates: 'October 2025',
        description: 'ProofWrite is a comprehensive document editing and analysis platform that uses AI-powered keystroke analysis and linguistic examination to detect AI-generated content and verify document authenticity. ProofWrite was the winner of the MongoDB Atlas challenge at Hack Midwest 2025.',
    },
    {
        name: 'DocDocs',
        githubUrl: 'https://github.com/cmyannette/DocDocs',
        dates: 'October 2024',
        description: 'DocDocs provides innovative services for telehealth with the primary task of providing AI-generated clinical notes from a patient-provider telehealth conversation. DocDocs also generates after-meeting patient summary notes, including instructions for how to take any discussed medication or when to meet next with a provider. DocDocs was built at Hack Midwest 2024.',
    },
    {
        name: 'Lexi',
        githubUrl: 'https://github.com/anton-3/lexi',
        dates: 'October 2023',
        description: 'Lexi is an AI-powered storybook generator that helps beginners learn new languages. Lexi takes vocabulary words as input and provides a short, easily comprehensible story in the user\'s chosen language, accompanied by AI-generated pictures specifically catered to each sentence. Lexi supports 8 languages and has translations available for each story it creates. Lexi was the winner of the Pinata Challenge at Hack Midwest 2023.',
    },
]
