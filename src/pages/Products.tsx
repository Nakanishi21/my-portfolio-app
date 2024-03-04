import React from 'react';
import '../components/Glitch.css'
import { Button, Card, CardContent, Typography } from '@mui/material';
import "../style.css";

interface MyProduct {
  name: string;
  description: string;
  githubLink: string;
}

const Products: React.FC = () => {
  const myProducts: MyProduct[] = [
    {
      name: 'DecoText',
      description: '指定範囲の文字列をギャル文字に変換するVScodeの拡張を作成した。',
      githubLink: 'https://github.com/Nakanishi21/DecoText',
    },
    {
      name: 'GATHER-BUGIUGI',
      description: 'バーチャルオフィス「gather」で実行できる、漫画呪術廻戦に登場する能力「不義遊戯」を再現。\n拍手リアクションで指定したユーザー二人の位置を入れ替える。',
      githubLink: 'https://github.com/Nakanishi21/gather-bugiugi',
    },
    {
      name: 'BMI計算アプリ',
      description: 'ネイティブアプリ開発の画面操作等基本的な事の練習として、BMI計算アプリを作成した。',
      githubLink: 'https://github.com/Nakanishi21/MyBMICalc',
    },
    {
      name: '仮想通貨レート確認アプリ',
      description: 'ネイティブアプリ開発のAPI通信やコルーチンの練習として、仮想通貨レート確認アプリを作成した。',
      githubLink: 'https://github.com/Nakanishi21/CoinRate',
    },
  ];

  return (
    <div>
      <h1 className='glitch-text' data-text="作ったプロダクト">作ったプロダクト</h1>

      <div style={{ marginTop: '30px' }}>
      {myProducts.map((project, index) => (
        <Card key={index} style={{ background: 'transparent', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px', color: '#00ffcc' }}>
          <CardContent>
            <Typography variant="h5" component="div" color={"white"} style={{ marginBottom: '10px' }}>
              {project.name}
            </Typography>
            <Typography style={{ marginLeft: '10px', marginBottom: '30px' }} sx={{ whiteSpace: 'pre-line' }}>
              {project.description}
            </Typography>
            <Button variant="contained" href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub リポジトリ
            </Button>
          </CardContent>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default Products;