export const MenuItems = [
  { name: 'Календарь', path: 'calendar', icon: 'ant-design:schedule-outlined' },
  {
    name: 'documentation',
    path: '',
    children: [
      { name: 'treatments', path: '' },
      { name: 'consultations', path: '' },
    ],
  },
  {
    name: 'Консультации',
    path: 'consultations',
    icon: 'fluent:people-chat-16-regular',
  },
];
