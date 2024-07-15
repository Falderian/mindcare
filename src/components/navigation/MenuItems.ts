export const MenuItems = [
  { name: 'Планировщик', path: 'scheduler', icon: 'ant-design:schedule-outlined' },
  {
    name: 'documentation',
    path: 'documentation',
    children: [
      { name: 'treatments', path: 'treatments' },
      { name: 'consultations', path: 'consultations' },
    ],
  },
  {
    name: 'Консультации',
    path: 'consultations',
    icon: 'fluent:people-chat-16-regular',
  },
];
