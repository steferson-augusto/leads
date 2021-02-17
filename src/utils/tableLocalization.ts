import { Localization } from 'material-table'

const localization: Localization = {
  header: {
    actions: 'Ações'
  },
  body: {
    emptyDataSourceMessage: 'Nenhum registro para exibir',
    addTooltip: 'Adicionar',
    deleteTooltip: 'Deletar',
    editTooltip: 'Editar',
    editRow: {
      cancelTooltip: 'Cancelar',
      saveTooltip: 'Salvar',
      deleteText: 'Tem certeza de que deseja apagar este registro?'
    },
    filterRow: {
      filterTooltip: 'Filtrar',
      filterPlaceHolder: 'Pesquisar'
    }
  },
  toolbar: {
    searchTooltip: 'Pesquisar',
    searchPlaceholder: 'Pesquisar',
    searchAriaLabel: 'Pesquisar'
  },
  pagination: {
    labelRowsSelect: 'linhas',
    labelDisplayedRows: '{count} de {from}-{to}',
    firstTooltip: 'Primeira página',
    previousTooltip: 'Página anterior',
    nextTooltip: 'Próxima página',
    lastTooltip: 'Última página'
  }
}

export default localization
