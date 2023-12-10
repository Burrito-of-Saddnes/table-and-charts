import ModalWindow from "../components/ModalWindow";
import PeopleAmount from "../components/PeopleAmount";
import TabelList from "../components/TabelList";
import SelectedColumns from '../components/SelectedColumns';

function TablePage(props) {
    return (
        <div className="App">
            <SelectedColumns
                columns={props.columns}
                selectedColumns={props.selectedColumns}
                handleColumnCheckboxChange={props.handleColumnCheckboxChange}
            />
            <PeopleAmount
                dataSource={props.dataSource}
                pageSize={props.pageSize} 
                handlePageSizeChange={props.handlePageSizeChange}
            />
            <TabelList
                dataSource={props.dataSource}
                tableConfig={props.tableConfig}
                handleNameClick={props.handleNameClick}
            />
            <ModalWindow
                deleteList={props.deleteList}
                isModalVisible={props.isModalVisible}
                handleModalClose={props.handleModalClose}
                selectedNameDetails={props.selectedNameDetails}
            />
        </div>
    );
}
export default TablePage;