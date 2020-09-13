import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import axios from 'axios';

export default new Vuex.Store({
  state: {
    kijis: [
      {
        id: 1,
        title: '食欲をそそる濃厚醤油ラーメン！',
        text: '新宿駅から徒歩10分に位置するラーメン屋。40年前に開業。店内は昔からの常連客で盛り上がっています。',
        tag: ['ラーメン', '新宿', '常連客'],
        img: require('../assets/kijilist/k1.png')
      },
      {
        id: 2,
        title: '新鮮なお寿司を堪能できるお店！',
        text: 'いつもは回転ずしだけど、本格的なお寿司を食べたい。そんな方におすすめしたいのがこのお店。',
        tag: ['お寿司', '回転すし', '本格派'],
        img: require('../assets/kijilist/k2.png')
      },
      {
        id: 3,
        title: '紅茶と一緒にケーキはいかが？',
        text: '表参道駅から徒歩10分ほど先にあるのは、おしゃれな装飾の施されたお店です。この店一番のおすすめはショートケーキと紅…',
        tag: ['紅茶', 'ケーキ', 'ショートケーキ'],
        img: require('../assets/kijilist/k3.png')
      },
      {
        id: 4,
        title: 'サクッとしたカツが自慢のお店！',
        text: '分厚いお肉に黄金色に輝くサクサクの頃も。食べ応えのあるサクッとしたカツはいかがですか？',
        tag: ['カツ', '食べ応え', 'お肉'],
        img: require('../assets/kijilist/k4.png')
      },
      {
        id: 5,
        title: '餃子と言えばこのお店しかない',
        text: '餃子の街で知られている宇都宮で人気の餃子店。外はパリッ、中はジューシー。そんな餃子を…',
        tag: ['餃子', '八王子', '常連客'],
        img: require('../assets/kijilist/k5.png')
      }
    ],
    ads: [
      {
        id: 1,
        title: '餃子専門店「鱈腹（たらふく）」',
        text: '八王子駅から徒歩10分にある餃子専門店',
        tag: ['餃子', '八王子', '常連客'],
        img: require('../assets/kijilist/k5.png')
      },
      {
        id: 2,
        title: 'sample',
        text: 'sample',
        tag: ['sample', 'sample', 'sample'],
        img: require('../assets/kijilist/k1.png')
      },
      {
        id: 3,
        title: 'sample',
        text: 'sample',
        tag: ['sample', 'sample', 'sample'],
        img: require('../assets/kijilist/k1.png')
      },
      {
        id: 4,
        title: 'sample',
        text: 'sample',
        tag: ['sample', 'sample', 'sample'],
        img: require('../assets/kijilist/k1.png')
      },
      {
        id: 5,
        title: 'sample',
        text: 'sample',
        tag: ['sample', 'sample', 'sample'],
        img: require('../assets/kijilist/k1.png')
      }
    ],
    HbBtn: false,
    login: true,
    UpOk: true,
    UpOk2: true
  },
  mutations: {},
  actions: {},
  getters: {}
})
