import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  SearchOutlined, 
  DownOutlined,
  CloseOutlined,
  StarOutlined,
  PlusOutlined,
  FilterOutlined,
  FolderOpenOutlined,
  AppstoreOutlined,
  TagOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
  EditOutlined,
  CheckOutlined,
  CloseCircleOutlined,
  FileDoneOutlined,
  StopOutlined,
  ShoppingCartOutlined,
  DatabaseOutlined,
  TeamOutlined,
  ScheduleOutlined
} from '@ant-design/icons';
import { 
  Input, 
  Tag, 
  Checkbox, 
  Radio, 
  Dropdown, 
  Button, 
  Space,
  Divider,
  Card,
  Badge,
  Tooltip
} from 'antd';
import './App.less';

const App = () => {
  // 筛选状态
  const [filters, setFilters] = useState({
    status: ['todo'],
    tags: ['starred'],
    other: ['confirmed', 'scheduled']
  });

  // 分组状态
  const [grouping, setGrouping] = useState('date');

  // 收藏夹状态
  const [savedSearches, setSavedSearches] = useState([
    { id: 1, name: '我的待办任务', filters: { status: ['todo'], tags: [], other: [] }, grouping: 'status' },
    { id: 2, name: '本周任务', filters: { status: ['todo', 'inProgress'], tags: ['starred'], other: [] }, grouping: 'date' }
  ]);

  const [newSearchName, setNewSearchName] = useState('');

  // 搜索关键词
  const [searchKeyword, setSearchKeyword] = useState('');

  // 控制下拉显示状态
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // 输入框引用
  const inputWrapperRef = useRef(null);
  const tagsContainerRef = useRef(null);

  // 状态选项
  const statusOptions = [
    { label: '待办', value: 'todo', icon: <ClockCircleOutlined /> },
    { label: '已分解', value: 'decomposed', icon: <FileDoneOutlined /> },
    { label: '已完成', value: 'completed', icon: <CheckCircleOutlined /> },
    { label: '已取消', value: 'cancelled', icon: <CloseCircleOutlined /> }
  ];

  // 标签选项
  const tagOptions = [
    { label: '标星', value: 'starred', icon: <StarOutlined /> },
    { label: '此工作站', value: 'workstation', icon: <UserOutlined /> },
    { label: '草稿', value: 'draft', icon: <EditOutlined /> }
  ];

  // 其他选项
  const otherOptions = [
    { label: '已确认', value: 'confirmed', icon: <CheckOutlined /> },
    { label: '已安排', value: 'scheduled', icon: <ScheduleOutlined /> },
    { label: '进行中', value: 'inProgress', icon: <ClockCircleOutlined /> },
    { label: '待关闭', value: 'pendingClose', icon: <CloseOutlined /> },
    { label: '制造订单等待中', value: 'moWaiting', icon: <ShoppingCartOutlined /> },
    { label: 'MO 准备就绪', value: 'moReady', icon: <CheckOutlined /> }
  ];

  // 分组选项
  const groupingOptions = [
    { label: '产品', value: 'product', icon: <DatabaseOutlined /> },
    { label: '状态', value: 'status', icon: <ExclamationCircleOutlined /> },
    { label: '物料可用性', value: 'materialAvailability', icon: <ShoppingCartOutlined /> },
    { label: '采购组', value: 'procurementGroup', icon: <TeamOutlined /> },
    { label: '日期', value: 'date', icon: <CalendarOutlined /> },
    { label: '添加自定义分组', value: 'custom', icon: <PlusOutlined /> }
  ];

  // 计算已选择的筛选条件数量
  const selectedFilterCount = useMemo(() => {
    return Object.values(filters).reduce((total, category) => total + category.length, 0);
  }, [filters]);

  // 处理筛选条件变化
  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const categoryFilters = prev[category] || [];
      let newFilters;
      
      if (categoryFilters.includes(value)) {
        newFilters = categoryFilters.filter(item => item !== value);
      } else {
        newFilters = [...categoryFilters, value];
      }
      
      return {
        ...prev,
        [category]: newFilters
      };
    });
  };

  // 处理分组变化
  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  // 保存当前搜索
  const handleSaveSearch = () => {
    if (newSearchName.trim()) {
      const newSearch = {
        id: Date.now(),
        name: newSearchName.trim(),
        filters: { ...filters },
        grouping
      };
      setSavedSearches([...savedSearches, newSearch]);
      setNewSearchName('');
    }
  };

  // 应用收藏的搜索
  const applySavedSearch = (savedSearch) => {
    setFilters({ ...savedSearch.filters });
    setGrouping(savedSearch.grouping);
    setDropdownVisible(false);
  };

  // 移除筛选条件
  const removeFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item !== value)
    }));
  };

  // 获取筛选条件的标签
  const getFilterTags = () => {
    const tags = [];
    
    // 状态标签
    filters.status.forEach(value => {
      const option = statusOptions.find(opt => opt.value === value);
      if (option) {
        tags.push({
          key: `status-${value}`,
          category: 'status',
          value,
          label: option.label,
          color: 'blue',
          icon: option.icon
        });
      }
    });
    
    // 标签
    filters.tags.forEach(value => {
      const option = tagOptions.find(opt => opt.value === value);
      if (option) {
        tags.push({
          key: `tags-${value}`,
          category: 'tags',
          value,
          label: option.label,
          color: 'gold',
          icon: option.icon
        });
      }
    });
    
    // 其他选项
    filters.other.forEach(value => {
      const option = otherOptions.find(opt => opt.value === value);
      if (option) {
        tags.push({
          key: `other-${value}`,
          category: 'other',
          value,
          label: option.label,
          color: 'purple',
          icon: option.icon
        });
      }
    });
    
    return tags;
  };

  // 获取分组标签
  const getGroupingTag = () => {
    const option = groupingOptions.find(opt => opt.value === grouping);
    return option ? { label: option.label, icon: option.icon } : null;
  };

  // 收藏夹下拉菜单
  const renderFavoritesMenu = () => (
    <div className="favorites-dropdown">
      <div className="favorites-header">
        <FolderOpenOutlined className="favorites-icon" />
        <span className="favorites-title">收藏夹</span>
      </div>
      <div className="favorites-list">
        {savedSearches.map(search => (
          <div 
            key={search.id} 
            className="favorite-item"
            onClick={() => applySavedSearch(search)}
          >
            <FolderOpenOutlined className="favorite-item-icon" />
            {search.name}
          </div>
        ))}
      </div>
      <Divider style={{ margin: '8px 0' }} />
      <div className="save-search">
        <Input
          placeholder="搜索名称"
          value={newSearchName}
          onChange={(e) => setNewSearchName(e.target.value)}
          onPressEnter={handleSaveSearch}
          size="small"
          prefix={<EditOutlined />}
        />
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={handleSaveSearch}
          style={{ marginTop: 8, width: '100%' }}
          size="small"
        >
          保存当前搜索
        </Button>
      </div>
    </div>
  );

  // 主要下拉内容
  const renderDropdownContent = () => (
    <div className="search-dropdown-content">
      <div className="horizontal-controls">
        {/* 筛选条件 */}
        <Card className="control-card filter-card" title={
          <Space size={8}>
            <FilterOutlined />
            <span>筛选条件</span>
          </Space>
        } size="small">
          <div className="filter-section">
            <div className="filter-group">
              <div className="group-title">状态</div>
              <div className="filter-options">
                {statusOptions.map(option => (
                  <Checkbox
                    key={option.value}
                    checked={filters.status.includes(option.value)}
                    onChange={() => handleFilterChange('status', option.value)}
                    className="filter-checkbox"
                  >
                    <Space size={6}>
                      {option.icon}
                      {option.label}
                    </Space>
                  </Checkbox>
                ))}
              </div>
            </div>
            
            <div className="filter-group">
              <div className="group-title">标签</div>
              <div className="filter-options">
                {tagOptions.map(option => (
                  <Checkbox
                    key={option.value}
                    checked={filters.tags.includes(option.value)}
                    onChange={() => handleFilterChange('tags', option.value)}
                    className="filter-checkbox"
                  >
                    <Space size={6}>
                      {option.icon}
                      {option.label}
                    </Space>
                  </Checkbox>
                ))}
              </div>
            </div>
            
            <div className="filter-group">
              <div className="group-title">其他</div>
              <div className="filter-options">
                {otherOptions.map(option => (
                  <Checkbox
                    key={option.value}
                    checked={filters.other.includes(option.value)}
                    onChange={() => handleFilterChange('other', option.value)}
                    className="filter-checkbox"
                  >
                    <Space size={6}>
                      {option.icon}
                      {option.label}
                    </Space>
                  </Checkbox>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* 分组方式 */}
        <Card className="control-card grouping-card" title={
          <Space size={8}>
            <AppstoreOutlined />
            <span>分组方式</span>
          </Space>
        } size="small">
          <div className="grouping-section">
            <Radio.Group 
              onChange={handleGroupingChange} 
              value={grouping}
              className="grouping-options"
            >
              {groupingOptions.map(option => (
                <Radio key={option.value} value={option.value} className="grouping-radio">
                  <Space size={6}>
                    {option.icon}
                    {option.label}
                  </Space>
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </Card>

        {/* 收藏夹 */}
        <Card className="control-card favorites-card" title={
          <Space size={8}>
            <FolderOpenOutlined />
            <span>收藏夹</span>
          </Space>
        } size="small">
          <div className="favorites-section">
            <Dropdown 
              dropdownRender={renderFavoritesMenu}
              trigger={['click']}
              placement="bottomRight"
            >
              <Button className="favorites-button" size="small">
                <Space size={4}>
                  保存当前搜索
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
        </Card>
      </div>
    </div>
  );

  const filterTags = getFilterTags();
  const groupingTag = getGroupingTag();

  return (
    <div className="advanced-search-container">
      <div className="search-component">
        {/* 搜索输入框和下拉按钮 */}
        <div className="search-input-wrapper" ref={inputWrapperRef}>
          <SearchOutlined className="search-icon" />
          <div 
            className="search-tags"
            ref={tagsContainerRef}
            onClick={() => setDropdownVisible(true)}
          >
            {filterTags.map(tag => (
              <Tag 
                key={tag.key}
                color={tag.color}
                closable
                onClose={() => removeFilter(tag.category, tag.value)}
                closeIcon={<CloseOutlined />}
                className="filter-tag"
              >
                <Space size={4}>
                  {tag.icon}
                  {tag.label}
                </Space>
              </Tag>
            ))}
            {groupingTag && (
              <Tag 
                color="orange"
                closable
                onClose={() => setGrouping('')}
                closeIcon={<CloseOutlined />}
                className="grouping-tag"
              >
                <Space size={4}>
                  {groupingTag.icon}
                  分组: {groupingTag.label}
                </Space>
              </Tag>
            )}
            {selectedFilterCount === 0 && !groupingTag && (
              <span className="placeholder-text">搜索...</span>
            )}
          </div>
          <Dropdown
            dropdownRender={renderDropdownContent}
            trigger={['click']}
            open={dropdownVisible}
            onOpenChange={setDropdownVisible}
            placement="bottomLeft"
          >
            <Button 
              className="dropdown-button"
              icon={<DownOutlined />}
              size="small"
            />
          </Dropdown>
          {selectedFilterCount > 0 && (
            <Badge count={selectedFilterCount} className="filter-count-badge" size="small" />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
