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

const SECTION_MARGIN = '70px';

const About: React.FC = () => {
  return (
    <div>
      <section style={{ marginBottom: SECTION_MARGIN }}>
        <h1 className='glitch-text' data-text="私について">-私について-</h1>
        <p>はじめまして！リチャードです（本名です）</p>
        <p>
          カナダ生まれ日本育ちのエンジニア。（両親は日本人なので見た目も日本人です）<br />
          サイバーパンクが好きで、将来的にはそういうものに囲まれた暮らしがしたい。<br />
          新しい技術を学びつつ、何か面白い・楽しいものをたくさん作りたい。
        </p>
        <p></p>
      </section>

      <section style={{ marginBottom: SECTION_MARGIN }}>
        <h2 className='glitch-text' data-text="趣味">-趣味-</h2>
        <ul>
          <li>
            サイバーパンク
            <ul>
              <li>攻殻機動隊やAKIRA、ブレイドランナーの世界観にドはまり</li>
              <li>サイバーパンク世界観のゲームが好き</li>
              <li>サイバーパンクっぽい光る眼鏡を買ったが使い道に困っている</li>
            </ul>
          </li>
          <li>
            アクション映画鑑賞
              <ul>
                <li>好きな映画：マーベル作品や、ジョン・ウィック、ワイルドスピードシリーズ</li> 
                <li>肉弾戦のアクションが好き</li>
              </ul>
          </li>
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

      <section style={{ marginBottom: SECTION_MARGIN }}>
        <h1 className='glitch-text' data-text="モットー">-モットー-</h1>
        <p>自分の中では大事にしているものが3つあります</p>

        <h2 style={{color: "white"}}>褒められたい</h2>
        <p>
          正直に言って、褒められるのが好きです。<br />
          働く原動力の大きい部分はここだと思います。<br />
          社内外問わず、褒められるために日々努力しています。<br />
          作ったシステムで喜んで貰え、褒められることが何よりの喜びです。
        </p>

        <h2 style={{color: "white"}}>誰もが楽しく働ける、モチベーションの高い組織を目指したい</h2>
        <p>
          基本的に仕事は1日8時間。1日の1/3を使っています。<br />
          この1/3を嫌々、つまらなく過ごすのは非常にもったいないと思います。<br />
          「仕事は辛く大変なもの」という考えで淡々とやり過ごすのではなく、「仕事は楽しくやりがいに満ちたもの」という理想を目指したいです。<br />
          では、人が楽しく働ける状況はどういうったものなのか考えた時に僕は、楽しく働ける環境＝モチベーションが高く臨める環境なのではないかと思いました。<br />
          モチベーションが高い（やりたいことがやれている）環境であれば、1日の1/3をつまらなく過ごすことなく、やる気も上がり高い生産性にも繋がるのではないかと思っています。<br />
          モチベーションには波があり、常に高いままを維持するのは難しく、急に上がったモチベーションは急に下がることもあるため、ただ単にモチベーションを上げるのではなく、<br />
          そのメカニズムを理解し、モチベーションを上げやすく・維持しやすい状態というのを目指したいです。<br />
          また、人によりモチベーションの上がり下がりの要因は異なるので、チーム・組織全体のモチベ管理について、その時のチームメンバーと手探りで答えを探し、どんどん知見を深めていきたいです。
        </p>

        <h2 style={{color: "white"}}>チームでハイタッチ</h2>
        <p>
          一人での成果も大切ですが、何か大きな目標を達成するには、チームワークが不可欠だと感じます。<br />
          小さな仕事やタスクでは一人でこなすこともできますが、本質的には協力が必要な瞬間があります。<br />
          個人の達成感はある一方で、大きなプロジェクトや目標に取り組む際は、チームで協力することがより意味深く、楽しいものとなります。<br />
          個人の成功の喜び度が100であれば、それをチームで達成した時の喜び度は100×チームの人数分になると考えています。<br />
          一人で進めることが大切な場面もありますが、チーム全体が力を合わせお互いのベストを尽くし協力しあえば、喜びも倍増すると思います。<br />
          ですので、みんなで協力し合って、共に喜びを分かち合いましょう！ハイタッチ！
        </p>
      </section>

      <section style={{ marginBottom: SECTION_MARGIN }}>
        <h2 className='glitch-text' data-text="スキルセット">-スキルセット-</h2>
        <ul>
          <li>
            <StarRating rating={4} language="Ruby" />
            <ul>
              <li>フレームワークはRails</li>
              <li>ある程度のことはできる</li>
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