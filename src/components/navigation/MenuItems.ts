export const MenuItems = [
  {
    name: 'Консультации',
    path: 'consultations',
    icon: 'fluent:people-chat-16-regular',
  },
  {
    name: 'documentation',
    path: 'documentation',
    children: [
      { name: 'treatments', path: 'treatments' },
      { name: 'consultations', path: 'consultations' },
    ],
  },
];
