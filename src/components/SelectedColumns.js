import { Checkbox } from 'antd';

function SelectedColumns(props) {
    return (
        <div style={{ marginBottom: 16 }}>
            <span style={{ marginRight: 8 }}>Show Columns:</span>
            {props.columns.map((column) => (
                <Checkbox
                    id={column.id}
                    checked={props.selectedColumns.includes(column.id)}
                    onChange={(e) => {
                      const checkedColumns = e.target.checked
                        ? [...props.selectedColumns, column.id]
                        : props.selectedColumns.filter((id) => id !== column.id);
                        props.handleColumnCheckboxChange(checkedColumns);
                    }}
                >
                  {column.title}
                </Checkbox>
            ))}
        </div>
    );
}
export default SelectedColumns;