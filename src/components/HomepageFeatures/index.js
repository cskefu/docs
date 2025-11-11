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
    title: '源码开放',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        春松客服面向企业客户开放源码，方便企业定制化开发，长期使用。
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
