/*eslint jsx-a11y/anchor-is-valid: 0*/
import React, { useState, useEffect } from 'react';

import './App.css';

import TablePage from './pages/TablePage';
import ChartsPage from './pages/ChartsPage';

function App() {
  const [columns] = useState([
    {
      title: 'Name',
      dataIndex: 'name',
      id: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <span onClick={() => handleNameClick(text)}>{text}</span>,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      id: 'gender',
      sorter: (a, b) => a.name.localeCompare(b.gender),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      id: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      id: 'address',
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
  ]);
  const [singleData, setSingleData] = useState({ name: undefined, gender: undefined, age: undefined, address: undefined})
  const [family, setFamily] = useState({ name: undefined, gender: undefined, age: undefined, address: undefined })
  const [dataSource, setDataSource] = useState([])
  const [pageSize, setPageSize] = useState(5); 
  const [page, setPage] = useState("TablePage")
  const [selectedNameDetails, setSelectedNameDetails] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [selectedColumns, setSelectedColumns] = useState(columns.map((column) => column.id));
  const isValid = Boolean(singleData.name && singleData.gender && singleData.age && singleData.address && family.name && family.gender && family.age && singleData.address );

  useEffect(() => {
    getLists()
  }, []);

  const getLists = () => {
    fetch("http://localhost:3002/users").then(res => res.json())
      .then(result => setDataSource(result))
      .catch(console.log);
  }

  const createList = () => {
    singleData.family = family
    fetch("http://localhost:3002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(singleData)
    })
    window.location.reload(false);
  }

  const deleteList = (event, id) => {
    fetch("http://localhost:3002/users/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      window.location.reload(false);
  }

  // const updateList = (event, key) => {
  //   fetch("http://localhost:3002/users/" + key, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(singledata)
  //   })
  //   .then(res => res.json())
  // }

  const handleChange = (event) => {
    const value = event.target.value;
    setSingleData({
      ...singleData,
      [event.target.name]: value,
    });
  };

  const handleChangeFamily = (event) => {
    const value = event.target.value;
    setFamily({
      ...family,
      [event.target.name]: value,
    });
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

  const handleNameClick = (id) => {
    const details = dataSource.find((item) => item.id === id);
    setSelectedNameDetails(details);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleColumnCheckboxChange = (checkedColumns) => {
    setSelectedColumns(checkedColumns);
  };

  const tableConfig = {
    dataSource: dataSource.map(({ family, ...rest }) => rest), 
    columns: columns.filter((column) => selectedColumns.includes(column.id)),
    pagination: { pageSize },
  };

  const openedPage =  page === "TablePage" ?
    <TablePage
      dataSource={dataSource}
      pageSize={pageSize} 
      handlePageSizeChange={handlePageSizeChange}
      tableConfig={tableConfig}
      handleNameClick={handleNameClick}
      isModalVisible={isModalVisible}
      handleModalClose={handleModalClose}
      deleteList={deleteList}
      selectedNameDetails={selectedNameDetails}
      columns={columns}
      selectedColumns={selectedColumns}
      handleColumnCheckboxChange={handleColumnCheckboxChange}
    /> 
    :
    <ChartsPage 
      getLists={getLists}
      dataSource={dataSource}
      singleData={singleData}
      setSingleData={setSingleData}
      handleChange={handleChange}
      handleChangeFamily={handleChangeFamily}
      setFamily={setFamily}
      family={family}
      createList={createList}
      isValid={isValid}
    />

  return (
    <div className="App">
      <>
        <div className='App__pageButtonsContainer'>
          <div className='App__pageButtonsContainer_button' id="button" onClick={() => {setPage("TablePage")}}>
            <div id="App__pageButtonsContainer_buttonCircle"></div>
            <a>Table Page</a>
          </div>
          <div className='App__pageButtonsContainer_button' id="button" onClick={() => {setPage("ChartsPage")}}>
          <div id="App__pageButtonsContainer_buttonCircle"></div>
            <a>Chart Page</a>
          </div>
        </div>
        {openedPage}
      </>
    </div>
  );
}
export default App;