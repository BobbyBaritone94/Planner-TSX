import { Text, View } from "@nodegui/react-nodegui";
import React from "react";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import {ColumnDefinitionType} from "./ColumnDefinitionType";


export interface MyEvent {
    name: string;
    description: string;
    day: Date;
    time: number;
}



type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
}

const style = {
  borderCollapse: 'collapse'
} as const

const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>): JSX.Element => {
  return (
    <table style={style}>
      <TableHeader columns={columns} />
      <TableRows
        data={data}
        columns={columns}
      />
    </table>
  );
};

export default Table;