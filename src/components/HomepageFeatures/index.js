import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '功能强大',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        春松客服是拥有坐席管理、渠道管理、机器人客服、数据分析、CRM 等功能于一身的新一代客服系统。
      </>
    ),
  },
  {
    title: '开源软件',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        春松客服使用的开源许可协议是 <a href="https://github.com/cskefu/cskefu/blob/develop/LICENSE">春松许可证 v1.0</a>，春松客服目前坐拥中文开源客服系统之中最多的 Stars, 最多的下载次数，最多的用户反馈。
      </>
    ),
  },
  {
    title: '商业服务',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <a href='https://www.chatopera.com/' target='_blank'>Chatopera</a> 提供有关春松客服的商业化服务及春松客服企业版，咨询详细功能、定制开发、报价或合作，欢迎与我们进行<a target='_blank' href='https://www.chatopera.com/mail.html'>商业洽谈</a>。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
