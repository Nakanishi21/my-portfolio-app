import React from 'react';
import '../components/Glitch.css'

interface StarRatingProps {
  rating: number;
  language: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, language }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} style={{color: "#FF0DC0"}} className={index < rating ? 'star-filled' : 'star-empty'}>★</span>
  ));

  return (
    <div className="star-rating">
      <strong>{language}:</strong> {stars}
    </div>
  );
};


const About: React.FC = () => {
  return (
    <div>
      <section>
        <h1 className='glitch-text' data-text="私について">私について</h1>
        <p>はじめまして！リチャードです（本名です）。</p>
        <p>
          サイバーパンクが好きで、将来的にはそういうものに囲まれた暮らしがしたいと思ってます。<br />
          このポートフォリオサイトもサイバーパンクっぽさをイメージして作ってみました
        </p>
        <p></p>
      </section>

      <section>
        <h2 className='glitch-text' data-text="趣味">趣味</h2>
        <ul>
          <li>サイバーパンク</li>
          <li>アクション映画鑑賞</li>
          <li>
            ドラム
            <ul>
              <li>好きなドラマー: シェーン・ガラース</li>
              <li>好きなバンド: B'z, 凛として時雨</li>
              <li>現職の会社内でバンドを組み月1の頻度で練習してます</li>
            </ul>
          </li>
          <li>
            バスケットボール
            <ul>
              <li>プレイヤー経験は、社内で何回かバスケをした程度</li>
              <li>生まれ故郷であるカナダのNBAチーム「トロントラプターズ」を応援してます</li>
              <li>でも一番好きな選手はヤニス・アデトクンボ</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h1 className='glitch-text' data-text="モットー">モットー</h1>
        <h2>楽しく働きたい。だから働く環境を楽しいものにしたい</h2>
        <p>
          基本的に仕事は1日8時間。1日の1/3を使っています。<br />
          この1/3を嫌々、つまらなく過ごすのは非常にもったいない。<br />
          「仕事は辛く大変なもの」という価値観を壊すべく、みんなが楽しく働ける・楽になる社内システムをどんどん作っていきたいです。<br />
        </p>
        <p></p>
      </section>

      <section>
        <h2 className='glitch-text' data-text="スキルセット">スキルセット</h2>
        <ul>
          <li>
            <StarRating rating={4} language="Ruby" />
            <ul>
              <li>フレームワークはRails</li>
              <li>だいたいのことはできる</li>
            </ul>
          </li>
          <li>
            <StarRating rating={3} language="Kotlin" />
            <ul>
              <li>サーバーサイドで主に使用</li>
              <li>最近あまり触れていない</li>
              <li>ネイティブアプリ開発はJetpackComposeの勉強中</li>
            </ul>
          </li>
          <li>
            <StarRating rating={3} language="TypeScript" />
            <ul>
              <li>主にReact, Vueをフレームワークとして使用</li>
              <li>フロントエンドでの使用が多い</li>
              <li>バックエンドでの使用経験もあり</li>
            </ul>
          </li>
          <li>
            <StarRating rating={1} language="Rust" />
            <ul>
              <li>ちょっと触ったことがある程度</li>
              <li>udemyで勉強中</li>
            </ul>
          </li>
          <li>
            <StarRating rating={1} language="Go" />
            <ul>
              <li>ちょっと触ったことがある程度</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;