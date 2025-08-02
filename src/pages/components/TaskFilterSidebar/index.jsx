import React from 'react';
import { Input, Button, Select } from 'antd';
import { SearchOutlined, CaretUpFilled, StarFilled } from '@ant-design/icons';

import styles from './index.module.less';

const TaskFilterSidebar = () => {
  return (
    <div className={styles.wrapper}>
      <Input.Search
        addonBefore={
          <div className={styles.searchAddonContainer}>
            <SearchOutlined className={styles.searchIcon} />
            <div className={styles.addonContentContainer}>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/dLnbQ5mTQT8AAAAAFWAAAAgAejH3AQBr/original"
                className={styles.logoImage}
              />
              <Button className={styles.todoButton}>
                <span className={styles.todoButtonText}>待办</span>
                <img
                  alt=""
                  src="https://mdn.alipayobjects.com/fecodex_image/afts/img/0sVZT5F3_xYAAAAADdAAAAgAejH3AQBr/original"
                  className={styles.todoStatusIcon}
                />
              </Button>
            </div>
          </div>
        }
        enterButton={<CaretUpFilled className={styles.searchButtonIcon} />}
        placeholder="搜索..."
        className={styles.inputSearchContainer}
      />
      <div className={styles.mainContainer}>
        <div className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <div className={styles.filterCategory}>
              <div className={styles.filterItem}>
                <img
                  alt=""
                  src="https://mdn.alipayobjects.com/fecodex_image/afts/img/SE-AT7YqZFAAAAAAC-AAAAgAejH3AQBr/original"
                  className={styles.filterIcon}
                />
                <span className={styles.filterLabel}>筛选</span>
              </div>
              <div className={styles.filterItem}>
                <img
                  alt=""
                  src="https://mdn.alipayobjects.com/fecodex_image/afts/img/nu2sQo6B7hEAAAAACyAAAAgAejH3AQBr/original"
                  className={styles.statusIcon}
                />
                <span className={styles.statusLabel}>待办</span>
              </div>
              <div className={styles.filterItem}>
                <span className={styles.statusText}>已分解</span>
                <span className={styles.statusTextCompleted}>已完成</span>
              </div>
              <div className={styles.filterItem}>
                <span className={styles.statusTextCancelled}>已取消</span>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.filterCategory}>
              <span className={styles.categoryTitle}>标星</span>
              <div className={styles.divider} />
              <span className={styles.categoryItem}>此工作站</span>
              <div className={styles.divider} />
              <span className={styles.categoryItemStarred}>草稿</span>
              <div className={styles.statusGroupConfirmed}>
                <span className={styles.statusTextConfirmed}>已确认</span>
                <span className={styles.statusTextConfirmed}>已安排</span>
              </div>
              <div className={styles.statusGroupInProgress}>
                <span className={styles.statusTextInProgress}>进行中</span>
                <span className={styles.statusTextInProgress}>待关闭</span>
              </div>
            </div>
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.filterGroup}>
            <span className={styles.categoryTitle}>制造订单等待中</span>
            <span className={styles.statusTextReady}>MO准备就绪</span>
            <div className={styles.divider} />
          </div>
        </div>
        <div className={styles.groupingSection}>
          <div className={styles.groupingContainer}>
            <div className={styles.filterGroup}>
              <div className={styles.groupingHeader}>
                <img
                  alt=""
                  src="https://mdn.alipayobjects.com/fecodex_image/afts/img/SHqmRLAq0RcAAAAAISAAAAgAejH3AQBr/original"
                  className={styles.groupingIcon}
                />
                <span className={styles.filterLabel}>分组方式</span>
              </div>
              <div className={styles.groupingHeader}>
                <div className={styles.filterGroup}>
                  <span className={styles.groupingOption}>产品</span>
                  <span className={styles.groupingOption}>状态</span>
                  <span className={styles.groupingOption}>物料可用性</span>
                  <span className={styles.groupingOption}>采购组</span>
                  <span className={styles.groupingOption}>日期</span>
                </div>
                <img
                  alt=""
                  src="https://mdn.alipayobjects.com/fecodex_image/afts/img/KeA3Q7EZlW8AAAAACEAAAAgAejH3AQBr/original"
                  className={styles.groupingArrowIcon}
                />
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.customGroupContainer}>
              <span className={styles.customGroupText}>添加自定义分组</span>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/lHBjTInvyhwAAAAACFAAAAgAejH3AQBr/original"
                className={styles.customGroupIcon}
              />
            </div>
          </div>
          <div className={styles.verticalDivider} />
          <div className={styles.groupingContainer}>
            <div className={styles.favoriteContainer}>
              <StarFilled className={styles.favoriteIcon} />
              <span className={styles.favoriteText}>收藏夹</span>
            </div>
            <Select
              options={[]}
              placeholder="保存当前搜索"
              className={styles.saveSearchSelect}
            />
          </div>
        </div>
        <div className={styles.footerContainer}>
          <img
            alt=""
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/HuynSL2RuIgAAAAACZAAAAgAejH3AQBr/original"
            className={styles.footerImage}
          />
          <img
            alt=""
            src="https://mdn.alipayobjects.com/fecodex_image/afts/img/MNGuTpWdLRsAAAAACoAAAAgAejH3AQBr/original"
            className={styles.footerImage}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskFilterSidebar;
