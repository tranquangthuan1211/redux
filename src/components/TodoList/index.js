import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useDispatch,useSelector} from 'react-redux';
import { addTodo } from '../../redux/actions';
import { useState } from 'react';
import { selectorTodoList } from '../../redux/selectorTodolits';
export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');
  const [todoPriority, setTodoPriority] = useState('Medium');
  const handleAddTodo = () => {
    console.log('todoName', todoName)
    dispatch(addTodo({
      id:4,
      name: todoName,
      completed: false,
      priority: todoPriority
    }))
  }
  const todoList = useSelector(selectorTodoList);

  console.log('todoList', todoList)
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo name={todo.name} prioriry={todo.prioriry} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input 
            style={{ width: 'calc(100% - 200px)' }}
            placeholder='Add new todo...'
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select defaultValue="Medium"
            style={{ width: 120 }}
            onChange={(value) => setTodoPriority(value)}
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
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
