import React, { useState } from 'react'
import { Table } from 'antd'
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table'
import { Characters } from '../../models/api/Api'

interface TableProps<T> {
  data: T[]
  columns?: ColumnProps<any>[]
  pagination: TablePaginationConfig
  onPaginationChange: (page: number) => void
}

const { Column } = Table

const TableComponent = ({
  data,
  columns,
  pagination,
  onPaginationChange,
}: TableProps<Characters>): JSX.Element => {
  const [paginationState, setPagination] = useState<TablePaginationConfig>(pagination)

  const handlePaginationChange = (pag: TablePaginationConfig) => {
    setPagination(pag)
    onPaginationChange(pag.current || 1)
  }

  return (
    <Table dataSource={data} pagination={paginationState}  onChange={handlePaginationChange}>
      {columns?.map((column: ColumnProps<unknown>) => {
        if (column.render) {
          return (
            <Column
              title={column.title}
              dataIndex={column.dataIndex}
              key={column.key}
              render={column.render}
              filters={column.filters}
              onFilter={column.onFilter}
            />
          )
        }
        return (
          <Column
            title={column.title}
            dataIndex={column.dataIndex}
            key={column.key}
            onFilter={column.onFilter}
            filters={column.filters}
          />
        )
      })}
    </Table>
  )
}

TableComponent.defaultProps = {
  columns: [],
}

export default TableComponent
