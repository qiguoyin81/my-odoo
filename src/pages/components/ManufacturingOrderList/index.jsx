import React from 'react';
import { CloudFilled, SearchOutlined, StarOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tag } from 'antd';

import styles from './index.module.less';

const ManufacturingOrderList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerRow}>
          <div className={styles.flexRowCenter}>
            <div className={styles.headerSection}>
              <div className={styles.headerSection}>
                <div className={styles.headerSection}>
                  <CloudFilled className={styles.cloudIcon} />
                </div>
                <div className={styles.headerSection}>
                  <span className={styles.navTitle}>制造</span>
                  <span className={styles.navSubtitle}>概述</span>
                  <span className={styles.navItem}>作业</span>
                  <span className={styles.navItem}>排期</span>
                  <span className={styles.navItem}>产品</span>
                  <span className={styles.navItem}>报表</span>
                  <span className={styles.navItem}>配置</span>
                </div>
              </div>
              <div className={styles.headerSection}>
                <img
                  alt=""
                  src="https://mdn.alipayobjects.com/fecodex_image/afts/img/qdFzQ5zqE1sAAAAAMrAAAAgAejH3AQBr/original"
                  className={styles.logoImage}
                />
                <div className={styles.userSection}>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/Jyb5RY50hiIAAAAAIjAAAAgAejH3AQBr/original"
                    className={styles.avatarImage}
                  />
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/t2TUTKXfXUAAAAAAGuAAAAgAejH3AQBr/original"
                    className={styles.notificationIcon}
                  />
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/yXhcRoU4RTMAAAAAFhAAAAgAejH3AQBr/original"
                    className={styles.notificationIcon}
                  />
                  <span className={styles.companyName}>
                    Company n FrancIsco)
                    <img
                      alt=""
                      src="https://mdn.alipayobjects.com/fecodex_image/afts/img/_5-wS4v7ioMAAAAAFjAAAAgAejH3AQBr/original"
                      className={styles.dropdownIcon}
                    />
                  </span>
                  <span className={styles.companyLocation}>Company n FrancIsco)</span>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/5STkTK6Em9oAAAAAQBAAAAgAejH3AQBr/original"
                    className={styles.settingsIcon}
                  />
                </div>
              </div>
            </div>
            <div className={styles.flexRowCenter}>
              <div className={styles.actionButtonsContainer}>
                <Button size="small" className={styles.createButton}>
                  新建
                </Button>
              </div>
              <div className={styles.titleContainer}>
                <span className={styles.pageTitle}>制造订单</span>
              </div>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/Uo-XTJfz7jAAAAAAFuAAAAgAejH3AQBr/original"
                className={styles.filterIcon}
              />
              <div className={styles.searchContainer}>
                <Input.Search
                  size="small"
                  addonBefore={
                    <div className={styles.searchAddon}>
                      <SearchOutlined className={styles.searchIcon} />
                      <div className={styles.todoContainer}>
                        <img
                          alt=""
                          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/dLnbQ5mTQT8AAAAAFWAAAAgAejH3AQBr/original"
                          className={styles.todoIcon}
                        />
                        <Button
                          shape="round"
                          size="small"
                          className={styles.todoButton}
                        >
                          <span className={styles.todoText}>待办</span>
                          <img
                            alt=""
                            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/0sVZT5F3_xYAAAAADdAAAAgAejH3AQBr/original"
                            className={styles.todoBadge}
                          />
                        </Button>
                      </div>
                    </div>
                  }
                  enterButton
                  placeholder="搜索..."
                  className={styles.searchInput}
                />
              </div>
              <div className={styles.paginationInfo}>
                <span className={styles.pageTitle}>1-3/3</span>
              </div>
              <div className={styles.paginationControls}>
                <Button shape="circle" size="small" className={styles.prevPageButton}>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/wmK-S5d8Pi8AAAAABoAAAAgAejH3AQBr/original"
                    className={styles.controlIcon}
                  />
                </Button>
                <Button shape="circle" size="small" className={styles.nextPageButton}>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/7ksKR67piEoAAAAAB5AAAAgAejH3AQBr/original"
                    className={styles.controlIcon}
                  />
                </Button>
                <Button
                  shape="circle"
                  size="small"
                  className={styles.currentPageButton}
                />
                <div className={styles.pageIndicator}>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/HqZ1SbFAIk8AAAAADhAAAAgAejH3AQBr/original"
                    className={styles.indicatorIcon}
                  />
                </div>
                <Button shape="round" size="small" className={styles.actionButton}>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/gTt7QJJIwX0AAAAAClAAAAgAejH3AQBr/original"
                    className={styles.actionButtonIcon}
                  />
                </Button>
                <Button
                  shape="round"
                  size="small"
                  className={styles.actionButton}
                />
                <Button shape="round" size="small" className={styles.moreActionsButton}>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/5rq5TbQy1kcAAAAADxAAAAgAejH3AQBr/original"
                    className={styles.controlIcon}
                  />
                </Button>
                <Button
                  shape="round"
                  size="small"
                  className={styles.actionButton}
                />
                <Button size="small" className={styles.refreshButton}>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/_o2aS4MJ890AAAAAF5AAAAgAejH3AQBr/original"
                    className={styles.todoBadge}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Table
          columns={[
            {
              title: '参考号',
              width: '15%',
              key: '1',
              render: () => (
                <div className={styles.flexRowCenter}>
                  <StarOutlined className={styles.favoriteIcon} />
                  <a className={styles.orderReferenceLink}>WH/MO/00002</a>
                </div>
              ),
            },
            {
              title: '开始',
              width: '5%',
              key: '2',
              render: () => <span className={styles.tableCellText}>2天前</span>,
            },
            {
              title: '产品',
              width: '15%',
              key: '3',
              render: () => (
                <span className={styles.tableCellText}>[FURN_7800]组合桌子</span>
              ),
            },
            {
              title: '下一个活动',
              width: '7%',
              key: '4',
              render: () => (
                <img
                  alt=""
                  src="https://mdn.alipayobjects.com/fecodex_image/afts/img/33iTSZzWzKAAAAAAItAAAAgAejH3AQBr/original"
                  className={styles.avatarImage}
                />
              ),
            },
            { title: '来源', width: '6%', key: '5' },
            { title: '组件状态', width: '9%', key: '6' },
            {
              title: (
                <div className={styles.flexRowCenter}>
                  <span className={styles.quantityLabel}>数量公司</span>
                  <span className={styles.statusLabel}>状态</span>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/SkZjSKxNNvQAAAAADHAAAAgAejH3AQBr/original"
                    className={styles.sortIcon}
                  />
                </div>
              ),
              key: '7',
              render: () => (
                <div className={styles.flexRowCenter}>
                  <a className={styles.companyLink}>
                    1.00 My Company (San Francisco)
                  </a>
                  <Tag color="rgb(216,218,221)" className={styles.statusTag}>
                    草稿
                  </Tag>
                </div>
              ),
            },
          ]}
          dataSource={[0, 1, 2]}
          pagination={false}
          rowSelection={<checkbox />}
          showHeader
          className={styles.ordersTable}
        />
        <span className={styles.totalQuantity}>5.00</span>
      </div>
    </div>
  );
};

export default ManufacturingOrderList;
