'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';
import locale from '@fullcalendar/core/locales/ru';

import { styled, Typography, Stack } from '@mui/material';
import { EventContentArg, CalendarOptions } from '@fullcalendar/core/index.js';

const CalendarWrapper = styled('div')(({ theme }) => ({
  '& .fc-scrollgrid': { borderColor: theme.palette.divider },
  '& .fc .fc-button': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    transition: 'background-color 0.3s ease',
    borderRadius: '4px',
  },
  '& .fc .fc-button-active': {
    backgroundColor: `${theme.palette.primary.light} !important`,
    color: theme.palette.primary.contrastText,
  },
  '& .fc .fc-button:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '& .fc .fc-toolbar-title': {
    color: theme.palette.text.primary,
  },
  '& .fc-daygrid-day': {
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.divider,
  },
  '& .fc-event': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
    padding: 2,
  },
  '& .fc .fc-col-header-cell': {
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.divider,
  },
  '& .fc-view': { borderColor: theme.palette.divider },

  '& .fc-day-today': {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
  },
  '& .fc .fc-daygrid-day-number': {
    color: theme.palette.text.primary,
  },
  '& .fc .fc-event-title, & .fc .fc-event-time': {
    color: theme.palette.text.primary,
  },
  '& .fc-day-past': {
    backgroundColor: theme.palette.action.disabledBackground,
  },
  '& .fc-day-future': {
    backgroundColor: theme.palette.background.default,
  },
  '@media (max-width: 700px)': {
    '& .fc-toolbar': {
      flexDirection: 'column',
    },
    '& .fc .fc-toolbar-title': {
      textAlign: 'center',
    },
  },
}));

const eventContent = (eventInfo: EventContentArg) => {
  return (
    <Stack spacing={0.5} direction="column" alignItems="flex-start" sx={{ p: 0.5 }}>
      <Typography variant="caption">{eventInfo.timeText}</Typography>
      <Typography variant="caption">{eventInfo.event.title}</Typography>
    </Stack>
  );
};

export const Calendar = () => {
  const options: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
      { title: 'Family Trip', start: '2024-07-22', end: '2024-07-24', color: '#4caf50' },
      { title: 'Design Review', start: '2024-07-23T13:59:00', color: '#673ab7' },
      { title: 'Dart Game?', start: '2024-07-18T17:30:00', color: '#009688' },
      { title: 'Dinner', start: '2024-07-18T19:00:00', color: '#795548' },
      { title: "Doctor's Appointment", start: '2024-07-20T10:00:00', color: '#e91e63' },
      { title: 'Meeting With Client', start: '2024-07-20T13:00:00', color: '#3f51b5' },
      { title: 'Monthly Meeting', start: '2024-09-01', color: '#2196f3' },
    ],
    locale,
    height: '80vh',
    headerToolbar: {
      left: 'prev,today,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    eventContent,
  };

  return (
    <CalendarWrapper>
      <FullCalendar {...options} />
    </CalendarWrapper>
  );
};
