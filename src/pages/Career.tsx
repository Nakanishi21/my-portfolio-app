import React from 'react';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import '../components/Glitch.css'

const Career: React.FC = () => {
  return (
    <div>
      <h1 className='glitch-text' data-text="経歴">経歴</h1>
      <h2 style={{color: "white"}}>学歴</h2>
      <Education 
        school="京都産業大学 コンピュータ理工学部"
        degree="学士号"
        year="2011-2015"
        sentences={[
          "脳科学を専攻。脳波を用いてPC操作をするための研究を行った。",
          "脳波の左右差やパワー値といったものを元に考えているものを推定し、その結果により画面の切り替えを行えるシステムを開発。"
        ]}
      />
      <Education
        school="京都産業大学大学院 先端情報学研究科"
        degree="修士号"
        year="2015-2017"
        sentences={[
          "脳の持つ身体組織図が訓練によって拡張されるのかについての研究を行った。",
          "人間の脳内には自分の体の範囲を認識し、どれくらい手を伸ばせば物に届くのかなどが判断できている。",
          "そこでマジックアームを自身の腕として物を持つ・下すといった動作を行った時、自身の腕の位置が伸びた感覚になるかなど身体組織図に変化があったかについて研究を行った。"
        ]} 
      />

      <h2 style={{color: "white"}}>職歴</h2>
      <WorkExperience
        company="日星電気株式会社"
        position="社内SE"
        year="2017-2018"
        sentences={[
          "下記の社内向けWebアプリケーションをWebPerformerというローコードツールで開発をした。",
          "・社用車予約システム",
          "・ロットトレースシステム",
          "・技術部門向け稟議書申請システム",
          "社内SEとして社内のPCや社用携帯のセットアップも行った。",
          "基本的に情シスだけで完結する作業は無く、常に他部署の人と連携をして仕事を進めていた。",
          "エンジニアとしてもっとコーディング力を身に着けたく転職を決意。"
        ]}
      />
      <WorkExperience
        company="株式会社ダブルクロップ"
        position="エンジニア（2021年から社内ではリーダーポジション）"
        year="2018-現在"
        sentences={[
          "SESとして様々なプロジェクトに参画。フロントエンド・バックエンド双方の開発に携わる。",
          "フロントエンドの開発ではTypeScriptとVueもしくはReactを用いた開発を行っている。",
          "バックエンドの開発では、Ruby on Rails, Kotlinを用いた開発を行っている。",
          "自社内の部署でリーダーを務めるようになり新人の育成を行ったり、SESでは希薄になりがちな自社内コミュニケーションの活性化に従事。",
          "直近では採用活動にも興味を持ち、採用のスクリーニングから面談の対応なども行っている。",
        ]}
      />
    </div>
  );
};

export default Career;