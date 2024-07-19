import { MUIDataTableOptions } from 'mui-datatables';

const getAxiosErrMessage = (e: any) => e.response.data.error;

const textLabelsDatatables = () => {
  return {
    body: {
      noMatch: 'Результатов не найдено',
      toolTip: 'Сортировка',
    },
    pagination: {
      next: 'Следующая страница',
      previous: 'Предыдущая страница',
      rowsPerPage: 'Результатов на странице',
      displayRows: 'cтрок из',
    },
    toolbar: {
      search: 'Поиск',
      downloadCsv: 'Скачать',
      print: 'Распечатать',
      viewColumns: 'Показать колонки',
      filterTable: 'Фильтры',
    },
    filter: {
      all: 'Все',
      title: 'Фильтры',
      reset: 'Сброс',
    },
    viewColumns: {
      title: 'Показать колонки',
      titleAria: 'Показать/спрятать колонки',
    },
    selectedRows: {
      text: 'Выбрано',
      delete: 'Удалить',
      deleteAria: 'Удалить строки',
    },
  };
};

const datatableOptions = (): MUIDataTableOptions => {
  return {
    selectableRows: 'none',
    responsive: 'vertical',
    rowsPerPageOptions: [5, 10, 25, 50, 100],
    sortOrder: { name: 'id', direction: 'desc' },
    textLabels: textLabelsDatatables(),
    draggableColumns: { enabled: true, transitionTime: 300 },
    tableBodyHeight: '70dvh',
    elevation: 0,
  };
};

export { getAxiosErrMessage, datatableOptions };
