export const MenuItems = [
  { name: 'patients', path: 'patients' },
  {
    name: 'documentation',
    path: 'documentation',
    children: [
      { name: 'treatments', path: 'treatments' },
      { name: 'consultations', path: 'consultations' },
    ],
  },
];
