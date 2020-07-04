import React, { useState } from 'react'
import { Table } from 'antd'
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table'

interface TableProps {
  data: any[]
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
}: TableProps): JSX.Element => {
  const [paginationState, setPagination] = useState<TablePaginationConfig>(pagination)

  const handlePaginationChange = (pag: TablePaginationConfig) => {
    setPagination(pag)
    onPaginationChange(pag.current || 1)
  }

  return (
    <Table dataSource={data} pagination={paginationState} onChange={handlePaginationChange} >
      {columns?.map((column: ColumnProps<any>) => {
        if (column.render) {
          return (
            <Column
              title={column.title}
              dataIndex={column.dataIndex}
              key={column.key}
              render={column.render}
            />
          )
        }
        return <Column title={column.title} dataIndex={column.dataIndex} key={column.key} />
      })}
    </Table>
  )
}

TableComponent.defaultProps = {
  columns: [],
}

export default TableComponent
