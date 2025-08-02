import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Button,
  Input,
  Dropdown,
  Space,
  Table,
  Tag,
  Avatar,
  Badge,
  Pagination,
  Card,
  Tooltip,
  Divider,
  Checkbox,
  List,
  Popover,
  Typography,
  Breadcrumb,
  Modal,
  Row,
  Col,
  Statistic,
  Calendar
} from 'antd';
import {
  SearchOutlined,
  PlusOutlined,
  SettingOutlined,
  BellOutlined,
  UserOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  BarChartOutlined,
  UnorderedListOutlined,
  FilterOutlined,
  GroupOutlined,
  StarOutlined,
  PrinterOutlined,
  ExportOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  UserSwitchOutlined,
  FieldTimeOutlined,
  DownOutlined,
  MessageOutlined,
  CheckOutlined,
  ExclamationCircleOutlined,
  MoreOutlined,
  HomeOutlined,
  RightOutlined
} from '@ant-design/icons';
import './App.less';

const { Header, Content } = Layout;
const { Search } = Input;
const { Text } = Typography;

const App = () => {
  const [selectedView, setSelectedView] = useState('list');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchValue, setSearchValue] = useState('待办');
  const [visibleColumns, setVisibleColumns] = useState([
    'reference',
    'start',
    'product',
    'nextActivity',
    'source',
    'componentStatus',
    'quantity',
    'company',
    'status'
  ]);
  const [notificationsVisible, setNotificationsVisible] = useState(false);

  const navigationItems = [
    { key: 'overview', label: '概述' },
    {
      key: 'jobs',
      label: '作业',
      children: [
        { key: 'manufacturing-orders', label: '制造订单' },
        { key: 'work-orders', label: '工单' },
        { key: 'decomposition-orders', label: '分解单' },
        { key: 'scrap-orders', label: '报废' }
      ]
    },
    { key: 'scheduling', label: '排期' },
    { key: 'products', label: '产品' },
    { key: 'reports', label: '报表' },
    { key: 'configuration', label: '配置' }
  ];

  const viewOptions = [
    { key: 'list', label: '列表', icon: <UnorderedListOutlined /> },
    { key: 'kanban', label: '看板', icon: <AppstoreOutlined /> },
    { key: 'calendar', label: '日历', icon: <CalendarOutlined /> },
    { key: 'pivot', label: '透视表', icon: <BarChartOutlined /> },
    { key: 'chart', label: '图表', icon: <BarChartOutlined /> },
    { key: 'activity', label: '活动', icon: <FileTextOutlined /> }
  ];

  const searchFilterOptions = [
    { key: 'pending', label: '待办' },
    { key: 'decomposed', label: '已分解' },
    { key: 'completed', label: '已完成' },
    { key: 'cancelled', label: '已取消' }
  ];

  const groupOptions = [
    { key: 'product', label: '产品' },
    { key: 'status', label: '状态' },
    { key: 'material', label: '物料可用性' }
  ];

  const allColumns = [
    { key: 'reference', title: '参考号' },
    { key: 'start', title: '开始' },
    { key: 'product', title: '产品' },
    { key: 'nextActivity', title: '下一个活动' },
    { key: 'source', title: '来源' },
    { key: 'componentStatus', title: '组件状态' },
    { key: 'quantity', title: '数量' },
    { key: 'company', title: '公司' },
    { key: 'status', title: '状态' },
    { key: 'responsible', title: '负责人' },
    { key: 'duration', title: '预计时长' }
  ];

  const settingsMenu = (
    <Menu>
      <Menu.Item key="print" icon={<PrinterOutlined />}>
        打印
      </Menu.Item>
      <Menu.Item key="export" icon={<ExportOutlined />}>
        导出
      </Menu.Item>
    </Menu>
  );

  const searchMenu = (
    <Menu>
      <Menu.ItemGroup title="筛选">
        {searchFilterOptions.map(option => (
          <Menu.Item key={option.key}>{option.label}</Menu.Item>
        ))}
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.ItemGroup title="分组">
        {groupOptions.map(option => (
          <Menu.Item key={option.key}>{option.label}</Menu.Item>
        ))}
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item key="save-search" icon={<StarOutlined />}>
        保存当前搜索
      </Menu.Item>
    </Menu>
  );

  const columnMenu = (
    <Menu>
      <div className="column-selector">
        <div className="column-selector-title">选择字段</div>
        <div className="column-selector-content">
          {allColumns.map(column => (
            <Menu.Item key={column.key} className="column-item">
              <Checkbox
                checked={visibleColumns.includes(column.key)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setVisibleColumns([...visibleColumns, column.key]);
                  } else {
                    setVisibleColumns(visibleColumns.filter(key => key !== column.key));
                  }
                }}
              >
                {column.title}
              </Checkbox>
            </Menu.Item>
          ))}
        </div>
      </div>
    </Menu>
  );

  const notifications = [
    {
      id: 1,
      title: '新订单通知',
      content: '您有一个新的制造订单需要处理',
      time: '2分钟前',
      type: 'info',
      read: false
    },
    {
      id: 2,
      title: '库存提醒',
      content: '产品[FURN_7800]库存不足',
      time: '1小时前',
      type: 'warning',
      read: false
    },
    {
      id: 3,
      title: '任务完成',
      content: '订单WH/MO/00001已完成',
      time: '3小时前',
      type: 'success',
      read: true
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const notificationContent = (
    <div className="notification-dropdown">
      <div className="notification-header">
        <Text strong>通知</Text>
        <Button type="link" size="small">标记所有为已读</Button>
      </div>
      <List
        className="notification-list"
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={item => (
          <List.Item className={`notification-item ${item.read ? 'read' : 'unread'}`}>
            <List.Item.Meta
              avatar={
                item.type === 'info' ? (
                  <Avatar icon={<MessageOutlined />} />
                ) : item.type === 'warning' ? (
                  <Avatar icon={<ExclamationCircleOutlined />} style={{ backgroundColor: '#faad14' }} />
                ) : (
                  <Avatar icon={<CheckOutlined />} style={{ backgroundColor: '#52c41a' }} />
                )
              }
              title={<Text strong>{item.title}</Text>}
              description={
                <div>
                  <div>{item.content}</div>
                  <Text type="secondary" className="notification-time">{item.time}</Text>
                </div>
              }
            />
          </List.Item>
        )}
      />
      <div className="notification-footer">
        <Button type="link" block>查看所有通知</Button>
      </div>
    </div>
  );

  const dataSource = [
    {
      key: '1',
      reference: 'WH/MO/00001',
      start: '3 天前',
      product: '[FURN_7800] 组合桌子',
      nextActivity: '3 天前',
      source: '销售订单',
      componentStatus: '可用',
      quantity: '3.00',
      company: 'My Company (San Francisco)',
      status: '待关闭',
      responsible: '张三',
      duration: '2 天',
      date: new Date(2023, 5, 15)
    },
    {
      key: '2',
      reference: 'WH/MO/00002',
      start: '2 天前',
      product: '[FURN_8000] 办公椅',
      nextActivity: '2 天前',
      source: '销售订单',
      componentStatus: '部分可用',
      quantity: '5.00',
      company: 'My Company (San Francisco)',
      status: '草稿',
      responsible: '李四',
      duration: '3 天',
      date: new Date(2023, 5, 16)
    },
    {
      key: '3',
      reference: 'WH/MO/00003',
      start: '1 天前',
      product: '[FURN_8200] 会议桌',
      nextActivity: '1 天前',
      source: '库存补货',
      componentStatus: '不可用',
      quantity: '2.00',
      company: 'My Company (San Francisco)',
      status: '待关闭',
      responsible: '王五',
      duration: '1 天',
      date: new Date(2023, 5, 17)
    },
    {
      key: '4',
      reference: 'WH/MO/00004',
      start: '今天',
      product: '[FURN_8500] 文件柜',
      nextActivity: '今天',
      source: '销售订单',
      componentStatus: '可用',
      quantity: '10.00',
      company: 'My Company (San Francisco)',
      status: '草稿',
      responsible: '赵六',
      duration: '4 天',
      date: new Date()
    }
  ];

  const getColumns = () => {
    const baseColumns = [
      {
        title: '参考号',
        dataIndex: 'reference',
        key: 'reference',
        render: (text) => <a>{text}</a>
      },
      {
        title: '开始',
        dataIndex: 'start',
        key: 'start'
      },
      {
        title: '产品',
        dataIndex: 'product',
        key: 'product'
      },
      {
        title: '下一个活动',
        dataIndex: 'nextActivity',
        key: 'nextActivity',
        render: (text) => (
          <Space>
            <ClockCircleOutlined />
            {text}
          </Space>
        )
      },
      {
        title: '来源',
        dataIndex: 'source',
        key: 'source',
        render: (text) => (
          <Tooltip title={text}>
            <FileTextOutlined />
          </Tooltip>
        )
      },
      {
        title: '组件状态',
        dataIndex: 'componentStatus',
        key: 'componentStatus',
        render: (text) => {
          let icon;
          if (text === '可用') {
            icon = <CheckCircleOutlined style={{ color: '#52c41a' }} />;
          } else if (text === '部分可用') {
            icon = <InfoCircleOutlined style={{ color: '#faad14' }} />;
          } else {
            icon = <CloseCircleOutlined style={{ color: '#ff4d4f' }} />;
          }
          return (
            <Space>
              {icon}
              {text}
            </Space>
          );
        }
      },
      {
        title: '数量',
        dataIndex: 'quantity',
        key: 'quantity'
      },
      {
        title: '公司',
        dataIndex: 'company',
        key: 'company'
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          let color = 'default';
          if (status === '待关闭') {
            color = 'blue';
          } else if (status === '草稿') {
            color = 'orange';
          }
          return <Tag color={color}>{status}</Tag>;
        }
      }
    ];

    const additionalColumns = [
      {
        title: '负责人',
        dataIndex: 'responsible',
        key: 'responsible'
      },
      {
        title: '预计时长',
        dataIndex: 'duration',
        key: 'duration',
        render: (text) => (
          <Space>
            <FieldTimeOutlined />
            {text}
          </Space>
        )
      }
    ];

    const resultColumns = baseColumns.filter(col => 
      visibleColumns.includes(col.key)
    );
    
    if (visibleColumns.includes('responsible')) {
      resultColumns.push(additionalColumns[0]);
    }
    
    if (visibleColumns.includes('duration')) {
      resultColumns.push(additionalColumns[1]);
    }

    // 添加操作列作为最后一列（移除了列选择器功能）
    resultColumns.push({
      title: '',
      key: 'actions',
      fixed: 'right',
      width: 50,
      render: () => (
        <Dropdown 
          overlay={
            <Menu>
              <Menu.Item key="edit">编辑</Menu.Item>
              <Menu.Item key="delete">删除</Menu.Item>
              <Menu.Item key="duplicate">复制</Menu.Item>
            </Menu>
          } 
          trigger={['click']}
        >
          <Button 
            type="text" 
            icon={<MoreOutlined />} 
            className="action-button"
          />
        </Dropdown>
      )
    });

    return resultColumns;
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
    columnWidth: 48,
    fixed: true
  };

  const statusGroups = {
    '草稿': dataSource.filter(item => item.status === '草稿'),
    '待关闭': dataSource.filter(item => item.status === '待关闭'),
    '进行中': [],
    '已完成': []
  };

  const KanbanView = () => (
    <div className="kanban-container">
      <Row gutter={16}>
        {Object.entries(statusGroups).map(([status, items]) => (
          <Col span={6} key={status}>
            <Card 
              title={
                <Space>
                  <div className={`status-indicator ${status.toLowerCase().replace(' ', '-')}`}></div>
                  <span>{status}</span>
                  <span className="item-count">({items.length})</span>
                </Space>
              }
              className="kanban-column"
            >
              <div className="kanban-items">
                {items.map(item => (
                  <Card 
                    key={item.key} 
                    className="kanban-item"
                    size="small"
                  >
                    <div className="kanban-item-header">
                      <Text strong>{item.reference}</Text>
                      <Tag color={item.status === '待关闭' ? 'blue' : 'orange'}>
                        {item.status}
                      </Tag>
                    </div>
                    <div className="kanban-item-content">
                      <div className="product-info">
                        <Text type="secondary">{item.product}</Text>
                      </div>
                      <div className="item-details">
                        <Space size="small">
                          <span>数量: {item.quantity}</span>
                          <span>负责人: {item.responsible}</span>
                        </Space>
                      </div>
                      <div className="item-footer">
                        <Text type="secondary" className="item-time">
                          <ClockCircleOutlined /> {item.start}
                        </Text>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  const CalendarView = () => {
    const dateCellRender = (value) => {
      const listData = dataSource.filter(item => 
        item.date && 
        item.date.getDate() === value.date() &&
        item.date.getMonth() === value.month() &&
        item.date.getFullYear() === value.year()
      );
      
      return (
        <ul className="events">
          {listData.map(item => (
            <li key={item.key} className={`event-item ${item.status.toLowerCase()}`}>
              <Badge 
                status={item.status === '待关闭' ? 'processing' : 'warning'} 
                text={item.reference} 
              />
            </li>
          ))}
        </ul>
      );
    };

    const monthCellRender = (value) => {
      const num = dataSource.filter(item => 
        item.date && item.date.getMonth() === value.month()
      ).length;
      
      return num ? (
        <div className="notes-month">
          <section>{num} 条记录</section>
        </div>
      ) : null;
    };

    return (
      <div className="calendar-container">
        <Calendar 
          dateCellRender={dateCellRender} 
          monthCellRender={monthCellRender} 
          className="custom-calendar"
        />
      </div>
    );
  };

  return (
    <Layout className="manufacturing-order-layout">
      <Header className="header">
        <div className="header-content">
          <div className="logo">Odoo</div>
          <div className="module-title">制造</div>
          <Menu
            className="navigation-menu"
            mode="horizontal"
            items={navigationItems}
            selectedKeys={['manufacturing-orders']}
          />
          <div className="user-info">
            <Popover
              content={notificationContent}
              trigger="click"
              open={notificationsVisible}
              onOpenChange={setNotificationsVisible}
              placement="bottomRight"
            >
              <Badge count={unreadCount}>
                <BellOutlined className="icon-button" />
              </Badge>
            </Popover>
            <SettingOutlined className="icon-button" />
            <Avatar icon={<UserOutlined />} />
            <span className="company-name">My Company (San Francisco)</span>
          </div>
        </div>
      </Header>

      <Content className="content">
        <div className="toolbar">
          <div className="toolbar-left">
            <Button type="primary" icon={<PlusOutlined />}>
              新建
            </Button>
            <span className="breadcrumb-text">制造订单</span>
            <Dropdown overlay={settingsMenu} trigger={['click']}>
              <Button icon={<SettingOutlined />} />
            </Dropdown>
          </div>

          <div className="toolbar-center">
            <Dropdown overlay={searchMenu} trigger={['click']}>
              <Button className="search-filter-button">
                {searchValue} <FilterOutlined />
              </Button>
            </Dropdown>
            <Search
              placeholder="搜索..."
              className="search-input"
              prefix={<SearchOutlined />}
            />
          </div>

          <div className="toolbar-right">
            <div className="view-switcher">
              {viewOptions.map(option => (
                <Button
                  key={option.key}
                  type={selectedView === option.key ? 'primary' : 'text'}
                  icon={option.icon}
                  onClick={() => setSelectedView(option.key)}
                  className="view-button"
                />
              ))}
            </div>
            <span className="pagination-info">1-4 of 4</span>
            <Pagination
              size="small"
              total={4}
              showSizeChanger={false}
              showQuickJumper={false}
              className="pagination"
            />
            <Dropdown overlay={columnMenu} trigger={['click']}>
              <Button icon={<SettingOutlined />} />
            </Dropdown>
          </div>
        </div>

        {selectedView === 'kanban' ? (
          <KanbanView />
        ) : selectedView === 'calendar' ? (
          <CalendarView />
        ) : (
          <Card className="table-container">
            <Table
              rowSelection={rowSelection}
              columns={getColumns()}
              dataSource={dataSource}
              pagination={false}
              scroll={{ x: 'max-content' }}
            />
          </Card>
        )}
      </Content>
    </Layout>
  );
};

export default App;
