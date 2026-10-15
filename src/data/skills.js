export const skills = [
  {
    id: 'languages',
    title: 'Programming Languages',
    span: 2,
    icon: 'code',
    items: [
      { name: 'C/C++', pct: 20 },
      { name: 'Python', pct: 30 },
      { name: 'HTML/CSS', pct: 40 },
      { name: 'JavaScript', pct: 35 },
    ],
    tags: ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'hardware',
    title: 'Hardware & Embedded',
    span: 1,
    icon: 'chip',
    items: [{ name: 'Arduino / AVR', pct: 70 }],
    tags: ['Arduino', 'PCB'],
  },
  {
    id: 'web',
    title: 'Web Development',
    span: 1,
    icon: 'globe',
    items: [
      { name: 'HTML/CSS', pct: 40 },
      { name: 'JavaScript', pct: 35 },
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    span: 2,
    icon: 'tools',
    items: [],
    tags: ['Arduino IDE', 'GitHub', 'VS Code', 'AutoCAD', 'MATLAB', 'Antigravity IDE', 'Windows'],
  },
  {
    id: 'video',
    title: 'Video Editing',
    level: 'Intermediate',
    span: 1,
    icon: 'video',
    items: [{ name: 'Proficiency', pct: 50 }],
    tags: [],
  },
  {
    id: 'canva',
    title: 'Canva Editing',
    level: 'Intermediate',
    note: 'pubmats / social media graphics',
    span: 1,
    icon: 'palette',
    items: [{ name: 'Proficiency', pct: 50 }],
    tags: ['Canva'],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    span: 1,
    icon: 'people',
    items: [],
    tags: ['Teamwork', 'Communication', 'Critical Thinking', 'Time Management', 'Adaptability'],
  },
  {
    id: 'quote',
    title: 'Still Figuring It Out',
    span: 1,
    icon: 'quote',
    items: [],
    tags: [],
    quote: '> the best way to learn is to build something that does not work yet',
  },
]

// Skills repeated as chips in the About section. Derived from `level` so each
// skill is declared once and surfaces in both places.
export const aboutSkills = {
  label: 'editing',
  items: skills
    .filter((s) => s.level)
    .map((s) => ({ name: s.title, level: s.level, note: s.note })),
}
