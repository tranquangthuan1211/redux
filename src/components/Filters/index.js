import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import {filterTodo} from '../../redux/actions';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useState } from 'react';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    // console.log('e.target.value', e.target.value)
    setSearch(e.target.value);
    dispatch(filterTodo({
      search: e.target.value,
      status: 'All',
      priority: [],
    }));
  };


  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search 
          placeholder='input search text' 
          value={search}
          onChange={handleSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
