import { Table, Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';


const VehicleButton = styled(Button)`
    border-radius: 10px;
    background-color: rgb(122, 222, 174);
`;

const NewVehicleWrapper = styled.div`
    margin: 2em;
    display: flex;
    justify-content: flex-end;
`;

const randomNum = (minm, maxm) => {
    return (Math.floor(Math.random() * (maxm - minm + 1)) + minm);
};
const randomNum2 = (minm, maxm) => {
    return (((Math.random() * (maxm - minm + 1)) + minm).toFixed(6));
};

const randomWord = (word) => {
    return (word[Math.floor(Math.random()*word.length)]);
};

const Dating = () => {
    return (new Date().toLocaleString())
}
  
const TableColumns = [
    {
        title: 'VehicleID',
        dataIndex: 'vehicleid',
        key: 'vehicleid',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Lock/Unlock',
        dataIndex: 'lockunlock',
        key: 'lock-unlock',
    },
    {
        title: 'Current Speed',
        dataIndex: 'currentspeed',
        key: 'current-speed',
    },
    {
        title: 'Battery Level',
        dataIndex: 'batterylevel',
        key: 'battery-level',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Last Updated',
        dataIndex: 'lastupdated',
        key: 'last-updated',
    },
];

function TableList() {
    const [count, setCount] = useState(1);
    const [state, setState] = useState([]);
    const [dataSource, setDatasource]= useState([])
    
    let tableData = {   
        key: {count},
        vehicleid: randomNum(10000, 99999),
        type: 'Scooter',
        lockunlock: randomWord(['Unlock', 'Lock']),
        currentspeed: `${randomNum(0,5)} km/h`,
        batterylevel: `${randomNum(0,100)}%`,
        status: randomWord(['Parking', 'Moving', 'Idling', 'Towing']),
        location: randomNum2(1, 6).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        lastupdated: Dating()
    };

    const handleClick = () => {
        setState(state => [...state, tableData]);
        setDatasource(state)
        setCount(count + 1)
      };
    return (
        <React.Fragment>
            <NewVehicleWrapper>
                <VehicleButton onClick={handleClick}> + New Vehicle </VehicleButton>
            </NewVehicleWrapper> 
            <Table columns={TableColumns} dataSource={dataSource} />
        </React.Fragment>
    );
};

export default TableList;